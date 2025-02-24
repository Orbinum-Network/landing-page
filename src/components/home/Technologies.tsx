import ethereum from "@/assets/ethereum.webp";
import substrate from "@/assets/substrate.png";

export function Technologies() {

    const technologies = [
        { href: "https://ethereum.org/", src: ethereum, alt: "Ethereum", label: "" },
        { href: "https://substrate.io/", src: substrate, alt: "Substrate", label: "" },
    ]

    return (
        <section className="flex flex-col md:flex-row gap-12">
            <p className="text-secondary-200 font-medium text-sm">Powered with:</p>
            <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 items-center justify-center">
                {technologies.map(({ href, src, alt, label }) => (
                    <a
                        key={alt}
                        href={href}
                        className="flex items-center justify-center gap-2 group transition-all duration-300"
                    >
                        <img
                            src={src}
                            alt={alt}
                            className="h-8 grayscale group-hover:grayscale-0 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] transition-all duration-300"
                        />
                        {label && (
                            <p className="text-sm text-secondary-500 group-hover:text-secondary-100 transition-all duration-300">
                                {label}
                            </p>
                        )}
                    </a>
                ))}
            </div>
        </section>
    );
}