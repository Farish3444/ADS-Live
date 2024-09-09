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
          <div>
          <img src="images/slider-bg.jpg" alt="" className="w-full h-auto  object-cover sm:max-h-[400px] md:max-h-[400px]" />
          </div>
          <div className="container absolute bottom-6 left-4 sm:bottom-6 sm:left-8 md:bottom-0 md:left-20 z-10 h-full flex items-start justify-start">
            <div className="w-full md:w-9/12 lg:w-8/12">
              <div className="detail-box text-white py-6 sm:py-8 md:py-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
                  Best Design
                  <br /> Collections
                </h1>
                <p className="mt-3 text-sm sm:text-base md:text-lg">
                  Explore Endless Possibilities: Design Your Dreams and <br /> Wear Your Passion with Our Innovative Creations.
                </p>
                <div className="mt-4">
                  <a href="#" className="slider-link bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:px-5 md:px-6 rounded-lg">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
    </section>
        
        
        

    </>
  )
}

export default Home
