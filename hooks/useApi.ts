import axios from "axios";

/**
 * Use ost Data returns Data and error objects from api post requests
 * @date 2023-04-10
 * @param {any} postdata:any
 * @param {any} apiEndpoint:string
 * @param {any} axiosConfig?:any
 * @returns {any}
 */
export const usePostData = async (postdata: any, apiEndpoint: string, axiosConfig?: any): Promise<any> => {
    try {
        const response = await axios.post(apiEndpoint, postdata, axiosConfig);
        return { data: response.data }
    } catch (error: any) {
        return { data: null, error: error?.message };
    }
};

export const usePutData = async (postdata: any, apiEndpoint: string, axiosConfig?: any): Promise<any> => {
    try {
        const response = await axios.put(apiEndpoint, postdata, axiosConfig);
        return { data: response.data }

    } catch (error: any) {
        return { data: null, error: error?.message };

    }
};

export const useDeleteData = async (apiEndpoint: string): Promise<any> => {
    try {
        const response = await axios.delete(apiEndpoint);
        return { data: response.data }

    } catch (error: any) {
        return { data: null, error: error?.message };

    }
};

export const useGetData = async (apiEndpoint: string): Promise<any> => {
    try {
        const response = await axios.get(apiEndpoint);
        return { data: response.data }
    } catch (error: any) {
        return { data: null, error: error?.message };

    }
};