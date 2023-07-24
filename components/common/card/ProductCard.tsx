import { addCartItems, cartData, updateQuantity } from '@/redux/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store'
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
    const { cartItems } = useAppSelector(cartData)

    const addUpdateCart = () => {
        const containsId: boolean = cartItems.some((item: any) => item.id === product.id);
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

    return (
        <div className="flex flex-col gap-3 transition-all scale-95 bg-white dark:bg-gray-800 dark:text-white shadow-xl hover:scale-100 rounded-xl" key={product.index}>
            <div className="flex items-start justify-center">
                <Link href={`/products/${product.id}`}>
                    <Image src={product.image} alt="" height={100} width={100} className="object-cover w-full h-60 rounded-t-xl" />
                </Link >
            </div>
            <div className='p-3'>
                <p className="font-semibold truncate text-md">{product.title}</p>
                <div className='flex justify-between '>
                    <p className="text-lg">Rs {product.price}</p>
                    <button className='flex flex-row-reverse hover:scale-110' onClick={addUpdateCart}>
                        {addIcon}
                    </button>
                </div>
                <span className='px-3 py-1 text-sm text-white bg-orange-500 w-fit rounded-xl'>
                    <span className='text-xs uppercase'>{product.category}</span>
                </span>
            </div>
        </div>
    )
}
