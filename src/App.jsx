import Navbar from "./components/navbar/Navbar"
import { Outlet } from "react-router-dom";
import FetchedDataContextProvider from "./context/FetchedDataContextProvider";
function App() {

  return (
  <>
    <FetchedDataContextProvider>
      <div id="root" className=" border w-11/12 max-w-[1440px] mx-auto lg:px-6 py-4 lg:py-8 ">
        <Navbar></Navbar>
        {/* <h1>Donation Campain</h1> */}
        <Outlet>
          
        </Outlet>
      </div>
    </FetchedDataContextProvider> 
  </>
  );
}

export default App
