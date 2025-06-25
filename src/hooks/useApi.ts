import { ApiResponse, PROBLEM_CODE } from "apisauce";

import { useState } from "react";

export default function useApi<T>(
    apiFn: (...e: any) => Promise<ApiResponse<T, T>>
) {
    const [data, setData] = useState<T | undefined>(undefined);
    const [error, setError] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);


    async function request<E>(args?: E) {
        setError(null)
        setIsLoading(true);
        const response = await apiFn(args);
        if (response.ok && response.data) {
            setData(response.data);
            setError(null);
        } else {
            setData(undefined);
            setError(response.originalError);
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
