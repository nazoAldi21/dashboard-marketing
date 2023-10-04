// components/CustomBarChart.tsx
import React from 'react';

interface CustomBarChartProps {
  value1: number; // Value for the first color
  value2: number; // Value for the second color
}

const CustomBarChart: React.FC<CustomBarChartProps> = ({ value1, value2 }) => {
  const totalValue = value1 + value2;

  const bar1Width = (value1 / totalValue) * 100;
  const bar2Width = (value2 / totalValue) * 100;

  return (
    <div className="w-9 h-20 relative flex flex-col-reverse">
      <div
        className="w-2 left-[-5.19px]  relative bg-orange-400 rounded-bl-full rounded-br-full"
        style={{ height: `${bar1Width}%` }}
      />
      <div
        className="w-2 left-[-5.19px]  relative bg-blue-900 rounded-tl-full rounded-tr-full rounded-bl rounded-br"
        style={{ height: `${bar2Width}%` }}
      />
    </div>
  );
};

export default CustomBarChart;
