import { createContext, useState, useEffect} from "react";

const FetchedDataContext = createContext({
    // const [donations, setDonations ] = useState([]);
    // // const  [addedCoursesId ,setAddedCoursesId] = useState([]);
        
    // useEffect (() =>{
    //     fetch('donationDetails.json')
    //     .then(res => res.json())
    //     .then(data => setDonations(data) )
    // }, []);
});

export default FetchedDataContext;