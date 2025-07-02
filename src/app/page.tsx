import { ScrollToSection } from "@/components/home/scrollToSection";
import { NavBar } from "@/components/home/navBar";
import { HeroSection } from "@/components/home/heroSection";
import { ContentSection } from "@/components/home/contentSection";
import { MasterSection } from "@/components/home/masterSection";
import { FaqSection } from "@/components/home/faqSection";
import { Footer } from "@/components/home/footer";

export default function Home() {
  return (
    <div className="relative">
      <NavBar />
      <main className="min-h-screen bg-gradient-to-b from-blue-950 to-black text-white overflow-y-auto snap-y snap-mandatory pt-16">
        <HeroSection />

        <ContentSection
          id="what-we-do"
          title="Find Out What We Do"
          imagePlaceholder="/placeholder.svg?height=300&width=400"
          position="right"
          className="snap-start min-h-screen flex items-center py-12 animate-fade-in-up"
          content=""
        />

        <ContentSection
          id="your-journey"
          title="Start Your Journey with Us"
          imagePlaceholder="/placeholder.svg?height=300&width=400"
          position="left"
          className="snap-start min-h-screen flex items-center py-12 animate-fade-in-up"
          content=""

        />

        <ContentSection
          id="tailored-to-you"
          title="Exclusively Tailored to Who You Are"
          imagePlaceholder="/placeholder.svg?height=300&width=400"
          position="right"
          className="snap-start min-h-screen flex items-center py-12 animate-fade-in-up"
          content=""
        />

        <MasterSection
          id="tao-master"
          className="snap-start min-h-screen flex items-center py-12 animate-fade-in-up"
        />

        <FaqSection
          id="faq"
          className="snap-start min-h-screen flex items-center py-12 animate-fade-in-up"
        />
      </main>

      <Footer className="snap-start bg-blue-950/90 py-6" />

      <ScrollToSection />
    </div>
  );
}