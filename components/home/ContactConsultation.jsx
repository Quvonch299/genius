'use client'
import React, { useState } from 'react'
import Button from '../ui/Buttom'
import Image from 'next/image'
import PopUpModal from '../pop-up-modal'
import { AnimatePresence } from 'framer-motion'

export default function ContactConsultation() {
  const[open,setOpen]=useState(false)
  return (
    <div className='flex max-w-7xl m-auto mt-[100px]'>
        <div className='mt-[22px]'>
            <h2 className='font-normal text-[32px] leading-[100%] tracking-[-0.04em]'>Есть вопросы?
Напишите нам!</h2>
            <p className='font-normal text-[18px] leading-[130%] tracking-[-0.04em] mt-[18px]'>Узнайте актуальную цену, условия покупки и доставки</p>
            <div
               onClick={()=>setOpen(true)}
            >
            <Button
         className={`mt-[32px] bg-[linear-gradient(119.47deg,#D8C19A_20.35%,#C3974C_94.16%)] w-[340px] h-[67px] rounded-[12px]`}
         text={'Оставить заявку на консультацию'}/>
         </div>
        </div>
        <div className=''>
            <Image src='/cantactimg.png' width={952} height={315} alt='q' />
        </div>
        <AnimatePresence>
          {open && <PopUpModal setOpen={setOpen} />}
        </AnimatePresence>
    </div>
  )
}
