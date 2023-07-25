import React from 'react'
import ProductDetailLoader from '../../loaders/ProductDetailLoader'

export default function MakeupProductDetailLayout({ product, isLoading }: { product: any, isLoading: boolean }) {
    const addIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white bg-orange-500 rounded-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>;

    if (isLoading) {
        return <><ProductDetailLoader /></>
    }

    return (
        <div className='grid grid-cols-3 min-h-[80VH] gap-8'>
            <div className='flex items-center justify-center transition-all bg-white shadow-xl rounded-xl hover:-translate-y-2'>
                <img src={product?.image_link} alt="" height={300} width={300} className="object-cover " />
            </div>
            <div className='flex flex-col col-span-2 gap-4'>
                <p className="text-2xl font-semibold truncate">{product?.name}</p>
                <span className='px-3 py-1 text-sm text-white bg-orange-500 w-fit rounded-xl'>
                    <span className='text-xs uppercase'>{product?.category}</span>
                </span>
                <p className="text-gray-600 text-md ">{product?.brand}</p>
                <p className="text-gray-600 text-md ">{product?.description}</p>
                <p className="text-2xl">Rs {product?.price}</p>
                <div className='flex gap-5'>
                    {product.product_colors.map((color: any, index: number) => {
                        return <div key={index} className='flex flex-col'>
                            <span className={`bg-[${color.hex_value}] w-10 h-10 rounded-full border`} />
                            <span>{color.colour_name}</span>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
