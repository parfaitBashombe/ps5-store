import { headers } from "next/headers";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ConsoleSection from "@/components/console-section";
import GamesSection from "@/components/games-section";
import DualSenseSection from "@/components/dual-sense-section";
import AccessoriesSection from "@/components/accessories-section";
import NewsletterSection from "@/components/newsletter-section";
import Footer from "@/components/footer";

const getHomeData = async () => {
  const headersList = await headers();
  const host = headersList.get("host") ?? "localhost:3000";
  const proto = process.env.NODE_ENV === "production" ? "https" : "http";
  const res = await fetch(`${proto}://${host}/api/home`);
  if (!res.ok) throw new Error("Failed to fetch home data");
  return res.json();
};

const Home = async () => {
  const data = await getHomeData();

  return (
    <>
      <Navbar />
      <main>
        <Hero hero={data.hero} />
        <ConsoleSection consoles={data.consoles} />
        <GamesSection games={data.games} />
        <DualSenseSection dualsense={data.dualsense} />
        <AccessoriesSection accessories={data.accessories} />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
