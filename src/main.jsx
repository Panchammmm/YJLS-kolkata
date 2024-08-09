import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

import Navbar from "./Navbar/Nav";
import Home from './Pages/Home-Page/Home';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    // Home Page
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);