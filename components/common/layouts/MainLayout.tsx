import React from 'react'
import Navbar from './Navbar'
import Head from 'next/head'
import Footer from './Footer'
import { ScrollToTop } from '../ScrollToTop'
import withAuth from '@/hoc/authHoc'

function MainLayout({ children }: { children: any }) {
    return (
        <div className='bg-gray-100'>
            <Head>
                <title>Fake Store</title>
            </Head>
            <Navbar />
            <main className='max-w-6xl pt-5 m-auto'>
                {children}
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    )
}

export default withAuth(MainLayout);   
