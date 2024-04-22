import { useContext } from "react";
import FetchedDataContext from "../../context/FetchedDataContext";

const DonationCard = ({ code }) => {

  const {donations} = useContext(FetchedDataContext);
  const donationinfo = donations.find(d=>d.code === code);
  const {picture}= donationinfo;
  console.log(picture);
return (
  <div className="">
    
    <h3>{code}</h3>
    
  </div>
);
};

export default DonationCard;
