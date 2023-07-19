import React from 'react'
import ProductCard from '../common/card/ProductCard';
import { useApiQuery } from '@/hooks/useQuery';
import axios from 'axios';
import { endpoints } from '@/constants/endpoints';
import ProductLoader from '../common/loaders/ProductLoader';

export default function MostViewed() {
    const { data, isLoading, error } = useApiQuery({ key: "most viewed", fn: async () => await axios.get(endpoints.products.all) });

    if (isLoading) {
        return <ProductLoader />
    }

    if (error) {
        return <>Something Went Wrong</>
    }

    return (
        <section className="flex flex-col gap-5">
            <p className='text-xl'>Most Viewed Products</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {data.data.length > 0 && data.data.slice(-8).map((product: any, index: number) => {
                    return <ProductCard key={index} product={product} />
                })}
            </div>
        </section>
    )
}
