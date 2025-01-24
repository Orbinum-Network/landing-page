import decentralizedNetwork from "@/assets/decentralized_ia.webp";
import datastorage from "@/assets/datastore.webp";
import privacity from "@/assets/privacity.webp";

export function FeaturesSection() {
    return (
        <>
            <div className="relative overflow-hidden py-16">
                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                            <div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-extrabold leading-10 tracking-tight text-secondary-100 sm:leading-none">
                                        Decentralized AI Network
                                    </h2>
                                    <p className="mt-4 text-lg text-secondary-300">
                                        Empower a distributed AI ecosystem where nodes contribute computational power and storage to train and run AI models. Participate in the network, earn tokens, and help decentralize intelligence for a more open and collaborative future.                                    </p>
                                    <div className="mt-6">
                                        <a className="inline-flex rounded-lg bg-transparent px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-primary hover:bg-primary hover:ring-primary"
                                            href="/learn-more">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0 rounded-xl"
                                style={{ backgroundImage: `url(${decentralizedNetwork})`, backgroundSize: "cover", backgroundPosition: "left" }}>
                                <div className="w-full h-full bg-opacity-60 bg-gradient-to-r from-black via-transparent to-transparent" style={{ backgroundSize: '100% 100%', backgroundPosition: '0% 0%' }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                            <div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-extrabold leading-10 tracking-tight text-secondary-100 sm:leading-none">
                                        Transparent Data Storage
                                    </h2>
                                    <p className="mt-4 text-lg text-secondary-300">
                                        Utilize IPFS for fast, decentralized data sharing and Filecoin for permanent, secure storage of critical datasets and models. Every operation is logged on the blockchain, ensuring full transparency and traceability.                                    </p>
                                    <div className="mt-6">
                                        <a className="inline-flex rounded-lg bg-transparent px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-primary hover:bg-primary hover:ring-primary" href="/learn-more">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0 rounded-xl"
                                style={{ backgroundImage: `url(${datastorage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                                <div className="w-full h-full bg-opacity-60 bg-gradient-to-r from-transparent to-black ">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                            <div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-extrabold leading-10 tracking-tight text-secondary-100 sm:leading-none">
                                        Privacy-First Design
                                    </h2>
                                    <p className="mt-4 text-lg text-secondary-300">
                                        Protect sensitive data with end-to-end encryption for datasets and client requests. Achieve secure, private AI processing while maintaining transparency through blockchain-based audit logs.                                    </p>
                                    <div className="mt-6">
                                        <a className="inline-flex rounded-lg bg-transparent px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-primary hover:bg-primary hover:ring-primary" href="/learn-more">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0 rounded-xl"
                                style={{ backgroundImage: `url(${privacity})`, backgroundSize: "cover", backgroundPosition: "left" }}>
                                <div className="w-full h-full bg-opacity-60 bg-gradient-to-r from-black via-transparent to-transparent" style={{ backgroundSize: '100% 100%', backgroundPosition: '0% 0%' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
