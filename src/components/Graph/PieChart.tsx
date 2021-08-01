// @ts-nocheck
import { useState } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { capitalizeFirstLetter, colorBorder } from '../../helpers';
import { CardComponet } from '../Card';
import { Title } from '../Card/style';
import { Content } from '../ListCard/style';
import { Pokemon, Welcome } from '../../interfaces/typePokemon';

interface Props {
  data: Welcome[];
  name: string;
  value: string;
  color?: string;
  pokemon?: boolean;
  active: number;
  setActive: (value: number) => void
}

export const RenderPieChart = ({ data, color, name, value, active, setActive }: Props) => {

  const handleClick = (data: any, index: number) => {
    setActive(index);
  };

  const setColor = (index: number) => {
    return index === active ? (color ? color : colorBorder(data[active].name)) : color ? '#0000004d' : colorBorder(data[index].name)
  }

  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart width={400} height={400}>
          <Tooltip />
          <Pie
            dataKey={value}
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={150}
            onClick={handleClick}
            label
          >
            {data.map((entry, index) => (
              <Cell cursor="pointer" fill={setColor(index)} key={`cell-${index}`} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <Title color={setColor(active)} style={{ textAlign: 'center', fontSize: '40px' }}>
        {capitalizeFirstLetter(data[active].name.replace(/-/g, ' '))}
      </Title>
      <Content>
        {data[active]!.pokemons.map((item: Pokemon, index) => {
          console.log(index)
          return (<CardComponet key={index} url={item.pokemon.url} />);
        })}
      </Content>
    </>
  );
}
