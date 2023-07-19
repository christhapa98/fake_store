import React from 'react'
import ProductCard from '../common/card/ProductCard';
import { useApiQuery } from '@/hooks/useQuery';
import axios from 'axios';
import { endpoints } from '@/constants/endpoints';
import ProductLoader from '../common/loaders/ProductLoader';
import Link from 'next/link';

export default function TopProduct() {
    const { data, isLoading, error } = useApiQuery({ key: "top products", fn: async () => await axios.get(endpoints.products.limit(4)) });

    if (isLoading) {
        return <ProductLoader />
    }

    if (error) {
        return <>Something Went Wrong</>
    }

    return (
        <section className="flex flex-col gap-5">
            <div className='flex justify-between'>
                <p className='text-xl'>Top Selling</p>
                <Link href="/products">
                    <div className='flex gap-3 text-gray-500 items-center'>
                        <span>All Products</span>
                        <> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>  </>
                    </div>
                </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {data.data.length > 0 && data.data.map((product: any, index: number) => {
                    return <ProductCard  key={index}  product={product} />
                })}
            </div>
        </section>
    )
}
