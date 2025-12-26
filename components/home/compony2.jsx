import Image from 'next/image'
import React from 'react'

export default function Compony2() {
  return (
    <div>

    <div className="mt-[48px] max-sm:ml-[16px] max-sm:mr-[16px] relative bg-[url('/sec10.png')] bg-cover bg-center h-[518px] max-w-7xl m-auto max-sm:rounded-[24px] rounded-[32px] overflow-hidden">
      
      <Image
        src="/sec3bg.png"
        alt="overlay"
        fill
        className="absolute inset-0 object-cover"
      />
      <div className=' absolute max-sm:flex max-sm:flex-col gap-[24px] max-sm:text-center bottom-[48px] right-[48px] max-sm:right-[14px] flex'>

<p className='  font-normal w-[393px] max-sm:w-[310px] max-sm:text-[14px] text-[18px] leading-[135%] tracking-[-0.04em] text-[#FFFFFF]'>Собственное конструкторское бюро позволяет нам разрабатывать уникальные инженерные решения под конкретные задачи заказчика. Каждый проект проходит многоступенчатый контроль качества.</p>
<p className='  font-normal w-[393px] max-sm:w-[310px] max-sm:text-[14px] text-[18px] leading-[135%] tracking-[-0.04em] text-[#FFFFFF]'>Мы работаем с ведущими промышленными предприятиями, энергетическими компаниями и строительными организациями, обеспечивая стабильные поставки и профессиональную техническую поддержку.</p>
      </div>
    </div>
      <div className='flex justify-center gap-[100px] mt-[64px]'>
        <div>
          <h2 className="font-inter font-normal text-[82px] leading-[82px] tracking-[0]">2015</h2>
          <p className="font-inter font-normal text-[18px] leading-none tracking-[-0.04em] text-[#27272799] mt-[24px]">Год создания компании</p>
        </div>
        <div>
          <h2 className="font-inter font-normal text-[82px] leading-[82px] tracking-[0]">14 600+</h2>
          <p className="font-inter font-normal text-[18px] leading-none tracking-[-0.04em] text-[#27272799] mt-[24px]">Километров кабеля создано</p>
        </div>
        <div>
          <h2 className="font-inter font-normal text-[82px] leading-[82px] tracking-[0]">500+</h2>
          <p className="font-inter font-normal text-[18px] leading-none tracking-[-0.04em] text-[#27272799] mt-[24px]">Клиенты</p>
        </div>
      </div>
        </div>
  )
}
