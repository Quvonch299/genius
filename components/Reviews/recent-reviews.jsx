import Image from 'next/image'
import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function RecentReviews() {
  return (
    <div className='max-w-7xl m-auto '>
        <h2 className=' text-[#27272799] mt-[100px] mb-[48px] font-normal text-[24px] leading-[100%] tracking-[-0.04em]'>Последние отзывы</h2>
        <div className='grid grid-cols-2 gap-[24px] items-center'>
<div>
    <Image src={'/sec12.png'} width={613} height={520} alt='sec12'/>
</div>
<div className=''>
    <p className='font-normal text-[24px] leading-[130%] tracking-[-0.04em]'>Покупал кабели в магазине Genius Electro — остался полностью доволен. Качество сразу чувствуется: плотная изоляция, аккуратные разъёмы, ничего не люфтит и не выглядит «дешёво». Подключил без проблем, всё работает стабильно, без потерь сигнала<br/>
и нагрева</p>
<br/>
<br/>
<p className='font-normal text-[24px] leading-[130%] tracking-[-0.04em]'>Отдельно отмечу сборку — видно, что кабели сделаны с расчётом на долгую эксплуатацию, а не «на один раз».</p>
<div className="flex items-center justify-between mt-[64px] px-6 ">
      <div className="flex items-center gap-[16px]">
        <div className="w-[57px] h-[57px] rounded-full bg-[linear-gradient(119.47deg,#D8C19A_20.35%,#C3974C_94.16%)] " />
        <div>
          <h3 className="font-normal text-[24px] leading-[120%] tracking-[-0.06em]">Антон Антонов</h3>
          <p className="font-normal text-[18px] leading-[24px] tracking-[-0.06em] text-[#27272766]">CEO, XYZ Group</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button
          aria-label="Oldingi izoh"
          className="w-12 h-12 rounded-full bg-[#F3F3F3] flex items-center justify-center hover:bg-gray-200 "
        >
        <FaArrowLeft />
        </button>
        <button
          aria-label="Keyingi izoh"
          className="w-12 h-12 rounded-full bg-[linear-gradient(119.47deg,#D8C19A_20.35%,#C3974C_94.16%)] flex items-center justify-center"
        >
         <FaArrowRight />

        </button>
      </div>
    </div>
</div>
        </div>
    </div>
  )
}
