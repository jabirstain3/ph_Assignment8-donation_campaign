import { createBrowserRouter } from 'react-router-dom';
import App from '../../App.jsx'
import HomePage from '../homepage/HomePage.jsx';
import Statistics from '../statistics/Statistics.jsx';
import Contact from '../contact/Contact.jsx';
import ErrorPage from '../errorPage/ErrorPage.jsx';
import MyDonations from '../my_donations/MyDonations.jsx';
import DonationDetails from '../donationdetails/DonationDetails.jsx';



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
                element:<MyDonations></MyDonations>, 
            },
            {
                path: "/statistics",
                element:<Statistics></Statistics>, 
            },
            {
                path: "/contact",
                element: <Contact></Contact> , 
            },
            {
                path: "/donation_details/:code",
                element: <DonationDetails></DonationDetails> ,
            },
        ],
    },
    ]);

export default router;