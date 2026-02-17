import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import DestinationsSection from "@/components/DestinationsSection";
import ProcessSection from "@/components/ProcessSection";
import ComplexCasesSection from "@/components/ComplexCasesSection";
import ReviewsSection from "@/components/ReviewsSection";
import StructuredData from "@/components/StructuredData";
import FloatingTelegram from "@/components/FloatingTelegram";
import Footer from "@/components/Footer";

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
