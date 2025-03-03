interface SectionTitleProps {
    sectionType?: string;
    title: string;
    titleTwo?: string;
    styleColor: "black" | "white";
}

export const SectionTitle = ({ sectionType, title, titleTwo, styleColor }: SectionTitleProps) => {
    const textColor = styleColor === "black" ? "text-secondary-100" : "text-secondary-800";
    const dropShadow = styleColor === "black" ? "drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]" : "drop-shadow-[0_0_10px_rgba(46,46,46,0.1)]";
    const bgBorder = styleColor === "black" ? "border-secondary-800 ring-2 ring-secondary-700 bg-secondary-800" : "border-secondary-400 ring-2 ring-secondary-300 bg-secondary-400";

    return (
        <div className="relative z-10 my-6 text-center">
            {sectionType &&
                <div className="flex justify-center pb-2">
                    <p className={`text-secondary-100 w-max px-2 py-1/2 rounded-3xl text-xs border ${bgBorder}`}>
                        {sectionType}
                    </p>
                </div>
            }
            <div className={`font-roboto text-balance text-4xl ${textColor} sm:text-6xl font-extrabold ${dropShadow}`}>
                <h1>{title}</h1>
                <h1>{titleTwo}</h1>
            </div>
        </div>
    )
}