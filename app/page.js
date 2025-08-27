import Image from "next/image";
import Hero from "./sections/Hero";
import HomepageSection from "./sections/Homepagesection";
import GamesPage from "./sections/Games";
import FAQSection from "./sections/Faq";
import ReviewsSection from "./sections/Reveiws";
import WhyChooseUsSection from "./sections/Whychooseus";

export default function Home() {
  return (
    <>
      <Hero />
      <GamesPage />
      <HomepageSection />
      <WhyChooseUsSection/>
      <FAQSection />
      <ReviewsSection/>
    </>

  );
}
