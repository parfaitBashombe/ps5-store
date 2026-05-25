import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ConsoleSection from "@/components/console-section";
import GamesSection from "@/components/games-section";
import DualSenseSection from "@/components/dual-sense-section";
import AccessoriesSection from "@/components/accessories-section";
import NewsletterSection from "@/components/newsletter-section";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ConsoleSection />
        <GamesSection />
        <DualSenseSection />
        <AccessoriesSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
