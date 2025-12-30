import Button from '@/components/ui/Buttom'
import React from 'react'

export default function KabenetBox() {
  return (
    <div className='w-[858px]'>
        <h2 className='font-normal text-[24px] leading-[120%] tracking-[-0.04em] mb-[24px]'>Личные данные</h2>
        <div className='grid grid-cols-2  gap-[16px]'>
            <span>
                <p className="text-[#27272799] text-[16px] leading-[18px] tracking-[-0.02em] font-normal mb-[12px]">Имя</p>
                <input className='w-[420px] h-[50px] rounded-[12px] border border-[0.5px] border-[#27272799] outline-none px-6 font-normal text-[14px] leading-[18px] tracking-[0] text-[#272727]' type="text" name="" id=""/>
            </span>
            <span>
                <p className="text-[#27272799] text-[16px] leading-[18px] tracking-[-0.02em] font-normal mb-[12px]">Фамилия</p>
                <input className='w-[420px] h-[50px] rounded-[12px] border border-[0.5px] border-[#27272799] outline-none px-6 font-normal text-[14px] leading-[18px] tracking-[0] text-[#272727]' type="text" name="" id=""/>
            </span>
            <span>
                <p className="text-[#27272799] text-[16px] leading-[18px] tracking-[-0.02em] font-normal mb-[12px]">Email</p>
                <input className='w-[420px] h-[50px] rounded-[12px] border border-[0.5px] border-[#27272799] outline-none px-6 font-normal text-[14px] leading-[18px] tracking-[0] text-[#272727]' type="email" name="" id=""/>
            </span>
            <span>
                <p className="text-[#27272799] text-[16px] leading-[18px] tracking-[-0.02em] font-normal mb-[12px]">Телефон</p>
                <input className='w-[420px] h-[50px] rounded-[12px] border border-[0.5px] border-[#27272799] outline-none px-6 font-normal text-[14px] leading-[18px] tracking-[0] text-[#272727]' type="text" name="" id=""/>
            </span>
        </div>
        <h2 className='font-normal text-[24px] leading-[120%] tracking-[-0.04em] mb-[24px] mt-[32px]'>Адрес</h2>
        <div className=''>
            <span>
                <p className="text-[#27272799] text-[16px] leading-[18px] tracking-[-0.02em] font-normal mb-[12px]">Город</p>
                <input className='w-full h-[50px] rounded-[12px] border border-[0.5px] border-[#27272799] outline-none px-6 font-normal text-[14px] leading-[18px] tracking-[0] text-[#272727]' type="text" name="" id=""/>
            </span>
            <div className='mt-[16px] grid grid-cols-2 gap-[16px]'>
                
            <span>
                <p className="text-[#27272799] text-[16px] leading-[18px] tracking-[-0.02em] font-normal mb-[12px]">Улица</p>
                <input className='w-[420px] h-[50px] rounded-[12px] border border-[0.5px] border-[#27272799] outline-none px-6 font-normal text-[14px] leading-[18px] tracking-[0] text-[#272727]' type="email" name="" id=""/>
            </span>
            <span>
                <p className="text-[#27272799] text-[16px] leading-[18px] tracking-[-0.02em] font-normal mb-[12px]">Дом</p>
                <input className='w-[420px] h-[50px] rounded-[12px] border border-[0.5px] border-[#27272799] outline-none px-6 font-normal text-[14px] leading-[18px] tracking-[0] text-[#272727]' type="text" name="" id=""/>
            </span>
            <span>
                <p className="text-[#27272799] text-[16px] leading-[18px] tracking-[-0.02em] font-normal mb-[12px]">Квартира</p>
                <input className='w-[420px] h-[50px] rounded-[12px] border border-[0.5px] border-[#27272799] outline-none px-6 font-normal text-[14px] leading-[18px] tracking-[0] text-[#272727]' type="email" name="" id=""/>
            </span>
            <span>
                <p className="text-[#27272799] text-[16px] leading-[18px] tracking-[-0.02em] font-normal mb-[12px]">Индекс</p>
                <input className='w-[420px] h-[50px] rounded-[12px] border border-[0.5px] border-[#27272799] outline-none px-6 font-normal text-[14px] leading-[18px] tracking-[0] text-[#272727]' type="text" name="" id=""/>
            </span>
            </div>
        </div>
        <Button text={'Сохранить изменения'} className={`w-[300px] h-[67px] rounded-[10px] mt-[48px] bg-[linear-gradient(119.47deg,_#D8C19A_20.35%,_#C3974C_94.16%)]`}/>
    </div>
  )
}
