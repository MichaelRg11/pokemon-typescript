import { useEffect, useState } from 'react'
import { Welcome } from '../interfaces/typePokemon'

export const useFetchType = () => {
  const [data, setData] = useState<Welcome[]>([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokemon = async () => {
    try {
      let array: Welcome[] = []
      let i = 0
      let res = await fetch('https://pokeapi.co/api/v2/type/');
      let data = await res.json();
      while (data!.results?.length > i) {
        let res = await fetch(data!.results[i].url);
        let dataRes = await res.json();
        let obj: Welcome = {
          name: data!.results[i].name,
          value: dataRes.pokemon.length,
          pokemons: dataRes.pokemon
        }
        array.push(obj)
        i++
      }
      setData(array)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }

  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  return { data, loading, error }
}
