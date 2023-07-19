
import Cart from '@/components/cart/Cart';
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
    const [showCart, setShowCart] = useState(false);
    return (
        <nav className="sticky top-0  z-10 shadow border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <Cart open={showCart} setOpen={setShowCart} />
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
                <Link href={"/"}>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Fake Store</span>
                </Link>                <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <NavItems setShowCart={setShowCart} />
            </div>
        </nav >
    )
}


const NavItems = ({ setShowCart }: any) => {
    return <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
                <Link href={"/"}>Home</Link>
            </li>
            <li>
                <Link href={"/products"}>Products</Link>
            </li>
            <li className='cursor-pointer hover:scale-105' onClick={() => setShowCart(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
            </li>
        </ul>
    </div>
}