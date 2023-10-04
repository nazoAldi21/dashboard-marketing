import React from 'react'
import BarChart from './BarChart';

interface Order {
    title: string;
    amount: number;
  }

  const value1 = 14; // Example value
  const value2 = 28; // Example value
  const value3 = 28; // Example value
  const value4 = 12; // Example value

const CardChart:React.FC<Order> = ({title, amount}) => {
  return (
    <div className='w-44 mr-4 bg-tertiaryblue flex flex-col items-start p-5 rounded-lg'>
        <div className='mb-5'>
            <h4 className='text-white text-base font-medium leading-7 mb-3'>{title}</h4>
            <h3 className='text-orange-400 text-3xl font-medium'>{amount}K</h3>
        </div>
        <div className='flex flex-row mr-4'>
            <BarChart value1={value1} value2={value2} />
            <BarChart value1={value3} value2={value4} />
            <BarChart value1={value1} value2={value2} />
            <BarChart value1={value3} value2={value4} />
            <BarChart value1={value3} value2={value4} />
        </div>
    </div>
  )
}

export default CardChart