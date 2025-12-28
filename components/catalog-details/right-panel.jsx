'use client'
import React, { useState } from 'react'
import CableCategories from './CableCategories'
import Product from '../ui/Product'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Button from '../ui/Buttom';


export default function RightPanel() {
  const [popularOpen, setPopularOpen] = useState(false);
  const [perPageOpen, setPerPageOpen] = useState(false);
  return (
    <div className=''>
      <CableCategories/>
      <div className=" flex gap-[48px] mt-[32px]">
        <div className='flex  gap-[16px]'>
      <div className="relative">
        <button
          onClick={() => setPopularOpen(!popularOpen)}
          className="flex items-center justify-between w-[249px] h-[61px] px-5 py-3 text-base text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition"
        >
          Популярное
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {popularOpen && (
          <div className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200">
            <ul className="py-2">
              <li className="px-5 py-2 hover:bg-gray-100 cursor-pointer">Популярное</li>
              <li className="px-5 py-2 hover:bg-gray-100 cursor-pointer">Новинки</li>
              <li className="px-5 py-2 hover:bg-gray-100 cursor-pointer">Сначала дешевые</li>
            </ul>
          </div>
        )}
      </div>
      <div className="relative">
        <button
          onClick={() => setPerPageOpen(!perPageOpen)}
          className="flex items-center justify-between w-[265px] h-[61px] px-5 py-3 text-base text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition"
        >
          Показать по 24
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {perPageOpen && (
          <div className="absolute z-20 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200">
            <ul className="py-2">
              <li className="px-5 py-2 hover:bg-gray-100 cursor-pointer">Показать по 12</li>
              <li className="px-5 py-2 hover:bg-gray-100 cursor-pointer">Показать по 24</li>
              <li className="px-5 py-2 hover:bg-gray-100 cursor-pointer">Показать по 48</li>
            </ul>
          </div>
        )}
      </div>
        </div>
         <div className="relative">
            <input
              type="text"
              placeholder="Найдите все, что вам нужно"
              className="w-[421px] h-[61px] pl-[18px] pr-12 text-[18px] placeholder:text-[#B89B72] bg-gradient-to-br from-[#FDF9F2] to-[#F5EDE2] rounded-[12px] focus:outline-none"
              style={{
                border: "1px solid transparent",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                backgroundImage: "linear-gradient(#FDF9F2, #F5EDE2), linear-gradient(119.47deg, #D8C19A 20.35%, #C3974C 94.16%)",
              }}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-gradient-to-br from-[#D8C19A] to-[#C3974C] rounded-lg w-10.75 h-10.75 flex items-center justify-center">
              <MagnifyingGlassIcon className="w-3.75 h-3.75 text-white" />
            </div>
          </div>
    </div>
      <div className=' mt-[48px] grid grid-cols-3 gap-[24px]'>
   <Product/>
   <Product/>
   <Product/>
   <Product/>
   <Product/>
   <Product/>
   <Product/>
   <Product/>
   <Product/>
   <Product/>
   <Product/>
   <Product/>
      </div>
      <div className="flex justify-center">

      <Button className={`bg-[linear-gradient(119.47deg,#D8C19A_20.35%,#C3974C_94.16%)] rounded-[12px] w-[261px] h-[66px] mt-[32px]`} text={'Смотреть больше'}/>
      </div>

    </div>
  )
}
