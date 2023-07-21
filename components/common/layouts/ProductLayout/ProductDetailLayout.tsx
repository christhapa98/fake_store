import React from 'react'
import Image from 'next/image'
import { toast } from "react-toastify"

import { useAppDispatch, useAppSelector } from '@/redux/store';
import { addCartItems, cartData, updateQuantity } from '@/redux/cart/cartSlice';

import SimilarProducts from '../../card/SimilarProducts';
import ProductDetailLoader from '../../loaders/ProductDetailLoader'

export default function ProductDetailLayout({ product, isLoading }: { product: any, isLoading: boolean }) {
    const dispatch = useAppDispatch();
    const { cartItems } = useAppSelector(cartData)

    const addUpdateCartItem = () => {
        const containsId = cartItems.some((item: any) => item.id === product.id);
        if (containsId === false) {
            dispatch(addCartItems({ ...product, quantity: 1 }));
            toast.success("Added to Cart")
        }
        else {
            dispatch(updateQuantity(product.id));
            toast.success("Updated Cart Item")
        }
    }

    const addIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white bg-orange-500 rounded-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>;

    if (isLoading) {
        return <><ProductDetailLoader /></>
    }

    return (
        <div className='grid grid-cols-3 min-h-[80VH] gap-8'>
            <div className='flex items-center justify-center transition-all bg-white shadow-xl rounded-xl hover:-translate-y-2'>
                <Image src={product.image} alt="" height={300} width={300} className="object-cover " />
            </div>
            <div className='flex flex-col col-span-2 gap-4'>
                <p className="text-2xl font-semibold truncate">{product.title}</p>
                <span className='px-3 py-1 text-sm text-white bg-orange-500 w-fit rounded-xl'>
                    <span className='text-xs uppercase'>{product.category}</span>
                </span>
                <p className="text-gray-600 text-md ">{product.description}</p>
                <p className="text-2xl">Rs {product.price}</p>
                <button className='flex' onClick={addUpdateCartItem}>
                    {addIcon}
                </button>
                <div>
                    <SimilarProducts category={product.category} />
                </div>
            </div>
        </div>
    )
}
