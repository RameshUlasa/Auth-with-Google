import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

const Piechart = () => {
  const data = [
    {name: 'Basic Tees', count: 250},
    {name: 'Custom Short Pants', count: 400},
    {name: 'Super Hoodies', count: 150},
  ]

  const legendItems = data.map(({name, count}, index) => ({
    value: name,
    id: index,
    color: ['#EE8484', '#F6DC7D', '#98D89E'][index],
    percentage: (
      (count / data.reduce((acc, cur) => acc + cur.count, 0)) *
      100
    ).toFixed(2),
  }))

  const renderLegendItem = (value, entry) => {
    const {percentage} = entry

    return (
      <div className="items-card">
        <span className="value">{value}</span>
        <span className="percentage">{percentage}%</span>
      </div>
    )
  }

  return (
    <ResponsiveContainer width="100%" height={192}>
      <PieChart>
        <Pie data={data} cx="50%" cy="50%" outerRadius="60%" dataKey="count">
          <Cell fill="#EE8484" />
          <Cell fill="#F6DC7D" />
          <Cell fill="#98D89E" />
        </Pie>

        <Legend
          layout="vertical"
          verticalAlign=""
          align="right"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
          payload={legendItems.map(item => ({
            value: item.value,
            color: item.color,
            percentage: item.percentage,
          }))}
          formatter={renderLegendItem}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default Piechart
