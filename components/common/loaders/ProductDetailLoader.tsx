import React from 'react'

export default function ProductDetailLoader() {
    return (
        <div className='grid grid-cols-3 min-h-[80VH] gap-8'>
            <div className='flex items-center justify-center transition-all bg-white shadow-xl rounded-xl hover:-translate-y-2'>
                <div className="object-cover object-center w-full bg-gray-100 lg:h- md:h-36" />
            </div>
            <div className='flex flex-col col-span-2 gap-4'>
                <h2 className="w-1/4 h-4 mb-2 bg-gray-400 animate-pulse" />
                <h2 className="w-1/4 h-4 mb-2 bg-gray-400 animate-pulse" />
                <p className="w-1/2 h-3 mb-3 leading-relaxed bg-gray-400 animate-pulse" />
                <div className="flex flex-wrap items-center ">
                    <a className="inline-flex items-center w-32 h-4 mt-2 bg-indigo-300 animate-pulse md:mb-2 lg:mb-0" />
                    <span className="inline-flex items-center w-16 h-4 px-2 py-1 pr-5 mt-2 ml-auto mr-3 text-sm leading-none bg-indigo-300 animate-pulse" />
                </div>
            </div>
        </div>
    )
}
