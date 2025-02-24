interface SectionTitleProps {
    title: string;
    titleTwo?: string;
}

export const SectionTitle = ({ title, titleTwo }: SectionTitleProps) => {
    return (
        <div className="relative z-10 my-12 text-center">
            <div className="flex justify-center pb-2">
                <p className="text-secondary-200 w-max px-2 py-1/2 rounded-3xl text-xs border border-secondary-800 ring-2 ring-secondary-700 bg-secondary-800">Orbinum Network</p>
            </div>
            <div className="font-roboto text-balance text-4xl text-secondary-100 sm:text-6xl tracking-tight font-semibold drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                <h1>{title}</h1>
                <h1>{titleTwo}</h1>
            </div>
        </div>
    )
}