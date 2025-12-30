import Button from '@/components/ui/Buttom'
import Image from 'next/image'
import React from 'react'

export default function LovlyBox() {
  return (
      <div className='flex flex-col h-[467px] justify-center items-center'>
            <div className='flex flex-col justify-center items-center  w-[124px] h-[97px]'>
            <Image src={'/icon/navbaricon1.svg'} width={49} height={41} alt='qww'/>
            <h2 className='font-normal text-[16px] mt-[12px] leading-[22px] tracking-[-0.02em] text-center align-middle'>Нет избранных товаров</h2>
            </div>
            <Button text={'Продолжить покупки'} className={`w-[342px] h-[65px] mt-[82px] rounded-[10px] bg-[linear-gradient(119.47deg,_#D8C19A_20.35%,_#C3974C_94.16%)]`}/>
        </div>
  )
}
