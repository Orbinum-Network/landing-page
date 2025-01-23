import { SdkSection, BlogSection, Divider, FeaturesSection, Footer, HeroSection, Navbar, WeBelieveSection } from "./components"

function App() {
  return (
    <main className="relative grid gap-12">
      <Navbar />
      <HeroSection />
      <Divider />
      <FeaturesSection />
      <SdkSection />
      <BlogSection />
      <WeBelieveSection />
      <Divider />
      <Footer />
    </main>
  )
}

export default App
