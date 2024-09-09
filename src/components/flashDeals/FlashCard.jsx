import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}
const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  }

  return (
    <>
      <Slider {...settings}>
        {
          productItems.map((productItems,i)=>{
            return(
              <div  className="flex flex-col md:flex-row md:flex-wrap gap-4" key={i}>
  <div className="relative bg-white p-5 rounded-lg shadow-md m-2 sm:m-4">
    <div className="relative" key={i}>
      
      <img src={productItems.cover} alt="" className="w-full h-auto object-cover rounded-lg" />
     
    </div>
    <div className="mt-10">
      <h3 className="text-base font-normal">{productItems.name}</h3>
      <div className="flex text-yellow-500 mt-1">
        <i className="fa fa-star text-sm mr-1"></i>
        <i className="fa fa-star text-sm mr-1"></i>
        <i className="fa fa-star text-sm mr-1"></i>
        <i className="fa fa-star text-sm mr-1"></i>
        <i className="fa fa-star text-sm mr-1"></i>
      </div>
      <div className="flex justify-between items-center text-red-600 mt-2">
        <h4 className="text-lg">Ranges from Rs {productItems.price}.00 to 1000</h4>
      </div>
    </div>
  </div>
</div>
            )
          })
        }
      </Slider>
    </>
  )
}

export default FlashCard
