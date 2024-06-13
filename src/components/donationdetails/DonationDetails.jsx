import { useParams } from "react-router-dom";
import FetchedDataContext from "../../context/FetchedDataContext"
import { useContext } from "react";

const DonationDetails = () => {
    const { code } = useParams();
    // console.log(typeof(code));
    const { donations } = useContext(FetchedDataContext);
    // console.log(donations);
    const donationinfo = donations.find( donation => donation.code == code)
    console.log(donationinfo.picture);
    return (
        <div>
            <div>
            <img className="w-full max-w-[800px] aspect-[8/5]" src={donationinfo.detailedPicture} alt="" />
            <div>
                <button>Donate ${donationinfo.price}</button>
            </div>
            </div>
            <div>
                <h1>{donationinfo.title}</h1>
                <p>{donationinfo.description}</p>
            </div>
        </div>
    );
};

export default DonationDetails