import ProductGrid from '@/components/common/grid/ProductGrid';
import MainLayout from '@/components/common/layouts/MainLayout';
import ProductLoader from '@/components/common/loaders/ProductLoader';
import Categories from '@/components/home/Categories';
import { endpoints } from '@/constants/endpoints';
import { useApiQuery } from '@/hooks/useQuery';
import axios from 'axios';
import { GetServerSideProps } from 'next'
import React from 'react'

export default function ProductDetail({ category }: any) {
    const { data, isLoading, error, refetch } = useApiQuery({ key: category, fn: async () => await axios.get(endpoints.products.productByCategory(category)) });

    return (
        <MainLayout>
            <Categories />
            {isLoading ? <ProductLoader /> : <ProductGrid data={data?.data} title={category} />}
        </MainLayout>
    )
}

export const getServerSideProps: GetServerSideProps<{ category: any }> = async (context: any) => {
    const newCategory = context.query.category;
    const category: string = newCategory.split("").join("");
    return {
        props: { category },
    }
}