'use client'
import { useState } from 'react'
import Image from 'next/image'
const METERS = [100, 200, 240, 320, 400]
const PRICE_PER_METER = 65.7
export default function IEkKabel() {
  const [activeMeter, setActiveMeter] = useState(100)
  const [count, setCount] = useState(4)

  const totalPrice = Math.round(activeMeter * PRICE_PER_METER * count)

  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-12">
      
      <div className="flex gap-4">
       <div></div>

        <div className="flex-1">
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
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>LC1-C5E04-111-100</span>
          <span>В наличии &gt; 12 шт.</span>
        </div>

        <div className="text-[28px] font-medium text-[#C3974C] mb-6">
          65,70 ₽ / м
        </div>

        {/* METERS */}
        <div className="mb-6">
          <p className="mb-3 font-medium">Метраж</p>
          <div className="flex gap-3">
            {METERS.map(m => (
              <button
                key={m}
                onClick={() => setActiveMeter(m)}
                className={`px-6 py-2 rounded-lg border transition
                ${activeMeter === m
                  ? 'bg-[#D8C19A] text-white border-transparent'
                  : 'border-gray-300 text-gray-400'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* COUNTER */}
        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center border rounded-xl overflow-hidden">
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

        {/* BUTTON */}
        <button
          className="w-full py-4 rounded-xl text-white font-medium"
          style={{
            background:
              'linear-gradient(119.47deg, #D8C19A 20.35%, #C3974C 94.16%)'
          }}
        >
          В корзину
        </button>

        {/* CHARACTERISTICS */}
        <div className="mt-8 text-sm text-gray-500 space-y-2">
          <p><span className="text-gray-400">Производитель:</span> ITK</p>
          <p><span className="text-gray-400">Страна-производитель:</span> Китай</p>
          <p><span className="text-gray-400">Количество жил:</span> 4</p>
          <p><span className="text-gray-400">Материал проводника:</span> Медь</p>
        </div>
      </div>
    </div>
  )
}
