import { capitalizeFirstLetter, colorAssign, colorBorder } from '../../helpers';
import { Button, Card, P, Title } from './style';
import useFetch from '../../hooks/useFetch';
import { Welcome } from '../../interfaces/pokemon';

interface Props {
  url: string;
}

export const CardComponet = ({ url }: Props) => {
  const { data, loading, error } = useFetch<Welcome>(url)

  if (loading) return <></>

  if (error) return <></>

  return (
    <div>
      <Card color={colorAssign(data!.types)} border={colorBorder(data!.types[0].type.name)}>
        <div>
          <Title color='#070707'>{capitalizeFirstLetter(data!.name)}</Title>
          <P>Heigth: {data!.height}</P>
          <P>Weigth: {data!.weight}</P>
          <P>
            Abiliies: {data!.abilities.map((item: any, index) => {
              return `${item.ability.name}${data!.abilities.length - 1 === index ? ' ' : ', '}`
            })}
          </P>
          {data!.types.map((item: any, index) => {
            return <Button color={colorBorder(data!.types[index].type.name)}>{capitalizeFirstLetter(item.type.name)}</Button>
          })}
        </div>
        <div>
          <img src={data!.sprites.other!.dream_world.front_default} alt={data!.sprites.other?.dream_world.front_default} style={{ maxHeight: '120px', maxWidth: '140px' }} />
        </div>
      </Card>
    </div>
  )
}
