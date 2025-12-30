import Button from '@/components/ui/Buttom'
import React from 'react'

export default function NastroykaBox() {
  return (
    <div>
        <h2 className="font-normal text-[24px] leading-[120%] tracking-[-0.04em] mb-[32px]" >Настройки</h2>
        <p className=' font-normal text-[18px] leading-[18px] tracking-[-0.01em] mb-[16px]'>Безопасность</p>
        <Button text={'Изменить пароль'} className={`w-[205px] h-[64px] rounded-[12px] font-normal text-[14px] leading-[16px] tracking-[0em] bg-[#DFDFDF] `}/>
    </div>
  )
}
