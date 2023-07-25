import MainLayout from '@/components/common/layouts/MainLayout'
import MakeupProductDetailLayout from '@/components/common/layouts/ProductLayout/MakupProductDetailLayout'
import { endpoints } from '@/constants/endpoints';
import { useApiQuery } from '@/hooks/useQuery';
import axios from 'axios';
import { GetServerSideProps } from 'next'
import React from 'react'

export default function MakeupProductDetail({ id }: any) {
    const { data, isLoading, error, refetch } = useApiQuery({ key: id, fn: async () => await axios.get(endpoints.makeup.get(id)) });
    return (
        <MainLayout>
            <MakeupProductDetailLayout product={data?.data} isLoading={isLoading} />
        </MainLayout>
    )
}

export const getServerSideProps: GetServerSideProps<{ id: any }> = async (context: any) => {
    const id = context.query.id;
    return {
        props: { id },
    }
}