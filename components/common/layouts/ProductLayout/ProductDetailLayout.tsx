import Image from 'next/image'
import React from 'react'
import ProductDetailLoader from '../../loaders/ProductDetailLoader'

export default function ProductDetailLayout({ product, isLoading }: { product: any, isLoading: boolean }) {

    if (isLoading) {
        return <><ProductDetailLoader /></>
    }

    return (
        <div className='grid grid-cols-3 min-h-[80VH] gap-8'>
            <div className='transition-all bg-white rounded-xl shadow-xl hover:-translate-y-2 flex items-center justify-center'>
                <Image src={product.image} alt="" height={300} width={300} className=" object-cover" />
            </div>
            <div className='col-span-2 gap-4 flex flex-col'>
                <p className="text-2xl font-semibold truncate">{product.title}</p>
                <span className='text-sm text-white bg-orange-500 w-fit rounded-xl px-3 py-1'>
                    <span className='text-xs uppercase'>{product.category}</span>
                </span>
                <p className="text-md text-gray-600 ">{product.description}</p>
                <p className="text-2xl">Rs {product.price}</p>
            </div>
        </div>
    )
}
