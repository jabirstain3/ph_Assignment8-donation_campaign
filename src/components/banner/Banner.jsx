
const Banner = () => {
    return (
        <>
            <div className=" absolute z-[-1] opacity-20 top-0 w-full right-0 left-0 bg-stone-300 lg:min-h-[500px] max-h[600px] flex item-center justify-center">
                <img src="src/assets/image/Rectangle 4281.png" alt="" className="m-auto "/>
            </div>
            <div className="w-full grid justify-center gap-6 xl:gap-8 lg:my-[120px] xl:my-[150px] ">
                <div className="text-center  text-4xl xl:text-5xl font-bold"><h1>I Grow By Helping People In Need</h1></div>
                <div className="flex item center w-fit h-[44px] xl:h-[48px] m-auto">
                    <input type="text" className="w-80 xl:w-96 h-full px-4 text-lg xl:text-xl rounded-l-lg" placeholder="Search Here....."/>
                    <button className="h-full border-2 border-red-600 bg-red-600 text-white text-lg font-semibold px-6 rounded-r-xl hover:bg-red-500 hover:border-black hover:font-bold ">Search</button>
                </div>
                
            </div>
        </>
    );
};

export default Banner;