import bg from "@/assets/sectorbg.png";

export function SdkSection() {
    return (
        <div className="py-16">
            <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
                <div className="absolute z-1 -top-40">
                    <img src={bg} className="h-80" />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(rgb(0 0 0 / 0%), rgb(0 0 0))',
                        }}
                    ></div>
                </div>
                <div className="relative z-2 flex items-center py-5 md:w-1/2 md:pb-10 md:pt-10 md:pr-10">
                    <div className="text-left">
                        <h2
                            className="text-4xl font-extrabold leading-10 tracking-tight text-secondary-100 sm:text-5xl sm:leading-none md:text-6xl">
                            Orbinum
                            <span className="font-bold text-primary">SDK</span>
                            <span className="text-xl font-semibold rounded-full text-secondary-300">soon</span>
                        </h2>
                        <p className="max-w-md mx-auto mt-3 text-base text-secondary-300 md:mt-5 text-lg md:max-w-3xl">
                            The Orbinum SDK enables developers to effortlessly integrate Orbinum's features into their applications. Simplify setup, generate content, and unlock powerful tools to enhance your projects with ease.
                        </p>
                        <div className="mt-5 sm:flex md:mt-8">
                            <a className="inline-flex items-center gap-1 rounded-lg bg-transparent px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-primary hover:bg-primary hover:ring-primary" href="/learn-more">
                                Read More
                                <span className="mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 12h15.879m-6.129 6.75l5.69-5.69c.292-.292.439-.676.439-1.06M13.75 5.25l5.69 5.69c.292.292.439.676.439 1.06" /></svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center py-5 md:w-1/2 md:pb-10 md:pt-10 md:pl-10">
                    <div className="relative w-full grow border border-secondary-800 inset-px rounded-tl-xl">
                        <div className="overflow-hidden rounded-tl-xl bg-secondary-900 shadow-2xl">
                            <div className="flex bg-secondary-800/40 ring-1 ring-white/5">
                                <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                                    <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                                        Service.ts
                                    </div>
                                    <div className="border-r border-gray-600/10 px-4 py-2">App.ts</div>
                                </div>
                            </div>
                            <div className="px-6 pb-14 pt-6 text-xs">
                                <p>
                                    <span className="text-keyword">import</span>{" "}
                                    <span className="text-bracket">{"{ "}</span>
                                    <span className="text-constant">OrbinumManager</span>
                                    <span className="text-bracket">{" }"}</span>{" "}
                                    <span className="text-keyword">from</span>{" "}
                                    <span className="text-string">'orbinum-sdk'</span>;
                                </p>
                                <p>
                                    <span className="text-constant">OrbinumManager.</span>
                                    <span className="text-function">setToken</span>
                                    <span className="text-bracket">{"("}</span>
                                    <span className="text-string">'"MY-TOKEN"'</span>
                                    <span className="text-bracket">{")"}</span>;
                                </p>
                                <br />
                                <p>
                                    <span className="text-comment">// Generate text using the Orbinum SDK</span>
                                </p>
                                <p>
                                    <span className="text-keyword">await</span>{" "}
                                    <span className="text-constant">OrbinumManager.</span>
                                    <span className="text-function">genText</span>
                                    <span className="text-bracket">{"("}</span>
                                    <span className="text-string">'"Hi Orbinum! How are you?"'</span>
                                    <span className="text-bracket">{")"}</span>;
                                </p>
                                <br />
                                <p>
                                    <span className="text-comment">// Generate image using the Orbinum SDK</span>
                                </p>
                                <p>
                                    <span className="text-keyword">await</span>{" "}
                                    <span className="text-constant">OrbinumManager.</span>
                                    <span className="text-function">Imagine</span>
                                    <span className="text-bracket">{"("}</span>
                                    <span className="text-string">'"An elegant, modern workspace with a sleek desk, a laptop, and a cozy chair, bathed in soft natural light from a large window with greenery outside."'</span>
                                    <span className="text-bracket">{")"}</span>;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
