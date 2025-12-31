import FAQSection from "@/components/FAQSection";
import FeatureHighlights from "@/components/FeatureHighlights";
import Hero from "@/components/Hero";
import IntegrationSection from "@/components/IntegrationSection";
import MenuSection from "@/components/MenuSection";
import NextSteps from "@/components/NextSteps";
import ChatSimulator from "@/components/ChatSimulator";
import TimelineCost from "@/components/TimelineCost";

const Home = () => {
  return (
    <main>
      <Hero />
      <FeatureHighlights />
      <ChatSimulator />
      <MenuSection />
      <FAQSection />
      <TimelineCost />
      <IntegrationSection />
      <NextSteps />
      <footer>
        © {new Date().getFullYear()} MD Siam Islam Messenger Bot Proposal.
        Crafted for fast deployment on Facebook Messenger.
      </footer>
    </main>
  );
};

export default Home;
