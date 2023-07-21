import React from 'react'
import MainLayout from "@/components/common/layouts/MainLayout";
import Categories, { CardCategories } from "@/components/home/Categories";
import MostViewed from "@/components/home/MostViewed";
import TopProduct from "@/components/home/TopProduct";
import Image from "next/image";
import Link from 'next/link';

const banner1: string = "https://icms-image.slatic.net/images/ims-web/9d1f866c-9996-4143-8648-77aeaf33a68e.jpg_1200x1200.jpg";
const banner2: string = "https://icms-image.slatic.net/images/ims-web/df168df2-2a5a-4859-9eed-fb3a46b50d20.jpg";

export default function home() {
    return (
        <MainLayout>
            <CardCategories />
            <Image alt="banner" width={2000} height={2000} className="w-full py-5" src={banner1} />
            <TopProduct />
            <div className="container mx-auto py-9 md:py-12">
                <div className="flex flex-col justify-center space-y-4 items-strech md:flex-row md:space-y-0 md:space-x-6 lg:space-x-8">
                    <Link href="/makeup/store" className="flex flex-col justify-between px-6 py-6 transition rounded-lg cursor-pointer hover:shadow-xl hover:-translate-y-1 md:flex-row items-strech bg-gray-50 dark:bg-gray-800 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
                        <div className="flex flex-col justify-center md:w-1/2">
                            <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl dark:text-white">Full on Cosmetic Items</h1>
                            <p className="mt-2 text-base text-gray-800 lg:text-xl dark:text-white">Checkout our <span className="font-bold">Makeup Store</span></p>
                        </div>
                        <div className="flex justify-center mt-8 md:w-1/2 md:mt-0 md:justify-end">
                            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/makeup-kit-5306042-4460166.png" alt="" className="h-60" />
                        </div>
                    </Link>
                    <div className="relative flex flex-col justify-center px-6 py-6 md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 dark:bg-gray-800 md:py-0 md:px-4 lg:px-6">
                        <div className="flex flex-col justify-center">
                            <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl dark:text-white">Game Console</h1>
                            <p className="text-base text-gray-800 lg:text-xl dark:text-white">Save Upto <span className="font-bold">30%</span></p>
                        </div>
                        <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
                            <img src="https://i.ibb.co/rGfP7mp/Rectangle-59-1.png" alt="" className="md:w-20 md:h-20 lg:w-full lg:h-full" />
                        </div>
                    </div>
                </div>
            </div>
            <MostViewed />
            <Image alt="banner" width={2000} height={2000} className="w-full py-5" src={banner2} />
        </MainLayout>
    )
}


