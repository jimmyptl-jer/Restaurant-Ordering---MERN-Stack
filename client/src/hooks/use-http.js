import { useCallback, useState } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method || 'GET',
        headers: requestConfig.headers || {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error('Something went wrong 404');
      }

      const data = await response.json();
      applyData(data);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  },[]);

  return {
    isLoading: isLoading,
    error: error,
    sendRequest: sendRequest,
  };
};

export default useHttp;
