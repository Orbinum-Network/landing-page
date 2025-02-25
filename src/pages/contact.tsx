import { AnimatedSection } from "@/components/common";

export function ContactPage() {
    return (
        <AnimatedSection>
            <div className="min-h-screen bg-secondary-900 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-6 text-center">
                    <h2 className="text-4xl font-bold text-secondary-50 font-zcool">Get in Touch</h2>
                    <p className="text-secondary-200 font-roboto">
                        If you have questions about our project, need assistance, or simply want to explore opportunities with us, we're here to help. Reach out today and let's connect!
                    </p>
                    <a
                        href="mailto:contact@orbinum.net"
                        className="inline-block w-full p-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover focus:ring-2 focus:ring-primary-focus transition"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </AnimatedSection>
    )
}
