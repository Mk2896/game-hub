import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface Response<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
export default function useData<T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependency?: any[]
) {
  const [data, setData] = useState<T[]>([]);
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () => {
      const controller = new AbortController();

      setIsLoading(true);
      apiClient
        .get<Response<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((data) => {
          setData(data?.data?.results);
          setIsLoading(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setErrors(error);
          setIsLoading(false);
        });

      return () => controller.abort();
    },
    dependency ? [...dependency] : []
  );

  return { data, errors, isLoading };
}
