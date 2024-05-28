import { useContext } from "react";
import FetchedDataContext from "../../context/FetchedDataContext";
import DonationCard from "../donationcard/DonationCard";
const Donation = () => {
    const {donations, loader} = useContext(FetchedDataContext);
    if (loader){
        return <div className="loader">Loading...</div>
    }
    return (
        <div className="border mb-20">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 py-4">
                { donations.map( donation => <DonationCard key={donation.code} code={donation.code}></DonationCard>)}
            </div>
        </div>
    );
};

export default Donation;