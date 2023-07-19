import Image from 'next/image'
import React from 'react'
import ProductDetailLoader from '../../loaders/ProductDetailLoader'
import { addCartItems, cartData, updateQuantity } from '@/redux/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { toast } from "react-toastify"
import SimilarProducts from '../../card/SimilarProducts';

export default function ProductDetailLayout({ product, isLoading }: { product: any, isLoading: boolean }) {
    const dispatch = useAppDispatch();
    const { cartItems } = useAppSelector(cartData)

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
                <button className='flex' onClick={() => {
                    const containsId = cartItems.some((item: any) => {
                        console.log(item.id === product.id);
                        return item.id === product.id
                    });
                    if (containsId === false) {
                        dispatch(addCartItems({ ...product, quantity: 1 }));
                        toast.success("Added to Cart")
                    }
                    else {
                        dispatch(updateQuantity(product.id));
                        toast.success("Updated Cart Item")
                    }
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 bg-orange-500 rounded-full text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                <div>
                    <SimilarProducts category={product.category} />
                </div>
            </div>

        </div>
    )
}
