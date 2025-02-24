import { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from "../common";
import { Icon } from "@iconify/react/dist/iconify.js";
import { API_URL } from "@/config";

interface ApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    careerTitle: string;
}

export const ApplicationModal = ({ isOpen, onClose, careerTitle }: ApplicationModalProps) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        linkedIn: "",
        website: "",
        github: "",
        file: null as File | null,
    });

    const [errors, setErrors] = useState({ name: "", email: "", file: "" });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = event.target.files?.[0] || null;
        if (uploadedFile) {
            setFormData((prev) => ({ ...prev, file: uploadedFile }));
            setErrors((prev) => ({ ...prev, file: "" }));
        }
    };

    const resetForm = () => {
        setFormData({
            name: "",
            email: "",
            linkedIn: "",
            website: "",
            github: "",
            file: null,
        });
        setErrors({ name: "", email: "", file: "" });
        setLoading(false);
        setSubmitted(false);
    };

    const handleOnClose = () => {
        resetForm();
        onClose();
    };

    useEffect(() => {
        if (isOpen) {
            resetForm();
        }
    }, [isOpen]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setErrors({ name: "", email: "", file: "" });

        let newErrors = { name: "", email: "", file: "" };
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) newErrors.email = "Email is required.";
        if (!formData.file) newErrors.file = "Please upload your resume.";

        if (newErrors.name || newErrors.email || newErrors.file) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }

        try {
            const formDataToSend = new FormData();
            formDataToSend.append("name", formData.name);
            formDataToSend.append("email", formData.email);
            formDataToSend.append("linkedIn", formData.linkedIn);
            formDataToSend.append("website", formData.website);
            formDataToSend.append("github", formData.github);
            formDataToSend.append("resume", formData.file as Blob);

            await axios.post(`${API_URL}/careers/apply`, formDataToSend, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            setSubmitted(true);
        } catch (error) {
            setErrors((prev) => ({
                ...prev,
                file: "Failed to submit application. Please try again.",
            }));
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={() => handleOnClose()}>
            {submitted ? (
                <div className="text-center p-2">
                    <Icon icon="mdi:check-circle" className="text-green-500 text-6xl mx-auto" />
                    <h2 className="text-secondary-700 text-xl font-bold mt-4">Application Submitted</h2>
                    <p className="text-secondary-500 mt-2">Thank you for applying for {careerTitle}. We will review your application and contact you at <strong>{formData.email}</strong> soon.</p>
                    <button onClick={() => handleOnClose()} className="mt-6 px-6 py-2 bg-secondary-300 text-white rounded-lg hover:bg-secondary-500 transition duration-300">Close</button>
                </div>
            ) : (
                <>
                    <h2 className="text-secondary-700 text-xl font-bold mb-4">Apply for {careerTitle}</h2>
                    <form onSubmit={handleSubmit} className="space-y-4 text-secondary-500">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full p-3 border rounded"
                            required
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full p-3 border rounded"
                            required
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        <input
                            type="text"
                            name="linkedIn"
                            placeholder="LinkedIn Profile"
                            value={formData.linkedIn}
                            onChange={handleInputChange}
                            className="w-full p-3 border rounded"
                        />
                        <input
                            type="text"
                            name="website"
                            placeholder="Website"
                            value={formData.website}
                            onChange={handleInputChange}
                            className="w-full p-3 border rounded"
                        />
                        <input
                            type="text"
                            name="github"
                            placeholder="GitHub"
                            value={formData.github}
                            onChange={handleInputChange}
                            className="w-full p-3 border rounded"
                        />
                        <label className="relative flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-secondary-100 transition duration-300">
                            <Icon icon="material-symbols:upload" width="20" height="20" />
                            <span>{formData.file ? formData.file.name : "Upload your resume (PDF, DOC, DOCX)"}</span>
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                onChange={handleFileChange}
                            />
                        </label>
                        {errors.file && <p className="text-red-500 text-sm">{errors.file}</p>}
                        <button
                            type="submit"
                            className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition duration-300 disabled:bg-gray-400"
                            disabled={loading}
                        >
                            {loading ? "Submitting..." : "Submit Application"}
                        </button>
                        <p className="mt-4 text-xs text-secondary-600">
                            All information you share during the application process is strictly confidential and will not be shared with any third parties. It is used exclusively for job application purposes.
                        </p>
                    </form>
                </>
            )}
        </Modal>
    );
};