import { capitalizeFirstLetter, colorAssign, colorBorder } from '../../helpers';
import { Button, Card, Img, P, Title } from './style';
import useFetch from '../../hooks/useFetch';
import { Welcome } from '../../interfaces/pokemon';
import { Loading } from '../../assets/style/style';
import { useLoaderImg } from '../../hooks/useLoaderImg';
import { CardError } from '../CardError';
import Modal from '../Modal';
import { useState } from 'react';

interface Props { url: string; }

export const CardComponet = ({ url }: Props) => {
  const { data, loading, error } = useFetch<Welcome>(url)
  const { loaded, ref, onLoad } = useLoaderImg()
  const [show, setShow] = useState(false)

  if (loading) return <Loading />

  if (error) return <CardError />

  return (
    <>
      <Card color={colorAssign(data!.types)} onClick={() => setShow(true)} border={colorBorder(data!.types[0].type.name)}>
        <div>
          <Title color='#070707'>{capitalizeFirstLetter(data!.name)}</Title>
          <P>Heigth: {data!.height}</P>
          <P>Weigth: {data!.weight}</P>
          <P>
            Abiliies: {data!.abilities.map((item: any, index) => {
              return `${item.ability.name.replace(/-/g, ' ')}${data!.abilities.length - 1 === index ? ' ' : ', '}`
            })}
          </P>
          {data!.types.map((item: any, index) => {
            return <Button color={colorBorder(data!.types[index].type.name)}>{capitalizeFirstLetter(item.type.name)}</Button>
          })}
        </div>
        <div>
          <Img src={data!.sprites.other!.dream_world.front_default} alt={data!.sprites.other?.dream_world.front_default} ref={ref} onLoad={onLoad} hidden={!loaded} />
        </div>
      </Card>

      {show &&
        <Modal
          show={show}
          setShowModal={setShow}
          name={capitalizeFirstLetter(data!.name)}
          color={colorBorder(data!.types[0].type.name)}
          image={data!.sprites.other!.dream_world.front_default}
          background={colorAssign(data!.types)}
          stats={data!.stats.map(item => { return { name: item!.stat.name, value: item!.base_stat } })}
          location={data!.location_area_encounters}
        />
      }

    </>
  )
}