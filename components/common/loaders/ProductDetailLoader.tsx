import React from 'react'

export default function ProductDetailLoader() {
    return (
        <div className='grid grid-cols-3 min-h-[80VH] gap-8'>
            <div className='transition-all bg-white rounded-xl shadow-xl hover:-translate-y-2 flex items-center justify-center'>
                <div className="lg:h- bg-gray-100 md:h-36 w-full object-cover object-center" />
            </div>
            <div className='col-span-2 gap-4 flex flex-col'>
                <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
                <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
                <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
                <div className="flex items-center flex-wrap ">
                    <a className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0">
                    </a>
                    <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1">
                    </span>
                </div>
            </div>
        </div>
    )
}
