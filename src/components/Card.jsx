import React from 'react'
import { IoBagOutline } from 'react-icons/io5';

export default function Card({item}) {
    console.log(item);
    
  return (
    <div>
        <div className="flex flex-col">
            <img src={item.img} alt={item.name} className='w-full h-[200px] object-cover'/>
            <div className="flex flex-col gap-2 p-2">
                <h5 className='font-semibold'>{item.name}</h5>
                  <span className='font-medium'>{item.price}</span>
            </div>
             <div className="w-full p-2 text-2xl">
                <button className='bg-orange-400 gap-2 flex w-full justify-center items-center py-2 rounded-lg active:scale-110 transition-all duration-300'>
                    <h6>Add To Cart</h6>
                    <IoBagOutline/>

                </button>
             </div>
        </div>
    </div>
  )
}
