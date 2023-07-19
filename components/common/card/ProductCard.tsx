import { addCartItems } from '@/redux/cart/cartSlice';
import { useAppDispatch } from '@/redux/store'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { toast } from "react-toastify"

interface ProductCardProps {
    id: number,
    index: number,
    image: string,
    title: string,
    price: string | number,
    category: string,
}

export default function ProductCard({ product }: { product: ProductCardProps }) {
    const dispatch = useAppDispatch();
    return (
        <div className="shadow-xl hover:scale-100 scale-95  transition-all bg-white p-3 rounded-xl flex flex-col gap-3" key={product.index}>
            <div className="flex items-start justify-center">
                <Link href={`/products/${product.id}`}>
                    <Image src={product.image} alt="" height={100} width={100} className=" h-40 w-40 object-contain" />
                </Link >
            </div>
            <p className="text-md font-semibold truncate">{product.title}</p>
            <div className='flex justify-between'>

                <p className="text-lg">Rs {product.price}</p>
                <button className='flex flex-row-reverse hover:scale-110' onClick={() => {
                    dispatch(addCartItems(product));
                    toast.success("Added to Cart")
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 bg-orange-500 rounded-full text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
            <span className='text-sm text-white bg-orange-500 w-fit rounded-xl px-3 py-1'>
                <span className='text-xs uppercase'>{product.category}</span>
            </span>
        </div>
    )
}
