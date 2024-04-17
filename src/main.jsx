import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Donation from './components/donation/Donation.jsx';
import HomePage from './components/homepage/HomePage.jsx';
import Statistics from './components/statistics/Statistics.jsx';
import Contact from './components/contact/Contact.jsx';
import ErrorPage from './components/errorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<HomePage></HomePage> , 
      },
      {
        path: "/donation",
        element:<Donation></Donation> , 
      },
      {
        path: "/statistics",
        element:<Statistics></Statistics>, 
      },
      {
        path: "/contact",
        element: <Contact></Contact> , 
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
