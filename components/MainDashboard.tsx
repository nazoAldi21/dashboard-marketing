import { TitleDashboard } from '@utils/constant'
import React, { useState } from 'react'
import CardComponents from './CardComponents'
import Link from 'next/link'
import ImgCost from '../assets/images/Group 437.png'
import ImgSales from '../assets/images/trophy.png'
import ImgWeek from '../assets/images/calendar.png'
import ImgRevenue from '../assets/images/Group 402.png'
import ImgPayment from '../assets/images/wallet.png'
import ChartOrders from './ChartOrders'
import ChartProfit from './ChartProfit'
import EarningsChart from './EarningChart'


const MainDashboard = () => {
    const [activeCard, setActiveCard] = useState(1);
  return (
    <div className='w-full p-5'>
        <div className='mb-6'>
            <h4 className='text-white text-3xl font-semibold tracking-tight'>{TitleDashboard}</h4>
            <Link href="/" className='text-gray-500 text-sm font-medium tracking-tight'>
                Home / <span className='text-emerald-500'>Dashboard</span>
            </Link>
        </div>
        <div className='grid grid-rows-1 grid-cols-5 gap-3 w-full mb-4'>
            <CardComponents title='Total Cost' value='$31.868' src={ImgCost} isActive={activeCard === 1}/>
            <CardComponents title='Total Sales' value='$66,053' src={ImgSales} isActive={activeCard === 2}/>
            <CardComponents title='This Week' value='$35,000,00' src={ImgWeek} isActive={activeCard === 3}/>
            <CardComponents title='Revenue' value='$63,00K' src={ImgRevenue} isActive={activeCard === 4}/>
            <CardComponents title='$1250' value='Last Payment' src={ImgPayment} isActive={activeCard === 5}/>
        </div>
        <div className='flex flew-row w-3/4'>
            <EarningsChart/>
            <ChartOrders title='Orders' amount={189}/>
            <ChartProfit title='Profit' amount='8,24'/>
        </div>
        <div></div>
    </div>
  )
}

export default MainDashboard