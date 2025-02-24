import background from '@/assets/hero_bg.webp';
import { Technologies } from './Technologies';

export function HeroSection() {
    return (
        <div className="h-screen relative isolate text-white flex flex-col">
            <div className="relative z-0 flex flex-col items-center justify-center flex-grow gap-20 pt-40 rounded-2xl"
                style={{
                    backgroundImage: `
                    linear-gradient(
                        to bottom, 
                        rgba(0, 0, 0, 0) 50%, 
                        rgba(0, 0, 0, 0.5) 65%, 
                        rgba(0, 0, 0, 0.8) 80%, 
                        rgba(0, 0, 0, 1) 100%
                    ), 
                    url(${background})
                `,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top'
                }}
            >
                <div className="text-center mx-auto max-w-4xl">
                    <h1 className="text-balance text-4xl font-semibold tracking-tight text-secondary-0 sm:text-6xl drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                        Decentralized AI for Everyone
                    </h1>
                    <p className="px-2 sm:px-6 mt-4 text-lg font-medium text-secondary-100 lg:text-xl">
                        The future of AI is built by all of us together.
                    </p>
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row items-center justify-center">
                        <a
                            href="https://docs.orbinum.net"
                            className="drop-shadow-2xl rounded-md border border-primary px-3.5 py-2.5 text-sm font-semibold text-white backdrop-blur-md bg-white/10 transition-colors duration-300 hover:bg-primary/20"
                        >
                            Read documentation <span aria-hidden="true">→</span>
                        </a>

                    </div>
                </div>
                <div className="relative z-0 ">
                    <Technologies />
                </div>
            </div>
        </div>
    );
}
