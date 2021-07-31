import { useEffect, useState } from 'react';
import { Loading } from '../../assets/style';
import useFetch from '../../hooks/useFetch';
import useNearScreen from '../../hooks/useNearScreen';
import { Welcome } from '../../interfaces/listPokemon';
import { CardError } from '../CardError';
import { CardComponet } from './../Card/index';
import { Content } from './style';

export const ListCard = () => {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=30')
  const { data, loading, error } = useFetch<Welcome>(url);
  const { isNearScreen, fromRef } = useNearScreen()

  useEffect(() => {
    if (isNearScreen && !loading && data?.next) {
      setUrl(data!.next)
    }
  }, [isNearScreen, loading, data])


  if (loading) return <Loading />;

  if (error) return <CardError />;


  return (
    <Content>
      {data?.results.map((item, index) => {
        return (<CardComponet key={index} url={item.url} />);
      })}
      <div id='ref' ref={fromRef} />
    </Content>
  )
}