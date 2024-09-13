import React from 'react'
import Productcard from './Productcards';

const productlist = [
    {
        id:1,
        title:'Blue Frock',
        description:'Kids collection age upto 5-15',
        image:'./images/pant1.jpg',
        price:'1000'
    },
    {
        id:2,
        title:'Black Frock',
        description:'Kids collection age upto 5-15',
        image:'./images/pant2.jpg',
        price:'1499'
    },{
        id:3,
        title:'Cream Frock',
        description:'Kids collection age upto 5-15',
        image:'./images/pant3.jpg',
        price:'1299'
    },
    {
        id:4,
        title:'Mini Skirt',
        description:'Kids collection age upto 5-15',
        image:'./images/pant4.jpg',
        price:'1399'
    },
    ,
    {
        id:5,
        title:'Mini Skirt',
        description:'Kids collection age upto 5-15',
        image:'./images/pant5.jpg',
        price:'1399'
    },
    ,
    {
        id:6,
        title:'Mini Skirt',
        description:'Kids collection age upto 5-15',
        image:'./images/pant6.jpg',
        price:'1399'
    },
    ,
    {
        id:7,
        title:'Mini Skirt',
        description:'Kids collection age upto 5-15',
        image:'./images/pant7.jpg',
        price:'1399'
    },
    ,
    {
        id:8,
        title:'Mini Skirt',
        description:'Kids collection age upto 5-15',
        image:'./images/pant8.jpg',
        price:'1399'
    },
    ,
    {
        id:9,
        title:'Mini Skirt',
        description:'Kids collection age upto 5-15',
        image:'./images/pant9.jpg',
        price:'1399'
    },
    ,
    {
        id:10,
        title:'Mini Skirt',
        description:'Kids collection age upto 5-15',
        image:'./images/pant10.jpg',
        price:'1399'
    },
    ,
    {
        id:11,
        title:'Mini Skirt',
        description:'Kids collection age upto 5-15',
        image:'./images/pant11.jpg',
        price:'1399'
    },
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