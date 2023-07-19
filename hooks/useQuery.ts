import { useQuery } from "@tanstack/react-query"

export const useApiQuery = ({ key, fn }: { key: string, fn: any }) => {
    const { data, isLoading, error, refetch }: { data: any, isLoading: boolean, error: any, refetch: any } = useQuery({ queryKey: [key], queryFn: fn })
    return { data, isLoading, error, refetch };
}