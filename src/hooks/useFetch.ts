import { useState, useEffect } from 'react';

const useFetch = <T> (url: string) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [array, setArray] = useState([])

  useEffect(() => {
    const fetchResource = async () => {
      try {
        let res = await fetch(url);
        let data = await res.json();
        let arrayTemp: any = array;
        if (arrayTemp.length !== 0) {
          data.results.forEach((item: any) => {
            arrayTemp!.push(item)
          })
          setData({ ...data, results: arrayTemp });
          setArray(arrayTemp)
        } else {
          setData(data);
          setArray(data.results)
        }
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