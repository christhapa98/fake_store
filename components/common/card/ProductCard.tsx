import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ProductCardProps {
    id: number,
    index: number,
    image: string,
    title: string,
    price: string | number,
    category: string,
}

export default function ProductCard({ product }: { product: ProductCardProps }) {
    return (
        <Link href={`/products/${product.id}`}>
            <div className="shadow-xl hover:scale-100 scale-95  transition-all bg-white cursor-pointer p-3 rounded-xl flex flex-col gap-3" key={product.index}>
                <div className="flex items-start justify-center">
                    <Image src={product.image} alt="" height={100} width={100} className=" h-40 w-40 object-contain" />
                </div>
                <p className="text-md font-semibold truncate">{product.title}</p>
                <p className="">Rs {product.price}</p>
                <span className='text-sm text-white bg-orange-500 w-fit rounded-xl px-3 py-1'>
                    <span className='text-xs uppercase'>{product.category}</span>
                </span>
            </div></Link>
    )
}
