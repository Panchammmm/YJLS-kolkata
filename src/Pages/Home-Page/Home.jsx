import React from "react";
import "./home.css";
import background from "../../assets/site-bg1.jpg";

import Hero from "./Hero-Section/Hero";
import WhyUs from "./why-Us/WhyUs";
import PhotoGallery from "./Photo/PhotoGallery";
import CourseSection from "./Courses/CourseSection";
import Review from "./Reviews/Review";

const Home = () => {
  return (
    <section id="Home">

      <img class="bg-style" src={background} alt="Background Image" />
      <Hero />
      <CourseSection />
      <WhyUs />
      <PhotoGallery />
      <Review />

    </section>
  );
};

export default Home;