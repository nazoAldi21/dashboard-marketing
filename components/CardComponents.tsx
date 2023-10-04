import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface Card {
    title: string;
    value: string | number ;
    src: string | StaticImageData;
    isActive: boolean;
}

const CardComponents:React.FC<Card> = ({title, value, src, isActive}) => {
  return (
    <div className={`${isActive ? 'bg-emerald-500' :  'bg-tertiaryblue'} flex flex-row items-center p-5 rounded-lg`}>
      <div>
        <Image src={src} width={35} height={35} alt={title} objectFit='contain' />
      </div>
      <div className='ml-4'>
        <h2 className="text-sm font-semibold leading-4">{title}</h2>
        <p className={`text-sm mt-1 ${isActive ? 'text-white' : 'text-gray-500'}`}>{value}</p>
      </div>
    </div>
  )
}

export default CardComponents