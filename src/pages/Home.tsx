import React from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { WeddingJourney } from "../components/WeddingJourney";
import { Services } from "../components/Services";
import { Approach } from "../components/Approach";
import { Gallery } from "../components/Gallery";
import { InquiryForm } from "../components/InquiryForm";
import { Footer } from "../components/Footer";
import "./Home.css";

export const Home: React.FC = () => {
  return (
    <div className="home-wrapper">
      {/* 1. Navigation with Empty Logo Container */}
      <Navbar />

      <main id="main-content">
        {/* 2. Hero with Headline & Empty Media Stage */}
        <Hero />

        {/* 3. Cinematic Scroll-Controlled Wedding Journey */}
        <WeddingJourney />

        {/* 4. Luxury Wedding Services & Coordination */}
        <Services />

        {/* 5. Our 4-Step Planning Philosophy */}
        <Approach />

        {/* 6. Wedding Scenography & Decor Gallery (Empty Placeholders) */}
        <Gallery />

        {/* 7. Exactly 3-Field Inquiry Form */}
        <InquiryForm />
      </main>

      {/* 8. Minimalist Footer */}
      <Footer />
    </div>
  );
};

export default Home;
