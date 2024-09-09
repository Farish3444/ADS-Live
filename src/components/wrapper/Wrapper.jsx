import React from "react";
// import "./style.css"

const Wrapper = () => {

  const data = [
    {
      cover: <i className='fa-solid fa-truck-fast'></i>,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ]

  return (
    <>
    <section className="wrapper bg-gray-100 py-8">
    <div className="container mx-auto flex flex-col sm:flex-row sm:flex-wrap sm:justify-between md:flex-nowrap lg:flex-row lg:flex-nowrap xl:justify-between gap-3">
      {data.map((val, index) => (
        <div className="text-center p-5 bg-white rounded-lg shadow-md" key={index}>
      <div className="flex justify-center items-center mb-6">
        <div style={{backgroundColor:'red'}} className="img w-16 h-16 relative rounded-full bg-black text-white flex items-center justify-center">
          {val.cover}
        </div>
      </div>
          <h3 className="text-lg font-medium">{val.title}</h3>
          <p className="text-sm text-gray-600 mt-4">{val.decs}</p>
        </div>
      ))}
    </div>
  </section>
    </>
  )
}

export default Wrapper
