import Link from 'next/link'
import React from 'react'
import ProductCard from './ProductCard'
import { UseAPIProps, useApiQuery } from '@/hooks/useQuery';
import axios from 'axios';
import { endpoints } from '@/constants/endpoints';

export default function SimilarProducts({ category }: any) {
    const { data, isLoading, error, refetch }: UseAPIProps = useApiQuery({ key: category, fn: async () => await axios.get(endpoints.products.productByCategory(category)) });

    return (
        <section className="flex flex-col gap-5">
            <p className='text-xl'>Similar Products</p>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
                {data?.data.length > 0 && data?.data.slice(-4).map((product: any, index: number) => {
                    return <ProductCard key={index} product={product} />
                })}
            </div>
        </section>
    )
}
