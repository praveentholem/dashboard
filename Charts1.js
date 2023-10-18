import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';

const Charts1 = () => {
    const data = [
        {
            name: 'Jan',
            uv: 4000,
            fill: '#F2EFFF', // Default color for other bars
        },
        {
            name: 'Feb',
            uv: 3000,
            fill: '#F2EFFF',
        },
        {
            name: 'Mar',
            uv: 2000,
            fill: '#F2EFFF',
        },
        {
            name: 'Apr',
            uv: 2780,
            fill: '#F2EFFF',
        },
        {
            name: 'May',
            uv: 1890,
            fill: '#F2EFFF',
        },
        {
            name: 'Jun',
            uv: 2390,
            fill: '#F2EFFF',
        },
        {
            name: 'Jul',
            uv: 3490,
            fill: '#F2EFFF',
        },
        {
            name: 'Aug',
            uv: 4850,
            fill: '#2962FF', // Specify a different color for August
        },
        {
            name: 'Sep',
            uv: 3248,
            fill: '#F2EFFF',
        },
        {
            name: 'Oct',
            uv: 4524,
            fill: '#F2EFFF',
        },
        {
            name: 'Nov',
            uv: 1245,
            fill: '#F2EFFF',
        },
        {
            name: 'Dec',
            uv: 4215,
            fill: '#F2EFFF',
        },
    ];

    return (
        <div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={200} height={40} data={data}>
                    <Bar dataKey="uv" fill="#fff" />
                    <XAxis dataKey="name" scale="point" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Charts1;
