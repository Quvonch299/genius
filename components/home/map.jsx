import Image from 'next/image'
import React from 'react'

export default function Map() {
  return (
    <div className='max-w-7xl m-auto'>
       <div className='  mt-[100px]  flex  justify-between'>
        <div>
            <h1 className=' text-[#27272799] font-normal text-[18px] leading-[100%] tracking-[-0.04em]'>Доставляем</h1>
        </div>
        <div className='w-[470px]'>
            <h2 className='font-normal mb-[24px] text-[32px] leading-[42px] tracking-[-0.04em]'>Поставки кабельной продукции по всей России</h2>
            <p className='text-[#27272799]  font-normal text-[18px] leading-[140%] tracking-[-0.04em]'>Благодаря многолетнему опыту и развитой транспортной логистике ваш товар будет доставлен в оптимальный срок и с наименьшими затратами.</p>
        </div>
        <div></div>
    </div>
<div>
     <Image
            src="/map.png"
            width={500}
            height={300}
            alt="Map Image"
            className="w-full h-auto object-cover"
          />
</div>
    </div>
  )
}
