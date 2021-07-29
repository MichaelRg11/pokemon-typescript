import { capitalizeFirstLetter, colorAssign } from '../../helpers';
import { Card, Title } from './style';
import useFetch from '../../hooks/useFetch';

export const CardComponet = () => {
  const { data, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon/102/')

  if (loading) return <></>

  if (error) return <></>

  return (
    <div>
      <Card color={`${colorAssign(data!.types)}`}>
        <Title color='#070707'>{capitalizeFirstLetter(data!.name)}</Title>
        <p>Heigth: {data!.height}</p>
        <p>Weigth: {data!.weight}</p>
        {data!.types.map((item: any) => {
          return `${item.type.name} `
        })}
        <img src={data!.sprites.other!.dream_world.front_default} alt={data!.sprites.other?.dream_world.front_default} style={{ height: '120px' }} />
      </Card>
    </div>
  )
}
