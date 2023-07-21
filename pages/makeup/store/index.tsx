import React from 'react'

import MainLayout from '@/components/common/layouts/MainLayout'

export default function Store() {
    return (
        <MainLayout>
            <div className="bg-white dark:text-gray-100 dark:bg-gray-900">
                <div className="container">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                        <a href="" className="relative block overflow-hidden transition ease-out sm:col-span-2 md:col-span-1 group active:opacity-75">
                            <img src="https://cdn.tailkit.com/media/placeholders/photo-1SAnrIxw5OY-700x700.jpg" alt="Product Image" className="transition ease-out transform group-hover:scale-110" />
                            <div className="absolute inset-0 transition ease-out bg-black bg-opacity-25 group-hover:bg-opacity-0"></div>
                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                <div className="px-4 py-3 text-sm font-semibold tracking-wide uppercase transition ease-out bg-white bg-opacity-95 rounded-3xl group-hover:text-white group-hover:bg-blue-600 dark:bg-gray-900/90 dark:border-gray-800">
                                    Electronics
                                </div>
                            </div>
                        </a>
                        <a href="" className="relative block overflow-hidden transition ease-out group active:opacity-75">
                            <img src="https://cdn.tailkit.com/media/placeholders/photo-PDX_a_82obo-700x700.jpg" alt="Product Image" className="transition ease-out transform group-hover:scale-110" />
                            <div className="absolute inset-0 transition ease-out bg-black bg-opacity-25 group-hover:bg-opacity-0"></div>
                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                <div className="px-4 py-3 text-sm font-semibold tracking-wide uppercase transition ease-out bg-white bg-opacity-95 rounded-3xl group-hover:text-white group-hover:bg-blue-600 dark:bg-gray-900/90 dark:border-gray-800">
                                    Jwelery
                                </div>
                            </div>
                        </a>
                        <a href="" className="relative block overflow-hidden transition ease-out group active:opacity-75">
                            <img src="https://cdn.tailkit.com/media/placeholders/photo-gUPiTDBdRe4-700x700.jpg" alt="Product Image" className="transition ease-out transform group-hover:scale-110" />
                            <div className="absolute inset-0 transition ease-out bg-black bg-opacity-25 group-hover:bg-opacity-0"></div>
                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                <div className="px-4 py-3 text-sm font-semibold tracking-wide uppercase transition ease-out bg-white bg-opacity-95 rounded-3xl group-hover:text-white group-hover:bg-blue-600 dark:bg-gray-900/90 dark:border-gray-800">
                                    Mens Clothings
                                </div>
                            </div>
                        </a>
                        <a href="" className="relative block overflow-hidden transition ease-out sm:col-span-2 md:col-span-1 group active:opacity-75">
                            <img src="https://cdn.tailkit.com/media/placeholders/photo-ALpEkP29Eys-700x700.jpg" alt="Product Image" className="transition ease-out transform group-hover:scale-110" />
                            <div className="absolute inset-0 transition ease-out bg-black bg-opacity-25 group-hover:bg-opacity-0"></div>
                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                <div className="px-4 py-3 text-sm font-semibold tracking-wide uppercase transition ease-out bg-white bg-opacity-95 rounded-3xl group-hover:text-white group-hover:bg-blue-600 dark:bg-gray-900/90 dark:border-gray-800">
                                    Women Clothings
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
