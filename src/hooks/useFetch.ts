import { useState, useEffect } from 'react';
import { Result, Welcome } from '../interfaces/listPokemons';

const useFetch = <T> (url: string, list: boolean = false) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [array, setArray] = useState<Welcome[]>([])

  useEffect(() => {
    const fetchResource = async () => {
      try {
        let res = await fetch(url);
        let data = await res.json();
        if (list) {
          let arrayTemp: any = array;
          if (arrayTemp.length !== 0) {
            data.results.forEach((item: Result) => {
              arrayTemp!.push(item)
            })
            setData({ ...data, results: arrayTemp });
            setArray(arrayTemp)
          } else {
            setData(data);
            setArray(data.results)
          }
        } else {
          setData(data);
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