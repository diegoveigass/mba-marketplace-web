import { Calendar01Icon } from 'hugeicons-react'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const data = [
  {
    name: '8 de julho',
    visitors: 41,
    date: 8,
  },
  {
    name: '9 de julho',
    visitors: 141,
    date: 9,
  },
  {
    name: '10 de julho',
    visitors: 341,
    date: 10,
  },
]

export function Chart() {
  return (
    <div className="bg-white rounded-2xl col-span-4 p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="font-bold font-dm-sans text-lg">Visitantes</h1>
        <div className="flex items-center justify-center gap-2">
          <Calendar01Icon className="size-4 text-blue-dark" />
          <p className="uppercase text-xs leading-tight">
            26 de junho - 26 de julho
          </p>
        </div>
      </div>
      <div className="h-96">
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="visitors"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
