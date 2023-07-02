import React from 'react'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {name: 'Week 1', Guest: 0, User: 200},
  {name: 'Week 2', Guest: 500, User: 450},
  {name: 'Week 3', Guest: 350, User: 470},
  {name: 'Week 4', Guest: 140, User: 340},
  {name: 'Week 5', Guest: 370, User: 140},
]

const LineGraph = () => (
  <ResponsiveContainer width="100%" height={250}>
    <LineChart
      data={data}
      margin={{top: 5, right: 30, left: 20, bottom: 5, legend: 20}}
    >
      <CartesianGrid vertical={false} strokeDasharray="" />
      <XAxis dataKey="name" axisLine={false} />
      <YAxis axisLine={false} />
      <Tooltip />

      <Line
        type="monotone"
        dataKey="Guest"
        stroke="#E9A0A0"
        strokeWidth={3}
        dot={false}
      />
      <Line
        type="monotone"
        dataKey="User"
        stroke="#90EE90"
        strokeWidth={3}
        dot={false}
      />

      <Legend
        verticalAlign="top"
        align="right"
        height={36}
        iconType="circle"
        iconSize={8}
        itemMarginLeft={10}
        wrapperStyle={{
          top: -40,
        }}
      />
    </LineChart>
  </ResponsiveContainer>
)

export default LineGraph
