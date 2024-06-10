import { useCallback, useEffect, useState } from 'react';

type DefaultData = Record<string, unknown>;

const useFetch = <DT = DefaultData>(url: string, init?: RequestInit) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const [data, setData] = useState<DefaultData | null>();

  const doFetch = useCallback(async () => {
    try {
      const response = await fetch(url, {
        ...init,
        credentials: 'include',
      });
      const rspJson = await response.json();
      if (!response.ok) {
        setError(new Error(rspJson.message || 'Something went wrong, please try again later'));
        return;
      }
      setData(rspJson);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, [init, url]);

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return { data, loading, error };
};

export default useFetch;
