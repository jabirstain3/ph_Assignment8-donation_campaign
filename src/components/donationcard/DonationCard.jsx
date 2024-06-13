import { useContext } from "react";
import FetchedDataContext from "../../context/FetchedDataContext";
import { useNavigate } from "react-router-dom";

const DonationCard = ({ code }) => {

    const {donations, loader} = useContext(FetchedDataContext);
    const donationinfo = donations.find( d => d.code === code );
    const {picture, title, category, category_bg, card_bg, text_button_bg} = donationinfo;
    // console.log(donationinfo);
    const bg_Color = { background: card_bg }
    const navigate = useNavigate();

    if(loader){
        return <div className="loader"></div>
    }
// console.log(card_bg);

    return (
        <div className={`min-w-54 rounded-lg`} style={bg_Color} onClick={() =>{
            navigate(`/donation_details/${code}`)
        }}>
            <img className={`w-full aspect-[8/5]`} src={picture} alt="" />
            <div className='w-full p-4 grid gap-6'>
                <h1 className={`w-fit px-3 py-1 rounded-md text-lg font-bold`} style={{background : category_bg, color : text_button_bg}}>{category}</h1>
                <p className={`font-medium`} style={{color : text_button_bg}} >{title}</p>
            </div>
        </div>
        
    );
};

//    

export default DonationCard;
