import React,{useEffect} from "react"
import adslogo from '../../components/assets/images/ADS_logo.jpg';
import { useHistory,useLocation } from "react-router-dom";

const Search = ({ CartItem }) => {
  
  const navigate = useHistory();

  const location = useLocation();

  useEffect(()=>{
    
  },[location])

  return (
    <>
      <section className="bg-white p-2 shadow-md mb-2 sm:mb-0">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
    
    {/* Logo */}
    <div className="mb-2 md:mb-0">
      <img src={adslogo} alt="Aleeza Design Studio Logo" className="w-24" />
    </div>

    {/* Title */}
    <div className="mb-2 md:mb-0 text-center md:text-center">
      <h1 className="text-2xl font-bold font-serif"> 
      <span className="text-red-500">
      ALEEZA &nbsp;
      </span> 
      DESIGN  
      &nbsp;
      <span className="text-red-500">
      STUDIO
      </span>
      </h1>
    </div>

    {/* Icons */}
    <div className="flex items-center space-x-4">
    <button class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
    onClick={()=>{
      location.pathname === "/comfortpants" ?  navigate.push('/') : navigate.push('/comfortpants')
    }}
    >
    {location.pathname === "/comfortpants" ? "Back to designs" : "Try out Comfort Pants"}
</button>
    {/*<div className="relative">
        <Link to="/cart">
          <i className="fa fa-shopping-bag icon-circle text-lg"></i>
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
            {CartItem.length === 0 ? "" : CartItem.length}
          </span>
        </Link>
      </div>*/} 
    </div>
  </div>
</section>



    </>
  )
}

export default Search
