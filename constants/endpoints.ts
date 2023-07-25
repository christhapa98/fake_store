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
    },
    makeup: {
        products: "https://makeup-api.herokuapp.com/api/v1/products.json",
        get: (id: string | number) => `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`,
        getByCategory: (category: string) => `https://makeup-api.herokuapp.com/api/v1/products.json?category=${category}`,
        getByBrand: (brand: string) => `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`
    }
}