import React from "react";

const Hero = ({ onStartProjectClick }) => (
  <section className="py-8 md:py-16 text-center">
    {/* Remove any repeated welcome/title/description here */}
    {/* Keep only unique content, images, or buttons */}
    <button
      className="mt-8 px-6 py-3 bg-primary text-white rounded-lg font-semibold shadow-lg hover:bg-primary/90 transition"
      onClick={onStartProjectClick}
    >
      Start Your Project
    </button> 
  </section>
);

export default Hero;