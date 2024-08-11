import React from "react";
import "./home.css";

import Hero from "./Hero-Section/Hero";
import WhyUs from "./why-Us/WhyUs";
import PhotoGallery from "./Photo/PhotoGallery";
import CourseSection from "./Courses/CourseSection";
import Review from "./Reviews/Review";
import Program from "./Program/Program";

const Home = () => {
  return (
    <section id="Home">
      <Hero />
      <CourseSection />
      <Program />
      <WhyUs />
      <PhotoGallery />
      <Review />

    </section>
  );
};

export default Home;