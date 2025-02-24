import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/config";
import { Loader } from "@/components/common";
import { Career } from "@/interfaces";
import { Link } from "react-router";

export const AllCareers = () => {
    const [careers, setCareers] = useState<Career[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCareers = async () => {
            try {
                const response = await axios.get<Career[]>(`${API_URL}/careers`);
                setCareers(response.data);
            } catch {
                setError("Failed to load vacancies. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchCareers();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center py-12">
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500 text-lg py-12">
                {error}
            </div>
        );
    }

    return (
        <div className="py-12 max-w-4xl mx-auto px-4">
            {careers && careers.length > 0 ? (
                <div className="space-y-6">
                    <div>
                        <h1 className="font-roboto mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-2xl">
                            Available Vacancies
                        </h1>
                        <p>We are actively seeking new talent to join our team!</p>
                    </div>
                    <div className="space-y-3">
                        {careers.map((career) => (
                            <div
                                key={career.id}
                                className="flex flex-col md:flex-row justify-between gap-3 p-6 bg-secondary-900 rounded-lg shadow-md border border-gray-400"
                            >
                                <div className="grid">
                                    <h2 className="text-2xl font-semibold text-secondary-100 mb-2">
                                        {career.title}
                                    </h2>
                                    <p className="text-xl text-secondary-300">
                                        {career.location}
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <Link
                                        to={career.id}
                                        rel="noopener noreferrer"
                                        className="inline-block px-4 py-2 bg-primary text-secondary-100 rounded hover:bg-primary-hover transition duration-300"
                                    >
                                        Apply
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="text-center text-secondary-100 text-lg md:text-4xl">
                    There are no vacancies available at the moment.
                </div>
            )}
        </div>
    );
};