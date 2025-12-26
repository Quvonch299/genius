"use client"
import React from 'react'
import Image from 'next/image'

export default function BuildCableMobile() {
  return (
    <section className="max-w-sm mx-auto px-4 py-6">
      <div className="text-sm text-[#27272799] mb-2">Продукция</div>
      <h3 className="text-[20px] leading-tight font-normal text-[#111827] mb-4">Кабельно-проводниковые изделия для любых задач</h3>

      <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="flex items-start gap-4 p-4">
          <div className="flex-1">
            <h4 className="text-sm font-medium text-[#111827]">Силовые кабели</h4>
            <p className="text-xs text-[#6B6B6B] mt-2">Кабели для энергетических систем и промышленного оборудования с высокой надёжностью и износостойкостью</p>

            <button className="mt-4 w-full bg-[#F3F4F6] text-[#9CA3AF] h-10 rounded-md text-sm flex items-center justify-center" disabled>
              Перейти в каталог
            </button>
          </div>

          <div className="w-[98px] h-[98px] rounded-lg overflow-hidden bg-gray-50 flex-shrink-0">
            <Image src="/cable-thumb.png" alt="cable" width={98} height={98} className="object-cover" />
          </div>
        </div>
      </article>

      <div className="flex items-center justify-center gap-3 mt-4">
        <div className="w-2 h-2 rounded-full bg-[#E5E7EB]"></div>
        <div className="w-3 h-3 rounded-full bg-[#C3974C]"></div>
        <button aria-label="next" className="ml-2 w-8 h-8 flex items-center justify-center bg-[#C3974C] text-white rounded-full">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </section>
  )
}
