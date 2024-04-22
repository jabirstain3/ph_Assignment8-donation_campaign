import { useContext } from "react";
import FetchedDataContext from "../../context/FetchedDataContext";
import DonationCard from "../donationcard/DonationCard";
const Donation = () => {
    const {donations} = useContext(FetchedDataContext);
    return (
        <div className="border ">
            <div className="w-full sm:w-2/3 lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 py-4">
                { donations.map( donation => <DonationCard key={donation.code} code={donation.code}></DonationCard>)}
            </div>
        </div>
    );
};

export default Donation;