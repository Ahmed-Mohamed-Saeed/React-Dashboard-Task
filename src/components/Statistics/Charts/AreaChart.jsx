import React from 'react';
import { AreaChart, Area, XAxis,  Tooltip, ResponsiveContainer } from 'recharts';

const AreasChart = () => {
    const data = [
        {
          name: '7 am',
          uv: 2000,
          pv: 2400,
          amt: 2400,
        },
                {
          name: '7 am',
          uv: 5000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: '9 am',
          uv: 8000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: '11 am',
          uv: 5700,
          pv: 1398,
          amt: 2210,
        },
        {
          name: '1 am',
          uv: 6000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: '3 pm',
          uv: 3080,
          pv: 3908,
          amt: 2000,
        },
        {
          name: '5 pm',
          uv: 3000,
          pv: 4800,
          amt: 2181,
        },
        {
          name: '7 pm',
          uv: 3890,
          pv: 3800,
          amt: 2500,
        },
        {
          name: '9 pm',
          uv: 2000,
          pv: 4300,
          amt: 2100,
        },
      ];
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart
        width={460}
        height={220}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#FF764C" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default AreasChart;