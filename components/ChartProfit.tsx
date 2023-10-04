import React from 'react'
import ImgChart from '../assets/images/Chart.png'
import Image from 'next/image';

interface Order {
    title: string;
    amount: number | string;
  }

const ChartProfit:React.FC<Order> = ({title, amount}) => {
  return (
    <div className='w-36 bg-tertiaryblue flex flex-col items-start p-5 rounded-lg'>
        <div className='mb-4'>
            <h4 className='text-white text-base font-medium leading-7 mb-3'>{title}</h4>
            <h3 className='text-emerald-400 text-3xl font-medium'>{amount}K</h3>
        </div>
        <div className='flex flex-row'>
            <Image src={ImgChart} alt='ProfitChart' width={280} height={200}/>
        </div>
    </div>
  )
}

export default ChartProfit