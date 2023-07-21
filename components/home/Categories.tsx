import React from 'react'
import axios from 'axios';

import { useApiQuery } from '@/hooks/useQuery';

import { endpoints } from '@/constants/endpoints';
import Link from 'next/link';

export default function Categories() {
    const { data, isLoading, error } = useApiQuery({ key: "categories", fn: async () => await axios.get(endpoints.products.allCategories) });
    return (
        <section className='flex flex-col gap-5 mb-5 border-b'>
            <p className='text-xl'>All Categories</p>
            <div className='flex gap-5 pb-5'>
                {data?.data.map((category: any, index: number) => {
                    return <Link href={`/products/category/${category}`} key={index}>
                        <div className='px-5 py-2 text-white transition-all bg-orange-500 rounded-full shadow-xl cursor-pointer hover:-translate-y-1' >
                            <span className='text-xs font-semibold uppercase'>{category}</span>
                        </div>
                    </Link>
                })}
            </div>
        </section>
    )
}

export function CardCategories() {
    return (
        <section className='flex flex-col gap-5 mb-5 border-b'>
            <p className='text-xl'>All Categories</p>
            <div className="bg-white dark:text-gray-100 dark:bg-gray-900">
                <div className="container">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                        <a href={`/products/category/electronics`} className="relative block overflow-hidden transition ease-out sm:col-span-2 md:col-span-1 group active:opacity-75">
                            <img src="https://cdn.tailkit.com/media/placeholders/photo-1SAnrIxw5OY-700x700.jpg" alt="Product Image" className="transition ease-out transform group-hover:scale-110" />
                            <div className="absolute inset-0 transition ease-out bg-black bg-opacity-25 group-hover:bg-opacity-0"></div>
                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                <div className="px-4 py-3 text-sm font-semibold tracking-wide uppercase transition ease-out bg-white bg-opacity-95 rounded-3xl group-hover:text-white group-hover:bg-orange-500 dark:bg-gray-900/90 dark:border-gray-800">
                                    Electronics
                                </div>
                            </div>
                        </a>
                        <a href={`/products/category/jewelery`} className="relative block overflow-hidden transition ease-out group active:opacity-75">
                            <img src="https://m.media-amazon.com/images/I/81aUa3LrDzL._AC_UY1100_.jpg" alt="Product Image" className="transition ease-out transform group-hover:scale-110" />
                            <div className="absolute inset-0 transition ease-out bg-black bg-opacity-25 group-hover:bg-opacity-0"></div>
                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                <div className="px-4 py-3 text-sm font-semibold tracking-wide uppercase transition ease-out bg-white bg-opacity-95 rounded-3xl group-hover:text-white group-hover:bg-orange-500 dark:bg-gray-900/90 dark:border-gray-800">
                                    Jwelery
                                </div>
                            </div>
                        </a>
                        <a href={`/products/category/men\'s clothing`} className="relative block overflow-hidden transition ease-out group active:opacity-75">
                            <img src="https://cdn.tailkit.com/media/placeholders/photo-gUPiTDBdRe4-700x700.jpg" alt="Product Image" className="transition ease-out transform group-hover:scale-110" />
                            <div className="absolute inset-0 transition ease-out bg-black bg-opacity-25 group-hover:bg-opacity-0"></div>
                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                <div className="px-4 py-3 text-sm font-semibold tracking-wide uppercase transition ease-out bg-white bg-opacity-95 rounded-3xl group-hover:text-white group-hover:bg-orange-500 dark:bg-gray-900/90 dark:border-gray-800">
                                    Mens Clothings
                                </div>
                            </div>
                        </a>
                        <a href={`/products/category/women\'s clothing`} className="relative block overflow-hidden transition ease-out sm:col-span-2 md:col-span-1 group active:opacity-75">
                            <img src="https://www.missguided.co.uk/images/products/66272618_h.jpg" alt="Product Image" className="transition ease-out transform group-hover:scale-110" />
                            <div className="absolute inset-0 transition ease-out bg-black bg-opacity-25 group-hover:bg-opacity-0"></div>
                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                <div className="px-4 py-3 text-sm font-semibold tracking-wide uppercase transition ease-out bg-white bg-opacity-95 rounded-3xl group-hover:text-white group-hover:bg-orange-500 dark:bg-gray-900/90 dark:border-gray-800">
                                    Women Clothings
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </section>
    )
}