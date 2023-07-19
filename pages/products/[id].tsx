import MainLayout from '@/components/common/layouts/MainLayout';
import ProductDetailLayout from '@/components/common/layouts/ProductLayout/ProductDetailLayout';
import { endpoints } from '@/constants/endpoints';
import { useApiQuery } from '@/hooks/useQuery';
import axios from 'axios';
import { GetServerSideProps } from 'next'
import React from 'react'

export default function ProductDetail({ id }: any) {
    const { data, isLoading, error, refetch } = useApiQuery({ key: id, fn: async () => await axios.get(endpoints.products.getById(id)) });

    return (
        <MainLayout>
            <ProductDetailLayout product={data?.data} isLoading={isLoading} />
        </MainLayout>
    )
}

export const getServerSideProps: GetServerSideProps<{ id: any }> = async (context: any) => {
    const id = context.query.id;
    return {
        props: { id },
    }
}