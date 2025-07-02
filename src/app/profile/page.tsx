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

            </main>
    </div>
  );
}