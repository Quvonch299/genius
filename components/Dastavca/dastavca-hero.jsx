import Link from 'next/link'
import React from 'react'

export default function DastavcaHero() {
  return (
   <div className='bg-[url(/dastafkahero.png)] bg-cover bg-center bg-no-repeat  h-[293px] mt-[44px]   '>
        <div className='pt-[128px] max-w-7xl m-auto'>

        <span className='font-normal flex text-[18px] leading-[120%] tracking-[-0.04em]' >
            <Link href={'/'} className='text-[#FFFFFF66]'>Главная </Link>
            <p className='text-[#FFF]'> -  Доставка и оплата</p>
        </span>
        <h1 className='font-normal text-[64px] leading-[100%] tracking-[-0.04em] mt-[32px] text-[#FFF]'>Доставка и оплата</h1>
        </div>
    </div>
  )
}
