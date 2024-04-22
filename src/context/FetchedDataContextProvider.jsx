import { useState, useEffect } from 'react';
import FetchedDataContext from './FetchedDataContext';

const FetchedDataContextProvider = ({children}) => {
    const [donations, setDonations ] = useState([]);
        // const  [addedCoursesId ,setAddedCoursesId] = useState([]);
        
    useEffect (() =>{
        fetch('donationDetails.json')
        .then(res => res.json())
        .then(data => setDonations(data) )
    }, []);
    return (
        <FetchedDataContext.Provider  value={{donations}}>
            {children}
        </FetchedDataContext.Provider>
    );
};

export default FetchedDataContextProvider;