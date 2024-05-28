import { useContext } from "react";
import FetchedDataContext from "../../context/FetchedDataContext";

const DonationCard = ({ code }) => {

    const {donations, loader} = useContext(FetchedDataContext);
    const donationinfo = donations.find(d=>d.code === code);
    const {picture, title, category, category_bg, card_bg, text_button_bg}= donationinfo;
    
// console.log(card_bg);

    return (
        <div className={`min-w-54 bg-[${card_bg}] rounded-lg`}>
            <img className={`w-full aspect-[8/5]`} src={picture} alt="" />
            <div className='w-full p-4 grid gap-6'>
                <h1 className={`w-fit px-3 py-1 rounded-md bg-[${category_bg}] text-[${text_button_bg}] text-lg font-bold`}>{category}</h1>
                <p className={`font-medium text-[${text_button_bg}]`} >{title}</p>
            </div>
        </div>
        
    );
};

//    

export default DonationCard;
