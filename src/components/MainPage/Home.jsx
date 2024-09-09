import React from "react"
// import "./Home.css"
// import Categories from "./Categories"
// import SliderHome from "./Slider"

const Home = () => {
  return (
    <>
    
        
          {/*<Categories />*/}
          {/*<SliderHome />*/}
      <section className="relative">
          <div className="sm:relative">
            <img src="images/slider-bg.jpg" alt="" className="w-full h-auto object-cover sm:max-h-[400px] md:max-h-[400px]" />
            <div className="container bottom-16 left-4 sm:static sm:bottom-auto sm:left-auto md:absolute md:bottom-0 md:left-10 z-10 h-full flex flex-col items-start justify-start sm:justify-end">
              <div className="w-full md:w-9/12 lg:w-8/12">
                <div className="detail-box text-white py-6 sm:py-8 md:py-10">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-red-700">
                    Best Design Collections
                  </h1>
                  <p className="mt-3 text-sm sm:text-base md:text-lg text-red-500">
                    Explore Endless Possibilities: Design Your Dreams and <br /> Wear Your Passion with Our Innovative Creations.
                  </p>
                
                </div>
              </div>
            </div>
          </div>
        </section>
        
        
        
        

    </>
  )
}

export default Home
