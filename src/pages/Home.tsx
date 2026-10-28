import React from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Gallery } from "../components/Gallery";
import { Testimonials } from "../components/Testimonials";
import { About } from "../components/About";
import { HospitalityPartners } from "../components/HospitalityPartners";
import { InquiryForm } from "../components/InquiryForm";
import { Footer } from "../components/Footer";
import { ThemePreview } from "../components/ThemePreview";
import "./Home.css";

export const Home: React.FC = () => {
  return (
    <div className="home-wrapper">
      {/* 1. Minimal Navbar with Brand Logo and 5 Essential Links */}
      <Navbar />

      <main id="main-content">
        {/* 2. Hero: Pure Full-Screen Cinematic Photograph with 5s Fade */}
        <Hero />

        <HospitalityPartners />

        {/* 3. Services: Photography-Focused Grid with Short Titles */}
        <Services />

        {/* 4. Gallery: Curated Archive of Wedding Photography */}
        <Gallery />

        {/* Testimonials: Kind Words */}
        <Testimonials />

        {/* 5. About: Story, Philosophy & Atelier Direction */}
        <About />



        {/* 6. Contact: Minimal Inquiry Form & Direct Concierge */}
        <InquiryForm />
      </main>

      {/* 7. Minimal Footer */}
      <Footer />

      {/* 8. Discreet Theme Preview Button */}
      <ThemePreview />
    </div>
  );
};

export default Home;
