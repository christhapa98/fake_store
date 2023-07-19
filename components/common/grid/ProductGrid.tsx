import React, { useState, useEffect } from 'react'
import ProductCard from '../card/ProductCard'

export default function ProductGrid({ data, title }: any) {
    return (
        <>
            <div className='flex justify-between items-center'>
                <p className={`${title && "uppercase"}  text-xl`}>{title ?? "All Products"}</p>
                <p className='text-md font-semibold'>Total {data?.length}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {data?.map((product: any, index: number) => {
                    return <ProductCard  key={index} product={product} />
                })}
            </div>
        </>
    )
}
