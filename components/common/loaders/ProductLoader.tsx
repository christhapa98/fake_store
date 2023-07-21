import React from 'react'

export default function ProductLoader() {
    return (
        <section className="text-gray-700 body-font">
            <div className="grid grid-cols-4">
                {[1, 1, 1, 1,].map((_, index: number) => {
                    return <div key={index} className="p-4">
                        <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg">
                            <div className="object-cover object-center w-full bg-gray-400 lg:h-48 md:h-36"></div>
                            <div className="p-6">
                                <h2 className="w-1/4 h-4 mb-2 bg-gray-400 animate-pulse" />
                                <p className="w-1/2 h-3 mb-3 leading-relaxed bg-gray-400 animate-pulse" />
                                <div className="flex flex-wrap items-center ">
                                    <a className="inline-flex items-center w-32 h-4 mt-2 bg-indigo-300 animate-pulse md:mb-2 lg:mb-0"/>
                                    <span className="inline-flex items-center w-16 h-4 px-2 py-1 pr-5 mt-2 ml-auto mr-3 text-sm leading-none bg-indigo-300 animate-pulse">
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
