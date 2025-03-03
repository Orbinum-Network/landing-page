import { ChartData } from '@/interfaces';
import { useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

const renderActiveShape = ({ cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, payload, percent, value }: any) => {
    const RADIAN = Math.PI / 180;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const ex = cx + (outerRadius + 30) * cos + (cos >= 0 ? 1 : -1) * 22;
    const ey = cy + (outerRadius + 30) * sin;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={payload.color}>{payload.name}</text>
            <Sector {...{ cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill: payload.color }} />
            <Sector {...{ cx, cy, innerRadius: outerRadius + 6, outerRadius: outerRadius + 10, startAngle, endAngle, fill: payload.color }} />
            <text x={ex} y={ey} textAnchor={textAnchor} fill="#212121">{`${value.toLocaleString('en-US')} ON`}</text>
            <text x={ex} y={ey} dy={18} textAnchor={textAnchor} fill="#212121">{`(${(percent * 100).toFixed(2)}%)`}</text>
        </g>
    );
};

interface ChartProps {
    data: ChartData[];
}

export function TokenomicsChart({ data }: ChartProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={90}
                    outerRadius={140}
                    fill="#9E9E9E"
                    dataKey="value"
                    onMouseEnter={(_, index) => setActiveIndex(index)}
                />
            </PieChart>
        </ResponsiveContainer>
    )
}