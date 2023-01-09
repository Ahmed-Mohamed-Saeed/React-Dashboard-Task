import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const RangeChart = () => {
    const data = [
        { name: 'Group A', value: 350 },
        { name: 'Group B', value: 350 }
    ];
    const COLORS = ['#F4F5F9', '#FF7E86'];
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

export default RangeChart;