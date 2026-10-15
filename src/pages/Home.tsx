import React from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
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
        {/* 2. Top Hero Section with Integrated Scroll-Controlled Wedding Walkthrough */}
        <Hero />

        {/* 3. Luxury Wedding Services & Coordination */}
        <Services />

        {/* 4. Our 4-Step Planning Philosophy */}
        <Approach />

        {/* 5. Wedding Scenography & Decor Gallery (Empty Placeholders) */}
        <Gallery />

        {/* 6. Exactly 3-Field Inquiry Form */}
        <InquiryForm />
      </main>

      {/* 7. Minimalist Footer */}
      <Footer />
    </div>
  );
};

export default Home;
