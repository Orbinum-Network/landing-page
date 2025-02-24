import { SectionTitle } from "../common";
import whitepaper_bg from "@/assets/whitepaper_bg.webp";

export function WhitepaperSection() {
    return (
        <section
            className="h-screen relative bg-secondary-900 py-20 px-6 flex items-center justify-center"
            style={{
                backgroundImage: `url(${whitepaper_bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
            <div>
                <div className="text-center">
                    <SectionTitle title="Discover Orbinum" titleTwo="Read The Whitepaper" />
                </div>

                <div className="flex justify-center">
                    <a
                        href="/whitepaper.pdf"
                        download="whitepaper.pdf"
                        className="drop-shadow-2xl rounded-md border border-primary px-3.5 py-2.5 text-sm font-semibold text-white backdrop-blur-md bg-white/10 transition-colors duration-300 hover:bg-primary/20"
                    >
                        Download Whitepaper <span aria-hidden="true">↓</span>
                    </a>
                </div>
            </div>
        </section>
    );
}