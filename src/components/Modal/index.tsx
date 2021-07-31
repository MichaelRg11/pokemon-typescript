import { Button, Img, Title } from '../Card/style'
import { RenderBarChart } from '../Graph'
import { ModalContainer, ModalContent, ModalBody, Close } from './style'
import useFetch from '../../hooks/useFetch';
import { Welcome } from '../../interfaces/locationPokemon';
import { Loading } from '../../assets/style/style';
import { capitalizeFirstLetter } from '../../helpers';

interface Props {
  show: boolean;
  setShowModal: (value: boolean) => void;
  name: string;
  color: string;
  image: string;
  background: string;
  stats: { name: string; value: number; }[];
  location: string;
}

export default function Modal ({ show = false, setShowModal, name, color, image, stats, location }: Props) {
  const { data, loading, error } = useFetch<Welcome[]>(location)

  if (loading) return <ModalContainer show={loading}><Loading /></ModalContainer>

  if (error) return <Loading />

  return (
    <ModalContainer show={show} >
      <ModalContent >
        <ModalBody>
          <Close onClick={() => setShowModal(false)}>X</Close>
          <Title color={color} style={{ textAlign: 'center', fontSize: '40px' }}>{name}</Title>
          <Img src={image} alt={image} style={{ height: '150px', width: '100%', marginBottom: 10 }} />
          <RenderBarChart data={stats} color={color} />
          <Title color={color} style={{ textAlign: 'center', fontSize: '30px' }}>Location</Title>
          <div style={{ textAlign: 'center' }}>
            {data?.length !== 0 ?
              data?.map((item: any) => {
                return <Button color={color}>{capitalizeFirstLetter(item.location_area.name.replace(/-/g, ' '))}</Button>
              })
              :
              <Title color={color}>Your location was not found</Title>
            }
          </div>
        </ModalBody>
      </ModalContent>
    </ModalContainer>
  )
}

