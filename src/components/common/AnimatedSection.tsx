import React from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
    children: React.ReactNode;
    threshold?: number;
    triggerOnce?: boolean;
}

export const AnimatedSection = ({ children, threshold = 0.1, triggerOnce = true }: AnimatedSectionProps) => {
    const [ref, inView] = useInView({
        threshold,
        triggerOnce,
    });

    return (
        <div
            ref={ref}
            className={`transition-opacity duration-500 ease-in-out ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
            {children}
        </div>
    );
};