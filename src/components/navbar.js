import React from 'react'

const search1 = () => {
  return (
    <>
    <nav class="py-4 px-4 flex justify-between bg-zinc-100 items-center">
        <div>
            <img src = "logo.svg" alt="" />
        </div>
        <div class="flex items-center space-x-4 border border-slate-400 py-2 pl-4 pr-2 rounded-full bg-white">
            <div class="flex items-center space-x-2 border-r pr-4 border-r-slate-400">
                <img class="w-4" src="customer-support-svgrepo-com.svg" alt=''/>
                <button >Vendor Type</button>
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

export default search1

