import React from 'react'

export default function ProductLoader() {
    return (
        <section className="text-gray-700 body-font">
            <div className="grid grid-cols-4">
                {[1, 1, 1, 1,].map((_, index: number) => {
                    return <div key={index} className="p-4">
                        <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                            <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
                            <div className="p-6">
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
                    </div>
                })}
            </div>
        </section >

    )
}
