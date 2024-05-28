import { useState, useEffect } from 'react';
import FetchedDataContext from './FetchedDataContext';

const FetchedDataContextProvider = ({children}) => {
    const [donations, setDonations ] = useState([]);
    const [loader, setLoader] = useState(true);
        // const  [addedCoursesId ,setAddedCoursesId] = useState([]);
        
    useEffect (() =>{
        fetch('donationDetails.json')
        .then(res => res.json())
        .then(data => setDonations(data) )
        .then(() => setLoader(false))
    }, []);
    return (
        <FetchedDataContext.Provider  value={{donations, loader}}>
            {children}
        </FetchedDataContext.Provider>
    );
};

export default FetchedDataContextProvider;