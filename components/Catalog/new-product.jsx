import React from 'react'

export default function NewProduct() {
  return (
    <div className=' max-w-7xl mx-auto'>
         <div className=" mt-[100px]">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-12">
          <div className="text-center sm:text-left">
            <p className="font-normal text-[32px] leading-[42px] tracking-[-0.04em]  ">
          Новые поступления
            </p>
          </div>
           
          <button className="flex items-center justify-center gap-2 w-full sm:w-auto min-w-[180px] h-[42px] rounded-[12px] bg-[#DDDDDD] hover:bg-[#D0D0D0] transition">
            <span className="text-[16px] font-medium">Посмотреть все</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 13.5L13.5 4.5" stroke="#272727" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4.19995 4.19995H13.8V13.8" stroke="#272727" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
