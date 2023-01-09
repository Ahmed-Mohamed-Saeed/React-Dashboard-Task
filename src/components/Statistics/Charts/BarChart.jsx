import React, { useState } from 'react';
import { BarChart, Bar, Cell, ResponsiveContainer , XAxis } from 'recharts';

const BarsChart = () => {
    const [resp, setResp] = useState({
        data: [
            {
                name: '1 pm',
                uv: 3000,
                pv: 2400,
                amt: 2400,
            },
            {
                name: '2 pm',
                uv: 2000,
                pv: 1398,
                amt: 2210,
            },
            {
                name: '3 pm',
                uv: 4000,
                pv: 9800,
                amt: 2290,
            },
            {
                name: '4 pm',
                uv: 2780,
                pv: 3908,
                amt: 2000,
            },
            {
                name: '5 pm',
                uv: 2500,
                pv: 4800,
                amt: 2181,
            },
            {
                name: '6 pm',
                uv: 2390,
                pv: 3800,
                amt: 2500,
            },
            {
                name: '7 pm',
                uv: 3490,
                pv: 4300,
                amt: 2100,
            }
        ],
        activeIndex: 0
    });
    const handleClick = (data, index) => {
        setResp({
            ...resp,
            activeIndex: index
        })
    };
    const { activeIndex, data } = resp;
    const activeItem = data[activeIndex];
  return (
      <div style={{ width: '100%' }}>
          <ResponsiveContainer width="100%" height={220}>
              <BarChart width={150} height={40} data={data}>
                  <Bar dataKey="uv" onClick={handleClick}>
                      {data.map((entry, index) => (
                          <Cell cursor="pointer" fill={index === activeIndex ? '#2884FF' : '#E3ECF1'} key={`cell-${index}`} />
                      ))}
                  </Bar>
                    <XAxis dataKey="name" />
              </BarChart>
          </ResponsiveContainer>
      </div>
  )
}

export default BarsChart;