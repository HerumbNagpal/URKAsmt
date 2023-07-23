import React from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const data = [
    { age: "20", a: 15, b: 15, c: 10 },
    { age: "", a: 20, b: 20, c: 20 },
    { age: "30", a: 25, b: 25, c: 20 },
    { age: "", a: 30, b: 30, c: 30 },
    { age: '40', a: 43, b: 44, c: 48 },
    { age: "", a: 50, b: 50, c: 50 },
    { age: "50", a: 65, b: 60, c: 60 },
    { age: "", a: 70, b: 70, c: 70 },
    { age: '60', a: 83, b: 84, c: 88 },
    { age: "", a: 90, b: 90, c: 90 },
    { age: "65", a: 100, b: 100, c: 100 },

];


export default function DisplayChart() {

    return (
        <div className='barchart'>
            <ResponsiveContainer >
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey='age' />
                    <YAxis />
                    <Tooltip />
                    <Bar width='20px' dataKey='a' stackId='a' fill='#4A55A2' />
                    <Bar dataKey='b' stackId='a' fill='#7895CB' />
                    <Bar dataKey='c' stackId='a' fill='#C5DFF8' />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}