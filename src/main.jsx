import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

import Navbar from "./Navbar/Nav";
import Home from './Pages/Home-Page/Home';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Pages/About-Page/About';

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
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);