import background from '@/assets/hero_bg.jpg';
import { Technologies } from './Technologies';
import { useEffect, useState } from 'react';

export function HeroSection() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative isolate px-6 lg:px-8 text-white h-screen flex flex-col">

            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundPositionY: `calc(50% + ${scrollY * 0.5}px)`,
                }}
            ></div>

            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(rgb(0 0 0 / 0%), rgb(0 0 0))',
                }}
            ></div>

            <div className="relative z-10 flex flex-col items-center justify-center flex-grow mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">

                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm text-gray-300 ring-1 ring-gray-600 hover:ring-gray-500">
                        Announcing our next round of funding.{' '}
                        <a href="#" className="font-semibold text-primary hover:text-primary-hover">
                            <span aria-hidden="true" className="absolute inset-0" />
                            Read more <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>

                <div className="text-center">
                    <h1 className="text-balance text-5xl font-semibold tracking-tight text-white lg:text-7xl">
                        Empowering the Future with Decentralized AI
                    </h1>
                    <p className="mt-8 text-lg font-medium text-gray-300 lg:text-xl">
                        Unlocking the potential of blockchain technology to deliver secure, transparent, and private data processing solutions with decentralized artificial intelligence.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-focus"
                        >
                            Explore features
                        </a>
                        <a href="#" className="text-sm font-semibold text-gray-300 hover:text-white">
                            Read documentation <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
                <div className="relative z-10 mt-24">
                    <Technologies />
                </div>
            </div>


        </div>
    );
}
