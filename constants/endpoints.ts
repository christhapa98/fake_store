export const baseUrl: string | undefined = process.env.NEXT_PUBLIC_BASEURL;

export const endpoints = {
    products: {
        all: baseUrl + '/products',
        getById: (id: number) => baseUrl + "/products/" + id,
        limit: (limit: number) => baseUrl + '/products?limit=' + limit,
        allCategories: baseUrl + "/products/categories",
        productByCategory: (category: string) => baseUrl + "/products/category/" + category
    },
    cart: {
        all: baseUrl + "/carts"
    },
    user: {
        login: baseUrl + "/auth/login"
    }
}