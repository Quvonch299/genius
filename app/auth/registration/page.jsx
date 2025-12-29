'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Button from '@/components/ui/Buttom';

export default function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className=' max-w-[581px] mx-auto'>
        <h2 className='mb-[48px] mt-[79px] font-semibold text-[32px] leading-[48px] tracking-[-0.04em]'>Регистрация</h2>
    <div className=" ">
      <form className="space-y-[16px]">
        <div className="grid grid-cols-2 gap-[16px]">
          <div>
            <input
              type="text"
              placeholder="Ваше имя"
              className="w-[282px] px-6 h-[66px]  text-gray-900 placeholder-gray-500 bg-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Ваша фамилия"
              className="w-[282px] px-6 h-[66px] text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[16px]">
          <div>
            <input
              type="tel"
              placeholder="Номер телефона"
              className="w-full px-6 h-[66px] text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-6 h-[66px] text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            />
          </div>
        </div>
        <p className="font-normal text-[12px] leading-[14px] tracking-[0%] text-end">
          На почту придет код для подтверждения
        </p>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Введите пароль"
            className="w-full px-6 h-[66px] pr-14 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <div className="relative">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Повторите пароль"
            className="w-full px-6 h-[66px] pr-14 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <div className='flex gap-[16px]'>
            <input className='w-[30px] h-[30px]' type="checkbox" name="" id=""/>
            <p className='font-normal text-[12px] leading-[100%] tracking-[0%]'>Входя в аккаунт или создавая новый, вы соглашаетесь с нашими Правилами и условиями и Положением о конфиденциальности</p>
        </div>

      <Button text={'Зарегистрироваться'} className={`w-[581px] h-[66px] rounded-[12px] bg-[linear-gradient(119.47deg,#D8C19A_20.35%,#C3974C_94.16%)]`}/>
      </form>
    </div>
    </div>
  );
}