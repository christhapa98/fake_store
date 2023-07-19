import React from 'react'
import axios from 'axios';

import { useApiQuery } from '@/hooks/useQuery';

import { endpoints } from '@/constants/endpoints';

export default function Categories() {
    const { data, isLoading, error } = useApiQuery({ key: "categories", fn: async () => await axios.get(endpoints.products.allCategories) });

    return (
        <section className='flex flex-col gap-5 border-b mb-5'>
            <p className='text-xl'>All Categories</p>
            <div className='flex gap-5 pb-5'>
                {data?.data.map((category: any, index: number) => {
                    return <div className='py-2 bg-orange-500 cursor-pointer hover:-translate-y-1 text-white rounded-full px-5 shadow-xl  transition-all' key={index}>
                        <span className='uppercase text-xs font-semibold'>{category}</span>
                    </div>
                })}
            </div>
        </section>
    )
}