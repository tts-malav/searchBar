import React from 'react'
import list from '../list.json'
import list1 from '../list1.json'
import { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Navbar1 = () => {

    const [isOpen, setisOpen] = useState(false)
    const [isOpen1, setisOpen1] = useState(false)
  return(
    <>
    <nav className="py-4 px-4 flex lg:justify-between justify-center lg:bg-zinc-100 items-center">
        <div>
            <img className='hidden lg:block' src = "logo.svg" alt="" />
        </div>
        <div className="flex flex-col lg:flex-row items-center relative space-x-4 lg:border lg:border-slate-400 py-2 pl-4 pr-2 lg:rounded-full bg-white">
            <div className="flex sm:w-[100vw] md:w-[100vw] lg:w-max justify-center rounded-xl lg:border-none items-center space-x-2 lg:pr-4 py-2 border">
                
                <button className='flex items-center space-x-2' onClick={()=> setisOpen((prev) => !prev)} >
                  <img className="w-4" src="customer-support-svgrepo-com.svg" alt=''/><p>Vendor Type</p>
                  {
                    !isOpen ? (<AiFillCaretDown/>) : (<AiFillCaretUp/>)
                  }
                </button>
                {isOpen && (
                    <div className='bg-white border rounded-3xl top-[110%] items-start absolute px-10 py-4 flex flex-col left-0'>
                        {list.map((item) => (
                            <div>
                                <h3>{item.category}</h3>
                            </div>
                        ))}
                    </div>
                )}

            </div>
            <div className="flex items-center sm:w-[100vw] md:w-[100vw] lg:w-max justify-center border rounded-lg space-x-2 lg:border-none lg:border-r lg:pr-4 lg:border-r-slate-400 py-2">
                <img className="w-4" src="search.svg" alt=''/>
                <button>Search by trade or business</button> 
            </div>
            <div className="flex items-center lg:justify-start space-x-2 py-2 sm:w-[100vw] md:w-[100vw] lg:w-max justify-center lg:border-none border rounded-lg lg:rounded-none">
                
                <button className='flex items-center space-x-1' onClick={()=> setisOpen1((prev) => !prev)}>
                    <img className="w-4" src="location.svg" alt=''/>
                    <p>Region</p>
                    {
                    !isOpen1 ? (<AiFillCaretDown/>) : (<AiFillCaretUp/>)
                    }
                </button>
                {isOpen1 && (
                    <div className='bg-white border w-[43%] rounded-3xl top-[110%] items-start absolute px-6 py-4 flex flex-col'>
                        {list1.map((item) => (
                            <div>
                                <h3>{item.region}</h3>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="bg-green-300 w-7 h-7 justify-center items-center rounded-full hidden lg:flex">
                <img className="w-4 " src="search.svg" alt=''/>
            </div>
        </div>
        <div className="hidden lg:flex items-center space-x-12">
            <div className="font-bold">
                <button>My Business</button>
                
            </div>
            <div className="space-x-2 font-bold flex">
                <button>My Leads</button>
                <img className="w-5" src="arrow-up-right.svg" alt=''/>
            </div>
            <div className="pr-4">
                <img className="w-8" src="account.svg" alt=''/>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar1