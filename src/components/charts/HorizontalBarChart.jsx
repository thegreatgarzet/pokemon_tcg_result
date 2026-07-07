import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell} from "recharts";

const tempData = [
        { name: "Carregando", value: 100 }
    ];

export default function HorizontalBarChart({ data = tempData, dataKeyLabel = "name", dataKeyValue = "value", height, color, fontsize = 12, fontcolor = "rgb(255, 255, 255)"}) {
  

  return (
    <div style={{ width: "100%", height: height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical" // "vertical" no Recharts = barras horizontais
          margin={{ top: 8, right: 24, left: 8, bottom: 8 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" tick={{fontSize: fontsize, fill: fontcolor}} />
          <YAxis
            type="category"
            dataKey={dataKeyLabel}
            width={110}
            tick={{ fontSize: fontsize, fill:  fontcolor}}
          />
          <Tooltip />
          <Bar dataKey={dataKeyValue} radius={[0, 4, 4, 0]} barSize={24}>
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={color}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
