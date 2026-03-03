"use client";
import { useCallback, useState } from "react";
import { AxiosError } from "axios";

type Props<T, D> = {
  request: (data: D) => Promise<T>;
  successCb?: (data: T) => void;
};

export function UseRequest<T, D>({ request, successCb }: Props<T, D>) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchFunction = useCallback(
    (data: D) => {
      setIsLoading(true);
      request(data)
        .then((data) => {
          if (successCb) successCb(data);
        })
        .catch((error) => {
          if (error instanceof AxiosError) {
            throw new Error(error.message);
          }
          setIsError(true);
        })
        .finally(() => setIsLoading(false));
    },
    [successCb, request],
  );

  return {
    isLoading,
    fetchFunction,
    isError,
  };
}
