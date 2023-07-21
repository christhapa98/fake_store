
import React, { useState } from 'react'
import Link from 'next/link'

import Drawer from './Drawer';
import Cart from '@/components/cart/Cart';

export default function Navbar() {
    const [showCart, setShowCart] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);
    return (
        <nav className="sticky top-0 z-10 border-gray-200 shadow bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <Drawer open={showDrawer} setOpen={setShowDrawer} />
            <Cart open={showCart} setOpen={setShowCart} />
            <div className="flex flex-wrap items-center justify-between max-w-6xl py-4 mx-auto">
                <Link href={"/"}>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Fake Store</span>
                </Link>
                <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <NavItems setShowCart={setShowCart} setShowDrawer={setShowDrawer} />
            </div>
        </nav >
    )
}


const NavItems = ({ setShowCart, setShowDrawer }: any) => {
    return <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
        <ul className="flex flex-col mt-4 font-medium rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
                <Link href={"/home"}>Home</Link>
            </li>
            <li>
                <Link href={"/products"}>Products</Link>
            </li>
            <li className='cursor-pointer hover:scale-105' onClick={() => setShowCart(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
            </li>
            <li className='cursor-pointer' onClick={() => setShowDrawer(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </li>
        </ul>
    </div>
}