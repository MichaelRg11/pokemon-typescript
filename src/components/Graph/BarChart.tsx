import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';
import { capitalizeFirstLetter, colorBorder } from '../../helpers';
import { Welcome } from '../../interfaces/typePokemon';

interface Props {
  data: Welcome[];
  name: string;
  value: string;
  color?: string;
  pokemon?: boolean;
  active: number;
  setActive: (value: number) => void
}

export const RenderBarChart = ({ data, color, pokemon = true, name, value, active, setActive }: Props) => {

  const handleClick = (data: any, index: number) => {
    setActive(index);
  };

  const setColor = (index: number) => {
    return index === active ? (color ? color : colorBorder(data[active].name)) : color ? '#0000004d' : colorBorder(data[index].name)
  }

  return (
    <>
      <ResponsiveContainer width="100%" height={pokemon ? 200 : 400}>
        <BarChart width={300} height={200} data={data}>
          <XAxis dataKey={name} />
          <YAxis />
          <Tooltip wrapperStyle={{ width: 150, backgroundColor: '#eee' }} />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey={value} barSize={25} background={{ fill: '#eee' }} onClick={handleClick}>
            {data.map((entry, index) => (
              <Cell cursor="pointer" fill={setColor(index)} key={`cell-${index}`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      {
        pokemon && (
          <p style={{ fontSize: '20px', textAlign: 'center', color: '#000000c8', marginBottom: '10px' }}>
            {`${capitalizeFirstLetter(data[active].name.replace(/-/g, ' '))}: ${data[active].value}`}
          </p>
        )
      }
    </>
  )
};

