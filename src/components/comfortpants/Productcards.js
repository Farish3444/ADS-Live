import React,{useState,FC} from 'react'


const Productcard=({id,title,description,image,price}) => {
   
  return (
    <>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
    <div className='relative h-60'>
        <img className="rounded-t-lg w-full h-full object-cover mt-2"   src={`data:image/png;base64,${image}`} 
        alt="IMage under process" />    
    </div>
    <div className="p-5">
            <h5 className="mb-1 text-md font-bold tracking-tight text-gray-900 dark:text-white text-left mx-2">{title}</h5>
        <p className="p-2 mb-3 font-normal text-gray-700 dark:text-gray-400 h-24 overflow-hidden text-left">{description}.</p>
        <p className='text-left mx-2 text-xl font-bold'>₹ {price}</p>
    </div>
</div>
    </>
  )
}

export default Productcard