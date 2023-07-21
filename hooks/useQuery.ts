import { useQuery } from "@tanstack/react-query"

export interface UseAPIProps {
    data: any,
    isLoading: boolean,
    error: any,
    refetch: () => void
}

export const useApiQuery = ({ key, fn }: { key: string, fn: any }): UseAPIProps => {
    const { data, isLoading, error, refetch }: UseAPIProps = useQuery({ queryKey: [key], queryFn: fn })
    return { data, isLoading, error, refetch };
}