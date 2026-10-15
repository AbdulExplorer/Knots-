import React from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ScrollProgress } from "../components/layout/ScrollProgress";
import { CustomCursor } from "../components/ui/CustomCursor";
import { Home } from "../pages/Home/Home";
import "./App.css";

export const App: React.FC = () => {
  return (
    <div className="app-viewport">
      {/* Editorial Film Grain Ambient Texture */}
      <div className="film-grain" aria-hidden="true" />

      {/* Top Subtle Reading / Scroll Progress Bar */}
      <ScrollProgress />

      {/* Desktop Contextual Custom Cursor */}
      <CustomCursor />

      {/* Primary Fixed Studio Navigation */}
      <Navbar />

      {/* Complete Editorial Landing Page */}
      <Home />

      {/* Studio Concierge & Legal Footer */}
      <Footer />
    </div>
  );
};

export default App;
