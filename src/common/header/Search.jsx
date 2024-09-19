import React,{useEffect} from "react"
import adslogo from '../../components/assets/images/ADS_logo.jpg';
import { useHistory,useLocation } from "react-router-dom";

const Search = () => {
  
  const navigate = useHistory();
  const location = useLocation();


  return (
    <>
      <section className="bg-white p-2 shadow-md mb-2 sm:mb-0">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
    
    {/* Logo */}
    <div className="flex flex-col sm:flex-row sm:mb-2 mb-4 items-center">
    <img 
      src={adslogo} 
      alt="Aleeza Design Studio Logo" 
      className="w-20 sm:w-24 mb-2 sm:mb-0" 
    />
    <h1 className="text-xl sm:text-2xl font-bold text-center sm:text-left"> 
      <span className="text-red-500">
        ALEEZA&nbsp;
      </span> 
      DESIGN&nbsp;
      <span className="text-red-500">
        STUDIO
      </span>
    </h1>
  </div>
  

    {/* Title */}
   

    {/* Icons */}
    <div className="flex items-center space-x-4">
    <button class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
    onClick={()=>{
      location.pathname === "/comfortpants" ?  navigate.push('/') : navigate.push('/comfortpants')
    }}
    >
    {location.pathname === "/comfortpants" ? "Back to designs" : "Try out Comfort Pants"}
</button>
    
    </div>
  </div>
</section>



    </>
  )
}

export default Search
