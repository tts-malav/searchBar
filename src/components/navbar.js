import React from 'react'
import list from '../list.json'
import { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Navbar1 = () => {

    const [isOpen, setisOpen] = useState(false)
  return (
    <>
    <nav class="py-4 px-4 flex justify-between bg-zinc-100 items-center">
        <div>
            <img src = "logo.svg" alt="" />
        </div>
        <div class="flex items-center relative space-x-4 border border-slate-400 py-2 pl-4 pr-2 rounded-full bg-white">
            <div class="flex items-center  space-x-2 border-r pr-4 border-r-slate-400">
                
                <button className='flex items-center space-x-2' onClick={()=> setisOpen((prev) => !prev)} >
                  <img class="w-4" src="customer-support-svgrepo-com.svg" alt=''/><p>Vendor Type</p>
                  {
                    !isOpen ? (<AiFillCaretDown/>) : (<AiFillCaretUp/>)
                  }
                </button>
                {isOpen && (
                    <div className='bg-white border rounded-3xl top-[110%] -left-2 items-start absolute px-10 py-4 flex flex-col left-0'>
                        {list.map((item) => (
                            <div>
                                <h3>{item.category}</h3>
                            </div>
                        ))}
                    </div>
                )}

            </div>
            <div class="flex items-center space-x-2 border-r pr-4 border-r-slate-400">
                <img class="w-4" src="search.svg" alt=''/>
                <button>Search by trade or business</button> 
            </div>
            <div class="flex items-center space-x-2 ">
                <img class="w-4 h-4" src="./public/location.svg" alt=''/>
                <button>Region</button>
            </div>
            <div class="bg-green-300 w-7 h-7 flex justify-center items-center rounded-full">
                <img class="w-4" src="search.svg" alt=''/>
            </div>
        </div>
        <div class="flex items-center space-x-12">
            <div class="font-bold">
                <button>My Business</button>
                
            </div>
            <div class="space-x-2 font-bold flex">
                <button>My Leads</button>
                <img class="w-5" src="arrow-up-right.svg" alt=''/>
            </div>
            <div class="pr-4">
                <img class="w-8" src="account.svg" alt=''/>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar1