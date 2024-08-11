import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

import Navbar from "./Navbar/Nav";
import Home from './Pages/Home-Page/Home';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
      </>
    )
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);