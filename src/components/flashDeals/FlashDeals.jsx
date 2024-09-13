import React from "react"
import FlashCard from "./FlashCard"
import "./style.css"

const FlashDeals = ({ productItems }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='flex gap-2 items-center'>
            <i className='fa fa-bolt'></i>
            <h1 className="text-2xl">Collections</h1>
          </div>
          <FlashCard productItems={productItems}  />
        </div>
      </section>
    </>
  )
}

export default FlashDeals
