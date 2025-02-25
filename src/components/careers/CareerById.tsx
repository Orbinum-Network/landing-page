import { API_URL } from "@/config";
import { Career } from "@/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";
import { Loader } from "../common";
import { useNavigate } from "react-router";
import { ApplicationModal } from "./ApplicationModal";
import { Icon } from "@iconify/react/dist/iconify.js";

export const CareerById = ({ id }: { id: Career["id"] }) => {
    const [career, setCareer] = useState<Career | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const getCareerById = async (id: Career["id"]) => {
        setLoading(true);
        try {
            const response = await axios.get<Career>(`${API_URL}/careers/${id}`);
            setCareer(response.data);
        } catch (err) {
            if (axios.isAxiosError(err)) {
                if (err.response?.status === 404) {
                    setError(err.response.data.message);
                } else {
                    setError("Failed to load career. Please try again later.");
                }
            } else {
                setError("An unexpected error occurred.");
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            getCareerById(id);
        }
    }, [id]);

    return (
        <div className="py-12 max-w-4xl mx-auto px-4">
            <button
                onClick={() => navigate(-1)}
                className="mb-3 text-secondary-100 hover:text-secondary-300 flex items-center gap-1">
                <Icon icon="material-symbols-light:arrow-back" width="20" height="20" /> Back
            </button>

            {loading && (
                <div className="flex justify-center">
                    <Loader />
                </div>
            )}

            {error && <div className="text-center text-red-500 text-lg">{error}</div>}

            {career && (
                <>
                    <div className="p-6 bg-secondary-900 rounded-lg shadow-md border border-gray-400 space-y-6">
                        <h1 className="text-3xl font-extrabold text-secondary-100">{career.title}</h1>
                        <div className="text-secondary-300 text-lg">
                            <span>{career.location}</span> - <span>{career.employment_type}</span>
                        </div>
                        <p className="text-secondary-200 leading-relaxed">{career.description}</p>

                        {career.requirements && career.requirements.length > 0 && (
                            <div className="mt-6 p-6 bg-secondary-800 rounded-lg">
                                <h2 className="text-2xl font-semibold text-secondary-100">Requirements</h2>
                                <ul className="list-disc list-inside mt-3 space-y-2 text-secondary-300">
                                    {career.requirements.map((req, index) => (
                                        <li key={index}>{req}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="mt-10 p-6 bg-secondary-800 rounded-lg">
                            <h2 className="text-2xl font-semibold text-secondary-100">About working for us</h2>
                            <p className="text-secondary-300 mt-3">
                                We value innovation, collaboration, and a growth mindset. Our team is dedicated to making a difference in the industry by fostering a culture of learning and professional development.
                            </p>
                        </div>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-5 py-3 bg-primary text-secondary-100 rounded-lg hover:bg-primary-hover transition duration-300">
                            Apply for this job
                        </button>
                    </div>
                    <ApplicationModal careerId={career.id} careerTitle={career.title} isOpen={isModalOpen}  onClose={() => setIsModalOpen(false)} />
                </>
            )}
        </div>
    );
};