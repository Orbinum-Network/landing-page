import { AnimatedSection, Newsletter, SectionTitle } from '@/components/common';
import tokenomics_bg from '@/assets/tokenomics_bg.webp';
import esferic3d from "@/assets/esferic3d.webp";
import { ChartData } from '@/interfaces';
import { TokenomicsChart } from '@/components/tokenomics';

const data: ChartData[] = [
    { name: 'Nodes', value: 400_000_000, pct: 40, color: '#212121' },
    { name: 'Ecosystem Development', value: 200_000_000, pct: 20, color: '#212121' },
    { name: 'Team & Advisors', value: 150_000_000, pct: 15, color: '#212121' },
    { name: 'Initial Token Sale', value: 150_000_000, pct: 15, color: '#212121' },
    { name: 'Reserve Fund', value: 100_000_000, pct: 10, color: '#212121' },
];

export function TokenomicsPage() {
    return (
        <div className="text-secondary-800">
            <AnimatedSection>
                <section className="h-screen flex flex-col gap-6 items-center justify-center px-6 md:px-12 bg-white bg-cover bg-top" style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), white), url(${tokenomics_bg})` }}>
                    <div className="text-center">
                        <SectionTitle styleColor="white" sectionType="Tokenomics" title="Orbinum Tokenomics" />
                        <p className="max-w-3xl mx-auto text-lg md:text-xl text-secondary-700">
                            A balanced economy ensuring sustainability and incentives through a hybrid model of fair distribution, controlled inflation, and long-term stability.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <a
                            href="https://docs.orbinum.net/tokenomics"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group px-4 py-2 text-md font-medium border border-secondary-500 rounded-lg transition duration-300 hover:bg-secondary-700 hover:border-secondary-400 hover:text-white"
                        >
                            Read more →
                        </a>
                    </div>
                </section>
            </AnimatedSection>

            <div className="bg-white h-screen flex items-center justify-center">
                <AnimatedSection className="max-w-4xl mx-auto px-6">
                    <section className="text-center">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Distribution & Economy</h2>
                        <p className="text-lg md:text-xl text-secondary-700">
                            The Orbinum Network ensures sustainable token distribution, with an initial supply of 1 billion ON allocated among nodes, ecosystem development, team, token sales, and reserves.
                        </p>
                    </section>
                    <div className="mt-12">
                        <div className="md:hidden">
                            <h3 className="text-2xl font-semibold mb-4 text-center">Token Distribution</h3>
                            <ul className="grid grid-cols-1 gap-4">
                                {data.map(({ name, value, pct, color }, index) => (
                                    <li key={index} className="flex items-center">
                                        <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: color }}></div>
                                        <span>{`${name}: ${value.toLocaleString('en-US')} (${pct}%)`}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="hidden md:block">
                            <TokenomicsChart data={data} />
                        </div>
                    </div>
                </AnimatedSection>
            </div>

            <AnimatedSection>
                <section className="py-8 px-6 md:px-12 text-center">
                    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/2 text-left">
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-secondary-100">A Sustainable & Fair Economy</h2>
                            <p className="text-lg md:text-xl text-secondary-200">
                                Orbinum's tokenomics model ensures a balanced and adaptive financial ecosystem. By transitioning from deflationary to controlled inflation, it maintains long-term stability while rewarding participation.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <img src={esferic3d} alt="Orbinum Economy" className="w-full rounded-lg shadow-lg" />
                        </div>
                    </div>
                </section>
            </AnimatedSection>

        </div>
    );
}
