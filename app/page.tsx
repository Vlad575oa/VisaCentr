import dynamic from "next/dynamic";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import StructuredData from "@/components/StructuredData";
import Footer from "@/components/Footer";

// Dynamic imports for below-the-fold components
const DestinationsSection = dynamic(() => import("@/components/DestinationsSection"));
const ProcessSection = dynamic(() => import("@/components/ProcessSection"));
const ComplexCasesSection = dynamic(() => import("@/components/ComplexCasesSection"));
const ReviewsSection = dynamic(() => import("@/components/ReviewsSection"));
const FloatingTelegram = dynamic(() => import("@/components/FloatingTelegram"));

export default function Home() {
    return (
        <>
            <StructuredData />
            <FloatingTelegram />
            <Header />
            <main className="flex-grow">
                <article>
                    <HeroSection />
                    <StatsSection />
                    <div id="services">
                        {/* Services can be expanded here in future iterations */}
                    </div>
                    <DestinationsSection />
                    <ProcessSection />
                    <ComplexCasesSection />
                    <ReviewsSection />
                </article>
            </main>
            <Footer />
        </>
    );
}
