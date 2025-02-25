import { AnimatedSection } from "@/components/common";
import { AboutSection, BlogSection, FeaturesSection, HeroSection, SdkSection, WhitepaperSection } from "@/components/home";

export function HomePage() {
    return (
        <>
            <AnimatedSection>
                <HeroSection />
            </AnimatedSection>
            <AnimatedSection>
                <AboutSection />
            </AnimatedSection>
            <AnimatedSection>
                <FeaturesSection />
            </AnimatedSection>
            <AnimatedSection>
                <SdkSection />
            </AnimatedSection>
            <AnimatedSection>
                <WhitepaperSection />
            </AnimatedSection>
            <AnimatedSection>
                <BlogSection />
            </AnimatedSection>
        </>
    )
}