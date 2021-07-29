import { CardComponet } from './../Card/index';
import { Content } from './style';

export const ListCard = () => {
  return (
    <Content>
      <CardComponet url='https://pokeapi.co/api/v2/pokemon/102/' />
      <CardComponet url='https://pokeapi.co/api/v2/pokemon/103/' />
      <CardComponet url='https://pokeapi.co/api/v2/pokemon/104/' />
      <CardComponet url='https://pokeapi.co/api/v2/pokemon/105/' />
      <CardComponet url='https://pokeapi.co/api/v2/pokemon/106/' />
      <CardComponet url='https://pokeapi.co/api/v2/pokemon/107/' />
      <CardComponet url='https://pokeapi.co/api/v2/pokemon/120/' />
    </Content>
  )
}
