import { SectionLayout } from "@/layout";
import backgroundImage from "@/assets/background-about.webp";
import stars1 from "@/assets/stars1.webp";
import stars2 from "@/assets/stars2.webp";
import stars3 from "@/assets/stars3.webp";
import geometry1 from "@/assets/geometry1.webp";
import geometry2 from "@/assets/geometry2.webp";
import geometry3 from "@/assets/geometry3.webp";

export function AboutSection() {
    const grids = [
        {
            title: "Run a Validator Node",
            description: "Secure the network, validate AI, earn rewards.",
            bg: stars1,
            figure: geometry1,
            url: "https://docs.orbinum.net/basic-concepts/participants#validators-guardians-and-ai-operators-of-the-orbinum-network"
        },
        {
            title: "Stake & Govern",
            description: "Support Validators, shape Orbinum, earn ON.",
            bg: stars2,
            figure: geometry2,
            url: "https://docs.orbinum.net/basic-concepts/participants#nominators-supporting-network-security"
        },
        {
            title: "Contribute Compute",
            description: "Power AI tasks, earn rewards for your GPUs.",
            bg: stars3,
            figure: geometry3,
            url: "https://docs.orbinum.net/basic-concepts/participants#contributors-providing-computational-power-for-ai"
        },
    ];

    return (
        <SectionLayout>
            <div className="grid gap-5 justify-center">
                <div className="relative overflow-hidden rounded-3xl group border border-secondary-700 hover:border-secondary-600 h-96 mb-5">
                    <div
                        className="absolute inset-0 z-0 bg-cover bg-top transition-transform duration-500 ease-in-out group-hover:scale-110"
                        style={{ backgroundImage: `url(${backgroundImage})` }}
                    ></div>
                    <div className="relative z-20 flex flex-col justify-center h-full w-full lg:w-1/2">
                        <div className="px-6 max-w-3xl mx-auto">
                            <h1 className="font-roboto mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-white">
                                Decentralized AI, Collaborative Growth
                            </h1>
                            <p className="mb-6 font-light text-gray-300 lg:mb-8 md:text-lg">
                                Join Orbinum Network and be part of a decentralized AI ecosystem. Earn incentives by contributing to innovation and network strength.
                            </p>
                            <a href="https://docs.orbinum.net/quick-start/whats_orbinum" target="_blank" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white border border-transparent hover:border-secondary-300 rounded-xl">
                                Learn More
                                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="max-w-screen-xl grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {grids.map((grid, index) => (
                        <a
                            key={index}
                            className="cursor-pointer w-full relative overflow-hidden rounded-3xl group border border-secondary-700 hover:border-secondary-600 h-60 lg:h-96 transition-all duration-300 ease-in-out"
                            href={grid.url}
                            target="_blank"
                        >
                            <div
                                className="absolute inset-0 z-0 opacity-50 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-125"
                                style={{
                                    backgroundImage: `url(${grid.bg})`,
                                }}
                            ></div>
                            <div className="relative flex justify-center">
                                <img src={grid.figure} className="absolute opacity-50 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] group-hover:opacity-100 transition-all duration-500 ease-in-out group-hover:scale-75" alt="" />
                            </div>

                            <div className="relative z-10 h-full p-4 flex flex-col justify-between">
                                <div className="flex justify-end opacity-0 translate-y-[-20px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-12 w-12 text-white bg-secondary-700 rounded-full p-2 shadow-lg"
                                        fill="none"
                                        viewBox="0 0 50 50"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m38.288 10.297l1.414 1.415l-14.99 14.99l-1.414-1.414z" />
                                        <path fill="currentColor" d="M40 20h-2v-8h-8v-2h10zm-5 18H15c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h11v2H15c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V24h2v11c0 1.7-1.3 3-3 3" />
                                    </svg>
                                </div>
                                <div className="card p-4 flex flex-col">
                                    <h2 className="text-xl font-bold text-secondary-100">{grid.title}</h2>
                                    <p className="text-base my-2 text-secondary-200">{grid.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </SectionLayout>
    );
}