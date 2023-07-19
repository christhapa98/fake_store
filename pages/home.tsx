import React from 'react'
import MainLayout from "@/components/common/layouts/MainLayout";
import Categories from "@/components/home/Categories";
import MostViewed from "@/components/home/MostViewed";
import TopProduct from "@/components/home/TopProduct";
import Image from "next/image";

const banner1: string = "https://icms-image.slatic.net/images/ims-web/9d1f866c-9996-4143-8648-77aeaf33a68e.jpg_1200x1200.jpg";
const banner2: string = "https://icms-image.slatic.net/images/ims-web/df168df2-2a5a-4859-9eed-fb3a46b50d20.jpg";

export default function home() {
    return (
        <MainLayout>
            <Categories />
            <Image alt="banner" width={2000} height={2000} className="w-full py-5" src={banner1} />
            <TopProduct />
            <Image alt="banner" width={2000} height={2000} className="w-full py-5" src={banner2} />
            <MostViewed />
        </MainLayout>
    )
}


