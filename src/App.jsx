import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Component imports
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BrandsLogo from "./components/Brand/Brand";
import Services from "./components/Service/Service";
import Testimonial from "./components/testimonial/Testimonial";
import BlogsComp from "./components/Blog/Blog";
import Footer from "./components/footer/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <BrandsLogo />
      <Services />
      <Testimonial />
      <BlogsComp />
      <Footer />
    </div>
  );
};

export default App;
