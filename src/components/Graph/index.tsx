import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface Props {
  data: { name: string; value: number; }[];
  color: string;
}

export const RenderBarChart = ({ data, color }: Props) => {
  const width = window.screen.width < 514 ? 300 : 450;
  return (
    <BarChart width={width} height={200} data={data} style={{}}>
      <XAxis dataKey="name" stroke={color} />
      <YAxis />
      <Tooltip wrapperStyle={{ width: 150, backgroundColor: '#ccc' }} />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="value" fill={color} barSize={30} />
    </BarChart>
  )
};