import { serverUri as baseURL } from "@Constants/defaults";
import { ApiResponse, create } from "apisauce";
import authStorage from "@/auth/authStorage";
import { AxiosRequestConfig } from "axios";
import { cache } from "@/utilities";

const apiClient = create({ baseURL });

apiClient.addAsyncRequestTransform(async (req) => {
    const userToken = await authStorage.getToken();
    if(!userToken) return;
    req.headers["x-auth-token"] = userToken;
});

const get = apiClient.get;
type getMethodType = <T, U = T>(
    url: string,
    params?: {},
    axiosConfig?: AxiosRequestConfig
) => Promise<ApiResponse<T, U> | { ok: boolean; data: any }>;

// @ts-ignore
const newGetFn: getMethodType = async (url, params, axiosConfig) => {
    const response = await get(url, params, axiosConfig);

    if (response.ok) {
        await cache.store(url, response.data);
        return response;
    }

    const data = await cache.get(url);
    return data ? { ok: true, data } : response;
};

// @ts-ignore
apiClient.get = newGetFn;

export default apiClient;
