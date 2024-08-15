import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./i18n";
import "./index.css";

import Navbar from "./Navbar/Nav";
import Footer from './Footer/Footer';
import Home from './Pages/Home-Page/Home';
import About from './Pages/About-Page/About';
import Course from './Pages/Course-Page/Course';
import Contact from './Pages/Contact-Page/Contact';

const router = createBrowserRouter([
  {
    // Home Page
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    )
  },
  {
    // About Page
    path: '/About',
    element: (
      <>
        <Navbar />
        <About />
        <Footer />
      </>
    )
  },
  {
    // Course Page
    path: '/Course',
    element: (
      <>
        <Navbar />
        <Course />
        <Footer />
      </>
    )
  },
  {
    // Contact Page
    path: '/Contact',
    element: (
      <>
        <Navbar />
        <Contact />
        <Footer />
      </>
    )
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);