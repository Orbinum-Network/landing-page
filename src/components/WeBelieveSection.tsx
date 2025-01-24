import imageUrl from "@/assets/webelieve.jpg";

export function WeBelieveSection() {
    return (
        <section
            className="relative bg-secondary-900 py-16 px-10 h-[550px] flex items-center justify-center"
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />

            <div className="relative backdrop-blur-md p-8 rounded-xl shadow-lg text-center md:max-w-4xl">
                <h2 className="text-4xl md:text-6xl font-extrabold text-secondary-100 mb-4">
                    We believe in decentralized artificial intelligence
                </h2>
                <p className="text-secondary-200 text-lg md:text-3xl leading-relaxed">
                    Driven by the community, for the benefit of all.
                </p>
            </div>
        </section>
    );
}
