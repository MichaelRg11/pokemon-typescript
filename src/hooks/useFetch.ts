import { useState, useEffect } from 'react';
import { Welcome } from '../interfaces/pokemon';

const useFetch = (url: string) => {
  const [data, setData] = useState<Welcome>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResource = async () => {
      try {
        let res = await fetch(url);
        let data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    }
    fetchResource();
  }, [url])

  return { data, loading, error };
}

export default useFetch;