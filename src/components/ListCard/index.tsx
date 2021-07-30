import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import useNearScreen from '../../hooks/useNearScreen';
import { Welcome } from '../../interfaces/listPokemon';
import { CardComponet } from './../Card/index';
import { Content } from './style';

export const ListCard = () => {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?offset=30&limit=30')
  const { data, loading, error } = useFetch<Welcome>(url);
  const { isNearScreen, fromRef } = useNearScreen()
  console.log("🚀 ~ file: index.tsx ~ line 12 ~ ListCard ~ isNearScreen", isNearScreen)


  if (loading) <>;</>;

  if (error) <>;</>

  setUrl(data!.next)

  return (
    <Content>
      {data?.results.map(item => {
        return <CardComponet url={item.url} />;
      })}
      <div id='ref' ref={fromRef}></div>
    </Content>
  )
}