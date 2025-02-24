import { SectionLayout } from "@/layout";
import { SectionTitle } from "../common";

export function SdkSection() {
    return (
        <SectionLayout>
            <SectionTitle title="Seamlessly Integrate Our Models" titleTwo="Into Your Projects" />
            <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                <div className="w-full p-4 relative flex items-center py-5 md:w-1/2 md:p-10  border border-secondary-800 rounded-3xl">
                    <div className="relative z-10 text-left">
                        <h2 className="font-roboto mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-white mb-4">
                            Orbinum<span className="font-zcool xl:text-6xl">SDK</span>
                        </h2>
                        <p className="max-w-md mx-auto mt-3 text-base text-secondary-300 md:mt-5 text-lg md:max-w-3xl">
                            The Orbinum SDK enables developers to effortlessly integrate Orbinum's features into their applications. Simplify setup, generate content, and unlock powerful tools to enhance your projects with ease.
                        </p>
                        <div className="mt-5 sm:flex md:mt-8">
                            <a className="drop-shadow-2xl rounded-md border border-primary px-3.5 py-2.5 text-sm font-semibold text-white backdrop-blur-md bg-white/10 transition-colors duration-300 hover:bg-primary/20" href="#">
                                Comming soon
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center py-5 md:w-1/2 md:pb-10 md:pt-10 md:pl-10 grayscale hover:grayscale-0 transition-all duration-300">
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
                                    <span className="text-constant">OrbinumClient</span>
                                    <span className="text-bracket">{" }"}</span>{" "}
                                    <span className="text-keyword">from</span>{" "}
                                    <span className="text-string">'orbinum-sdk'</span>;
                                </p>
                                <p>
                                    <span className="text-keyword">const</span>{" "}
                                    <span className="text-constant">orbinum</span>{" "}
                                    <span className="text-operator">=</span>{" "}
                                    <span className="text-keyword">new</span>{" "}
                                    <span className="text-constant">OrbinumClient</span>
                                    <span className="text-bracket">{"()"}</span>;
                                </p>
                                <br />
                                <p>
                                    <span className="text-comment">// Authenticate with API token</span>
                                </p>
                                <p>
                                    <span className="text-constant">orbinum.</span>
                                    <span className="text-function">authenticate</span>
                                    <span className="text-bracket">{"("}</span>
                                    <span className="text-string">"MY-TOKEN"</span>
                                    <span className="text-bracket">{")"}</span>;
                                </p>
                                <br />
                                <p>
                                    <span className="text-comment">// Select a model to interact with</span>
                                </p>
                                <p>
                                    <span className="text-keyword">const</span>{" "}
                                    <span className="text-constant">model</span>{" "}
                                    <span className="text-operator">=</span>{" "}
                                    <span className="text-keyword">await</span>{" "}
                                    <span className="text-constant">orbinum.</span>
                                    <span className="text-function">useModel</span>
                                    <span className="text-bracket">{"("}</span>
                                    <span className="text-string">"orb-trend-2"</span>
                                    <span className="text-bracket">{")"}</span>;
                                </p>
                                <br />
                                <p>
                                    <span className="text-comment">// Analyze sales trends from dataset</span>
                                </p>
                                <p>
                                    <span className="text-keyword">const</span>{" "}
                                    <span className="text-constant">salesData</span>{" "}
                                    <span className="text-operator">=</span>{" "}
                                    <span className="text-bracket">{"["}</span>
                                    <span className="text-bracket">{"{"}</span>
                                    <span className="text-constant">product</span>: <span className="text-string">"Laptop"</span>, <span className="text-constant">unitsSold</span>: <span className="text-number">320</span>, <span className="text-constant">revenue</span>: <span className="text-number">45000</span>
                                    <span className="text-bracket">{"}"}</span>,{" "}
                                    <span className="text-bracket">{"{"}</span>
                                    <span className="text-constant">product</span>: <span className="text-string">"Smartphone"</span>, <span className="text-constant">unitsSold</span>: <span className="text-number">210</span>, <span className="text-constant">revenue</span>: <span className="text-number">31000</span>
                                    <span className="text-bracket">{"}"}</span>,{" "}
                                    <span className="text-bracket">{"{"}</span>
                                    <span className="text-constant">product</span>: <span className="text-string">"Tablet"</span>, <span className="text-constant">unitsSold</span>: <span className="text-number">150</span>, <span className="text-constant">revenue</span>: <span className="text-number">18000</span>
                                    <span className="text-bracket">{"}"}</span>
                                    <span className="text-bracket">{"]"}</span>;
                                </p>
                                <p>
                                    <span className="text-keyword">const</span>{" "}
                                    <span className="text-constant">trendAnalysis</span>{" "}
                                    <span className="text-operator">=</span>{" "}
                                    <span className="text-keyword">await</span>{" "}
                                    <span className="text-constant">model.</span>
                                    <span className="text-function">predictTrends</span>
                                    <span className="text-bracket">{"("}</span>
                                    <span className="text-constant">salesData</span>,{" "}
                                    <span className="text-bracket">{"{"}</span>
                                    <span className="text-constant">objective</span>: <span className="text-string">"Identify sales growth opportunities and risk areas."</span>
                                    <span className="text-bracket">{"}"}</span>
                                    <span className="text-bracket">{")"}</span>;
                                </p>
                                <br />
                                <p>
                                    <span className="text-comment">// Generate code snippet from description</span>
                                </p>
                                <p>
                                    <span className="text-keyword">const</span>{" "}
                                    <span className="text-constant">techDescription</span>{" "}
                                    <span className="text-operator">=</span>{" "}
                                    <span className="text-string">"Write a JavaScript function that filters an array to keep only numbers greater than 10."</span>;
                                </p>
                                <p>
                                    <span className="text-keyword">const</span>{" "}
                                    <span className="text-constant">generatedCode</span>{" "}
                                    <span className="text-operator">=</span>{" "}
                                    <span className="text-keyword">await</span>{" "}
                                    <span className="text-constant">model.</span>
                                    <span className="text-function">createSnippet</span>
                                    <span className="text-bracket">{"("}</span>
                                    <span className="text-constant">techDescription</span>,{" "}
                                    <span className="text-bracket">{"{"}</span>
                                    <span className="text-constant">language</span>: <span className="text-string">"js"</span>
                                    <span className="text-bracket">{"}"}</span>
                                    <span className="text-bracket">{")"}</span>;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionLayout>
    );
}