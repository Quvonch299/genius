import React from 'react'
import RightPanel from './right-panel'
import LeftPanel from './left-panel'
import ContactConsultation from '../home/ContactConsultation'
import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className='max-w-7xl m-auto'>
      <nav className="flex mt-[50px]  items-center gap-2 text-sm text-[#27272799] mb-6">
        <Link href="/" className="hover:text-[#272727] ">
          Главная
        </Link>
-
        <Link href="/catalog" className="hover:text-[#272727] transition">
          Каталог
        </Link>
-
        <span className="text-[#272727]">Кабель и провод</span>
      </nav>
      <h1 className="font-normal mb-[48px] text-[48px] leading-[100%] tracking-[-0.04em]">
        Кабель и провод
      </h1>
        <div className=' flex gap-6'>
<div>
    <LeftPanel/>
</div>
<div>
    <RightPanel/>   
</div>
        </div>
              <div className='mt-[100px] mb-[100px]'>
        <ContactConsultation/>
      </div>
    </div>
  )
}
