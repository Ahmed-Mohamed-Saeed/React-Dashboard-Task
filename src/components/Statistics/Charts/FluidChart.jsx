import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const FluidChart = () => {
    const data = [
        { name: 'Group A', value: 620 },
        { name: 'Group B', value: 80 }
    ];
    const COLORS = ['#F4F5F9', '#A162F7'];
  return (
    <ResponsiveContainer width="100%" height="100%">
        <PieChart width={800} height={400}>
            <Pie
                data={data}
                cx={51}
                cy={56}
                startAngle={-45}
                endAngle={225}
                innerRadius={45}
                outerRadius={56}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
    </ResponsiveContainer>

  )
}

export default FluidChart;