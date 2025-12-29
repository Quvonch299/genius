'use client';
import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import Image from 'next/image';
import GlassButton1 from '@/components/ui/GlassButton1';

export default function LeftPanel({ step = 0, setStep }) {
  const [activeBtn, setActiveBtn] = useState(step); // step ni boshqarish uchun useState qo'shdik
  const buttons = ['Личные данные', 'Корзина', 'Избранное', 'Мои заказы', 'Настройки'];

  return (
    <div className="relative">
      <div className="flex flex-col gap-[22px] mt-[86px] pl-[38px]">
        {buttons.map((btn, idx) => (
          <GlassButton1
            key={btn}
            w="w-[330px]"
            h="h-[62px]"
            text={btn}
            textsize="text-[26px]"
            active={activeBtn === idx} 
            onClick={() => {
              setActiveBtn(idx); 
              setStep(idx); 
            }}
          />
        ))}
      </div>
    </div>
  );
}
