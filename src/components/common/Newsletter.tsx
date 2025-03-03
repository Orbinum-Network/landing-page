import { useState, useRef } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { Modal } from "./Modal";
import { Icon } from "@iconify/react";

interface NewsletterProps {
    styleColor: "black" | "white";
}

export const Newsletter = ({ styleColor }: NewsletterProps) => {
    const textColor = styleColor === "black" ? "text-black" : "text-white";
    const bgColor = styleColor === "black" ? "bg-white" : "bg-secondary-900";

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState<JSX.Element | string>("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const emailRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const email = emailRef.current?.value.trim();

        if (!email) {
            setModalMessage("Please enter a valid email address.");
            setIsSuccess(false);
            setIsModalOpen(true);
            return;
        }

        setIsLoading(true);

        try {

            // not yet

            setModalMessage("Thank you for subscribing!");
            setIsSuccess(true);
        } catch {
            setModalMessage("Something went wrong. Please try again.");
            setIsSuccess(false);
        } finally {
            if (emailRef.current) emailRef.current.value = "";
            setIsLoading(false);
        }
        setIsModalOpen(true);
    };

    return (
        <AnimatedSection>
            <section className={`py-32 px-6 md:px-12 ${bgColor} text-center ${textColor}`}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Stay Updated With Us</h2>
                    <p className="text-lg md:text-xl mb-6">
                        Subscribe to our newsletter and be the first to receive the latest updates, insights, and exclusive news about Orbinum's ecosystem.
                    </p>
                    <form className="flex flex-col md:flex-row justify-center gap-4" onSubmit={handleSubmit}>
                        <input
                            ref={emailRef}
                            type="email"
                            placeholder="Enter your email"
                            className="w-full md:w-2/3 px-4 py-2 text-black rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary-500 outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-secondary-500 px-6 py-2 rounded-lg font-medium text-white transition duration-300 hover:bg-secondary-700"
                            disabled={isLoading}
                        >
                            {isLoading ? "Subscribing..." : "Subscribe"}
                        </button>
                    </form>
                </div>
            </section>
            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <div className="flex flex-col items-center text-center">
                        {isSuccess ? (
                            <Icon icon="mdi:check-circle" className="text-green-500 text-4xl mb-2" />
                        ) : (
                            <Icon icon="mdi:alert-circle" className="text-red-500 text-4xl mb-2" />
                        )}
                        <p className="text-lg font-semibold">{modalMessage}</p>
                    </div>
                </Modal>
            )}
        </AnimatedSection>
    );
};