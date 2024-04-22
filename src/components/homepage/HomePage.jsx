import Banner from '../banner/Banner';
import Donation from '../donation/Donation';

const HomePage = () => {
    
    return (
        <div className='grid gap-y-12'>
            <Banner ></Banner>
            <Donation></Donation>
        </div>
    );
}

export default HomePage;