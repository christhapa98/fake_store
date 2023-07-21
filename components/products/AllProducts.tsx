import React from 'react'
import ProductCard from '../common/card/ProductCard';
import { UseAPIProps, useApiQuery } from '@/hooks/useQuery';
import axios from 'axios';
import { endpoints } from '@/constants/endpoints';
import ProductLoader from '../common/loaders/ProductLoader';

export default function AllProducts() {
    const { data, isLoading, error, refetch }: UseAPIProps = useApiQuery({
        key: 'all products', fn: async () => await axios.get(endpoints.products.all)
    });

    if (isLoading) {
        return <ProductLoader />
    }

    if (error) {
        return <>Something Went Wrong</>
    }

    return (
        <section className="flex flex-col gap-5">
            <div className='flex items-center justify-between'>
                <p className='text-xl'>All Products</p>
                <p className='font-semibold text-md'>Total {data.data?.length}</p>
            </div>
            <hr />
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
                {data.data.length > 0 && data.data.map((product: any, index: number) => {
                    return <ProductCard key={index} product={product} />
                })}
            </div>
        </section >
    )
}
