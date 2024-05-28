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
import MyDonations from './components/my_donations/MyDonations.jsx';

const router = createBrowserRouter([
  {
    path: "/ph_Assignment8-donation_campaign/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/ph_Assignment8-donation_campaign/",
        element:<HomePage></HomePage> , 
      },
      {
        path: "/ph_Assignment8-donation_campaign/donation",
        element:<MyDonations></MyDonations>, 
      },
      {
        path: "/ph_Assignment8-donation_campaign/statistics",
        element:<Statistics></Statistics>, 
      },
      {
        path: "/ph_Assignment8-donation_campaign/contact",
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
