import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <Navbar></Navbar>{" "}
            <div className="container mt-24 mx-auto px-12 py-4">
                <HeroSection></HeroSection>
                <AchievementsSection></AchievementsSection>
                <AboutSection />
                <ProjectsSection />
                <EmailSection />
            </div>
            <Footer />
        </main>
    );
}
