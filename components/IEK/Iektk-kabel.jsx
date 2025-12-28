'use client'
import { useState } from 'react'
import Image from 'next/image'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const METERS = [100, 200, 240, 320, 400]
const PRICE_PER_METER = 65.7
export default function IEkKabel() {
  const [activeMeter, setActiveMeter] = useState(100)
  const [count, setCount] = useState(4)

  const totalPrice = Math.round(activeMeter * PRICE_PER_METER * count)

  return (
    <div className="max-w-7xl mt-[48px] mx-auto grid grid-cols-2 gap-12">
      
      <div className="  items-center flex gap-4">

     <div className='flex flex-col items-center gap-6'>
  <IoIosArrowUp size={20} />
  {[1, 2, 3, 4, 5].map((item, index) => (
    <div
      key={item}
      onClick={() => setActiveMeter(index)} // active state uchun index ishlatamiz
      className={`cursor-pointer rounded-md ${
        activeMeter === index ? 'border border-[#27272766]' : ''
      }`}
    >
      <Image src={'/sec.png'} width={64} height={64} alt='sec'/>
    </div>
  ))}
  <IoIosArrowDown size={20} />
</div>  

        <div className=" flex-1">
          <Image
            src="/sec.png"
            alt="product"
            width={500}
            height={400}
            className="rounded-xl"
          />
        </div>
      </div>
      <div>
        <div className="flex mt-[5  0px] justify-between text-sm text-gray-400 mb-2">
          <span>LC1-C5E04-111-100</span>
          <span>В наличии &gt; 12 шт.</span>
        </div>

        <div className="text-[28px] font-medium text-[#C3974C] mb-6">
          65,70 ₽ / м
        </div>

        <div className="mb-6">
          <p className="mb-3 font-medium">Метраж</p>
          <div className="flex gap-3">
            {METERS.map(m => (
              <button
                key={m}
                onClick={() => setActiveMeter(m)}
                className={`w-[94px] h-[44px] rounded-[8px] border 
                  ${activeMeter === m
                  ? 'bg-[linear-gradient(119.47deg,#D8C19A_20.35%,#C3974C_94.16%)] border-none '
                  : 'border-gray-300 text-gray-400'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center border border-[1px] border-[#27272766] rounded-xl overflow-hidden">
            <button
              onClick={() => setCount(prev => Math.max(1, prev - 1))}
              className="px-5 py-3 text-xl"
            >
              −
            </button>
            <span className="px-6">{count}</span>
            <button
              onClick={() => setCount(prev => prev + 1)}
              className="px-5 py-3 text-xl"
            >
              +
            </button>
          </div>

          <div className="text-[22px] font-medium text-[#C3974C]">
            {totalPrice.toLocaleString()} ₽
          </div>
        </div>

        <button
          className="bg-[linear-gradient(119.47deg,#D8C19A_20.35%,#C3974C_94.16%)] w-[418px] h-[68px] rounded-[16px]  font-medium"
        
        >
          В корзину
        </button>

        <div className="">
          <p className='flex justify-between font-normal mt-[24px] text-[18px] leading-[120%] tracking-[-1%]'> Характеристики </p>
          <p className='flex justify-between font-normal mt-[16px] text-[14px] leading-[120%] tracking-[-1%] text-[#272727]'>Производитель <h2>ITK</h2></p>
          <p className='flex justify-between font-normal mt-[12px] text-[14px] leading-[120%] tracking-[-1%] text-[#272727]'>Страна-производитель <h2>Китай</h2></p>
          <p className='flex justify-between font-normal mt-[12px] text-[14px] leading-[120%] tracking-[-1%] text-[#272727]'>Количество жил<h2>4</h2></p>
          <p className='flex justify-between font-normal mt-[12px] text-[14px] leading-[120%] tracking-[-1%] text-[#272727]'>Материал проводника<h2>Медь</h2></p>
        </div>
      </div>
    </div>
  )
}
