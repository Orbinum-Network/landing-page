import { SectionLayout } from "@/layout";
import federated from "@/assets/federated.webp";
import feature3 from "@/assets/feature3.webp";
import privacity from "@/assets/privacity.webp";
import { SectionTitle } from "../common";

export function FeaturesSection() {
    return (
        <SectionLayout>
            <SectionTitle title="Unique Infrastructure" titleTwo="For Advanced AI Models" />
            <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto items-center group rounded-3xl border border-secondary-900 hover:border-secondary-800 min-h-[150px] lg:min-h-[300px]">
                    <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-none order-2 md:order-1 p-6 lg:p-8 h-full flex flex-col justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-transparent text-secondary-100 border border-secondary-400 transition-all duration-300 group-hover:text-white group-hover:shadow-[0_0_20px_1px_rgba(255,255,255,0.8)]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                className="transition-all duration-300 group-hover:fill-white group-hover:stroke-white"
                            >
                                <path
                                    fill="currentColor"
                                    d="M8.075 20q-.275 0-.512-.137t-.363-.388L5.25 16H6.7l1 2H10v-1H8.3l-1-2H4.7l-1.425-2.5q-.05-.125-.087-.25T3.15 12q0-.1.125-.5L4.7 9h2.6l1-2H10V6H7.7l-1 2H5.25L7.2 4.525q.125-.25.362-.387T8.076 4H10.5q.425 0 .713.288T11.5 5v4H10l-1 1h2.5v3H9.3l-1-2H6l-1 1h2.7l1 2h2.8v5q0 .425-.288.713T10.5 20zM14 20q-.825 0-1.412-.587T12 18q0-.575.275-1.012t.725-.713v-8.55q-.45-.275-.725-.712T12 6q0-.825.588-1.412T14 4t1.413.588T16 6q0 .575-.275 1.013T15 7.725v2.525l2-1.2q0-.85.588-1.45T19 7t1.413.588T21 9t-.587 1.413T19 11q-.275 0-.513-.062t-.462-.188l-2.275 1.375l2.525 2q.175-.075.35-.1T19 14q.825 0 1.413.588T21 16t-.587 1.413T19 18q-.925 0-1.513-.7t-.462-1.6L15 14.075V16.3q.45.275.713.713t.262.987q0 .825-.575 1.413T14 20"
                                />
                            </svg>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-2xl font-bold tracking-tight text-white">
                                Distributed Model Sharding Framework
                            </h2>
                            <p className="mt-4 text-md text-gray-300">
                                Orbinum divides large AI models into smaller shards, distributing them across multiple nodes for efficient storage and retrieval. This ensures scalability and fault tolerance, with cryptographic validation to maintain data integrity.
                            </p>
                        </div>
                    </div>
                    <div className="relative flex justify-center order-1 md:order-2 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black z-10"></div>
                        <img
                            loading="lazy"
                            className="w-full lg:max-w-none opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:brightness-125 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] z-0"
                            style={{ color: 'transparent' }}
                            src={`${feature3}`}
                            alt="Decentralized AI Network"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto items-center group rounded-3xl border border-secondary-900 hover:border-secondary-800 min-h-[150px] lg:min-h-[300px]">
                    <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-none order-2 p-6 lg:p-8 h-full flex flex-col justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-transparent text-secondary-100 border border-secondary-400 transition-all duration-300 group-hover:text-white group-hover:shadow-[0_0_20px_1px_rgba(255,255,255,0.8)]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                className="transition-all duration-300 group-hover:fill-white group-hover:stroke-white"
                            >
                                <path
                                    fill="currentColor"
                                    d="M8.075 20q-.275 0-.512-.137t-.363-.388L5.25 16H6.7l1 2H10v-1H8.3l-1-2H4.7l-1.425-2.5q-.05-.125-.087-.25T3.15 12q0-.1.125-.5L4.7 9h2.6l1-2H10V6H7.7l-1 2H5.25L7.2 4.525q.125-.25.362-.387T8.076 4H10.5q.425 0 .713.288T11.5 5v4H10l-1 1h2.5v3H9.3l-1-2H6l-1 1h2.7l1 2h2.8v5q0 .425-.288.713T10.5 20zM14 20q-.825 0-1.412-.587T12 18q0-.575.275-1.012t.725-.713v-8.55q-.45-.275-.725-.712T12 6q0-.825.588-1.412T14 4t1.413.588T16 6q0 .575-.275 1.013T15 7.725v2.525l2-1.2q0-.85.588-1.45T19 7t1.413.588T21 9t-.587 1.413T19 11q-.275 0-.513-.062t-.462-.188l-2.275 1.375l2.525 2q.175-.075.35-.1T19 14q.825 0 1.413.588T21 16t-.587 1.413T19 18q-.925 0-1.513-.7t-.462-1.6L15 14.075V16.3q.45.275.713.713t.262.987q0 .825-.575 1.413T14 20"
                                />
                            </svg>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-2xl font-bold tracking-tight text-white">
                                Federated Learning Framework
                            </h2>
                            <p className="mt-4 text-md text-gray-300">
                                Collaborative AI model training across decentralized nodes ensures data privacy and sovereignty. Nodes train models locally and share only model updates, which are aggregated to improve the global model.
                            </p>
                        </div>
                    </div>
                    <div className="relative flex justify-center order-1 overflow-hidden">
                        <div className="absolute z-10 top-0 -left-2 w-2/5 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
                        <img
                            loading="lazy"
                            className="w-full lg:max-w-[500px] opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:brightness-125 group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
                            style={{ color: 'transparent' }}
                            src={`${federated}`}
                            alt="Decentralized AI Network"
                        />
                        <div className="absolute z-10 top-0 -right-2 w-2/5 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto items-center group rounded-3xl border border-secondary-900 hover:border-secondary-800 min-h-[150px] lg:min-h-[300px]">
                    <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-none order-2 md:order-1 p-6 lg:p-8 h-full flex flex-col justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-transparent text-secondary-100 border border-secondary-400 transition-all duration-300 group-hover:text-white group-hover:shadow-[0_0_20px_1px_rgba(255,255,255,0.8)]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                className="transition-all duration-300 group-hover:fill-white group-hover:stroke-white"
                            >
                                <path
                                    fill="currentColor"
                                    d="M8.075 20q-.275 0-.512-.137t-.363-.388L5.25 16H6.7l1 2H10v-1H8.3l-1-2H4.7l-1.425-2.5q-.05-.125-.087-.25T3.15 12q0-.1.125-.5L4.7 9h2.6l1-2H10V6H7.7l-1 2H5.25L7.2 4.525q.125-.25.362-.387T8.076 4H10.5q.425 0 .713.288T11.5 5v4H10l-1 1h2.5v3H9.3l-1-2H6l-1 1h2.7l1 2h2.8v5q0 .425-.288.713T10.5 20zM14 20q-.825 0-1.412-.587T12 18q0-.575.275-1.012t.725-.713v-8.55q-.45-.275-.725-.712T12 6q0-.825.588-1.412T14 4t1.413.588T16 6q0 .575-.275 1.013T15 7.725v2.525l2-1.2q0-.85.588-1.45T19 7t1.413.588T21 9t-.587 1.413T19 11q-.275 0-.513-.062t-.462-.188l-2.275 1.375l2.525 2q.175-.075.35-.1T19 14q.825 0 1.413.588T21 16t-.587 1.413T19 18q-.925 0-1.513-.7t-.462-1.6L15 14.075V16.3q.45.275.713.713t.262.987q0 .825-.575 1.413T14 20"
                                />
                            </svg>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-2xl font-bold tracking-tight text-white">
                                Privacy and Security
                            </h2>
                            <p className="mt-4 text-md text-gray-300">
                                We employ advanced cryptographic techniques, such as zero-knowledge proofs and cryptographic signatures, to ensure data integrity and prevent tampering. Each model shard is securely signed, and only validated data is used in model reconstruction. This robust security framework guarantees that your contributions and data remain protected at all times.
                            </p>
                        </div>
                    </div>
                    <div className="relative flex justify-center order-1 md:order-2">
                        <div className="absolute z-10 top-0 -left-2 w-2/5 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
                        <img
                            loading="lazy"
                            className="w-full lg:max-w-none opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:brightness-125 group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
                            style={{ color: 'transparent' }}
                            src={`${privacity}`}
                            alt="Decentralized AI Network"
                        />
                        <div className="absolute z-10 top-0 -right-2 w-2/5 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
                    </div>

                </div>
            </div>
        </SectionLayout>
    );
}