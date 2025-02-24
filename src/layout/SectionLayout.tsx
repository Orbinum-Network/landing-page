import React from "react"

export const SectionLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="px-8 py-8 lg:px-32 text-white">
            {children}
        </section>
    )
}