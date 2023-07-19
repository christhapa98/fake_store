export const baseUrl: string | undefined = process.env.NEXT_PUBLIC_BASEURL;

export const endpoints = {
    products: {
        all: baseUrl + '/products',
        getById: (id: number) => baseUrl + "/products/" + id
    }
}