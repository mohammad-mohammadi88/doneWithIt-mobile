import { ApiResponse } from "apisauce";

import { useState } from "react";

export default function useApi<T>(
    apiFn: ((...e: any) => Promise<ApiResponse<T, T>>)
) {
    const [data, setData] = useState<T | undefined>(undefined);
    const [error, setError] = useState<any>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);


    async function request<E>(args?: E) {
        setError(undefined)
        setIsLoading(true);
        const response = await apiFn(args);
        if (response.ok && response.data) {
            setData(response.data);
            setError(undefined);
        } else {
            setData(undefined);
            // @ts-ignore
            setError(response.data?.error);
        }

        setIsLoading(false);
    }

    return {
        data,
        isLoading,
        error,
        request,
    };
}
