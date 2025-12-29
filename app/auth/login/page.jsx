'use client'
import Button from '@/components/ui/Buttom';
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link';
import React, { useState } from 'react'

export default function Login() {
      const [showPassword, setShowPassword] = useState(false);
      const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className='max-w-[581px] m-auto'>
        <h2 className='mb-[32px] mt-[177px] font-semibold text-[32px] leading-[48px] tracking-[-0.04em]'>Вход</h2>
         <div className=" mb-[16px]">
          <input
            
            placeholder="Повторите пароль"
            className="w-full px-6 h-[66px] pr-14 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-700 rounded-xl outline-none"
          />
      
        </div>
         <div className="relative mb-[24px]">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Повторите пароль"
            className="w-full px-6 h-[66px] pr-14 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-700 rounded-xl outline-none"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <div className='flex mb-[32px] justify-between'>
<p className='font-normal text-[16px] leading-[120%] tracking-[-0.02em] align-middle text-[#27272799]'>У вас еще нет аккаунта?</p>
<Link href={'/auth/registration'} className="font-inter hover:underline hover:text-[black] cursor-pointer font-normal text-[16px] leading-[120%] tracking-[-0.02em] align-middle bg-gradient-to-r from-[#D8C19A] via-[#D8C19A] to-[#C3974C] bg-clip-text text-transparent">
  Зарегистрироваться
</Link>
        </div>
              <Button text={'Войти'} className={`w-[581px] h-[66px] rounded-[12px] bg-[linear-gradient(119.47deg,#D8C19A_20.35%,#C3974C_94.16%)]`}/>

    </div>
  )
}
