import React from 'react'
import Productcard from './Productcards';

const productlist = [
    {
        id:1,
        title:'Blue Frock',
        description:'Kids collection age upto 5-15',
        image:'./images/SlideCard/frock1.png',
        price:'1000'
    },
    {
        id:2,
        title:'Black Frock',
        description:'Kids collection age upto 5-15',
        image:'./images/SlideCard/frock2.png',
        price:'1499'
    },{
        id:3,
        title:'Cream Frock',
        description:'Kids collection age upto 5-15',
        image:'./images/SlideCard/frock3.png',
        price:'1299'
    },
    {
        id:4,
        title:'Mini Skirt',
        description:'Kids collection age upto 5-15',
        image:'./images/SlideCard/frock4.png',
        price:'1399'
    }
]


const Pantspage = () => {
    
    return (
    <>
    <div className="flex flex-wrap mx-0 my-8 mt-16">
     {
        productlist?.map((m,i)=>(
          <div key={i} className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6">
            <Productcard id={m.id} title={m.title} description={m.description} image={m.image} price={m.price}  />
          </div>
        ))
    }  
    </div>   
    </>
  )
}

export default Pantspage