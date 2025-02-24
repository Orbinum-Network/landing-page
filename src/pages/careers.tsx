import { Divider } from "@/components/common";
import { SectionLayout } from "@/layout";
import backgroundImage from "@/assets/careers_bg.webp";
import { AllCareers, CareerById } from "@/components/careers";
import { useParams } from "react-router";

export function CareersPage() {
    const { id } = useParams();

    return (
        <>
            <div className="h-screen bg-cover bg-top flex items-center grayscale"
                style={{
                    backgroundImage: `
                    linear-gradient(
                        to bottom, 
                        rgba(0, 0, 0, 0) 50%, 
                        rgba(0, 0, 0, 0.5) 65%, 
                        rgba(0, 0, 0, 0.8) 80%, 
                        rgba(0, 0, 0, 1) 100%
                    ), 
                    url(${backgroundImage})`,
                }}
            >
                <div
                    className="grid max-w-screen-xl px-12 py-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 h-96"
                >
                    <div className="mr-auto place-self-center lg:col-span-7 z-20 text-secondary-50">
                        <h1 className="font-roboto max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-7xl">
                            Join The <br /> Orbinum Network Team!
                        </h1>
                        <p className="max-w-2xl mb-6 lg:mb-8 md:text-xl">
                            We're looking for talented Software Engineers and AI specialists to help us build the future of decentralized AI.  If you're passionate about innovation and want to work on cutting-edge technology, we encourage you to explore opportunities with us.
                        </p>
                    </div>
                </div>
            </div>
            <Divider />
            <SectionLayout>
                {
                    id ? <CareerById id={id} /> : <AllCareers />
                }
            </SectionLayout>
            <Divider />
            <div className="h-min-[500px] flex items-center mt-16">
                <div className="grid max-w-screen-xl px-12 py-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 h-96">
                    <div className="mr-auto place-self-center lg:col-span-7 z-20">
                        <h1 className="font-roboto max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl text-white">
                            Application Process
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-md">
                            Once you submit your application, our recruitment team will carefully review your profile.
                            If your qualifications align with the role, we will reach out within 7 business days to discuss the next steps.
                            Our selection process typically includes an initial interview, a skills assessment, and a final discussion with the hiring manager.
                            Regardless of the outcome, you will receive a response from us. We appreciate your time and interest in joining Orbinum Network.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
