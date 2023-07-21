import React from 'react'
import ProductCard from '../card/ProductCard'

export default function ProductGrid({ data, title }: any) {
    return (
        <>
            <div className='flex items-center justify-between'>
                <p className={`${title && "uppercase"}  text-xl`}>{title ?? "All Products"}</p>
                <p className='font-semibold text-md'>Total {data?.length}</p>
            </div>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
                {data?.map((product: any, index: number) => {
                    return <ProductCard key={index} product={product} />
                })}
            </div>
        </>
    )
}
