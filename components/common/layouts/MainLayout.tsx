import React from 'react'
import Navbar from './Navbar'
import Head from 'next/head'
import Footer from './Footer'
import { ScrollToTop } from '../ScrollToTop'

export default function MainLayout({ children }: { children: any }) {
    return (
        <div className='bg-gray-100'>
            <Head>
                <title>Fake Store</title>
            </Head>
            <Navbar />
            <main className='max-w-7xl m-auto pt-5'>
                {children}
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    )
}