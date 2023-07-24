import React, { useEffect } from 'react'

import MainLayout from '@/components/common/layouts/MainLayout'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { fetchMakeupProducs, makeUpData } from '@/redux/makeup/makeupSlice';
import ProductLoader from '@/components/common/loaders/ProductLoader';
import Link from 'next/link';

export default function Store() {

    const dispatch = useAppDispatch();
    const makeupStore = useAppSelector(makeUpData);

    useEffect(() => {
        dispatch(fetchMakeupProducs({}));
    }, [])

    return (
        <MainLayout>
            <div className='flex flex-col gap-5'>
                <MakeupBrands />
                <MakeupCategories />
            </div>
        </MainLayout>
    )
}


const MakeupCategories = () => {
    const makeupStore = useAppSelector(makeUpData);
    return (<>
        <h2 className='text-2xl'>Our Categories</h2>
        <div className="dark:text-gray-100 dark:bg-gray-900">
            <div className="container">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {makeupStore.data?.categories?.map((category: any, index: number) => {
                        return <a key={index} href="" className="relative block overflow-hidden transition ease-out sm:col-span-2 md:col-span-1 group active:opacity-75 h-80">
                            <img src={category.image} alt="Product Image" className="transition ease-out transform group-hover:scale-110  object-cover h-80 w-full"  />
                            <div className="absolute inset-0 transition ease-out bg-black bg-opacity-50 group-hover:bg-opacity-0"></div>
                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                <div className="px-4 py-3 text-sm font-semibold tracking-wide uppercase transition ease-out bg-white bg-opacity-95 rounded-3xl group-hover:text-white group-hover:bg-orange-600 dark:bg-gray-900/90 dark:border-gray-800">
                                    {category.title}
                                </div>
                            </div>
                        </a>
                    })}
                </div>
            </div>
        </div>
    </>
    )
}

const MakeupBrands = () => {
    const makeupStore = useAppSelector(makeUpData);
    return (
        <>
            <h2 className='text-2xl'>Our Brands</h2>
            <div className='flex gap-5 bg-transparent max-w-7xl overflow-x-auto py-5'>
                {makeupStore?.data.brands.map((brand: any, index: number) => {
                    return <div key={index}>
                        <div className='px-5 h-10 flex items-center w-max text-white transition-all bg-orange-500 rounded-full shadow-xl cursor-pointer hover:-translate-y-1 ' >
                            <span className='text-xs font-semibold uppercase'>{brand}</span>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}