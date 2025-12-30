'use client';
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import GlassButton1 from '@/components/ui/GlassButton1';
import Button from '@/components/ui/Buttom';

export default function LeftPanel({ step = 0, setStep }) {
  const [activeBtn, setActiveBtn] = useState(step);
  const [isOpen, setIsOpen] = useState(true);
  const buttons = ['Личные данные', 'Корзина', 'Избранное', 'Мои заказы', 'Настройки'];

  // Panel animatsiyasi
  const panelVariants = {
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 30,
        mass: 0.7,
        when: 'beforeChildren',
        staggerChildren: 0.05,
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 35,
        when: 'afterChildren',
      },
    },
  };

  const buttonVariants = {
    open: { y: 0, opacity: 1 },
    closed: { y: -10, opacity: 0 },
  };

  return (
    <div className="p-[32px] mt-[76px] shadow-[0_0_4px_0_#76767626] rounded-[12px] w-[330px]">
      {/* Panel header */}
      <div
        className="flex items-center justify-between cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="font-normal text-[16px] leading-[100%] tracking-[-1%]">
          Мой профиль
        </h2>
        <motion.div
          animate={{ rotate: isOpen ? 0 : 180 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <IoIosArrowDown size={20} />
        </motion.div>
      </div>

      {/* Panel content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="flex flex-col gap-[22px] mt-[16px] overflow-hidden"
          >
            {buttons.map((btn, idx) => (
              <motion.div key={btn} variants={buttonVariants}>
                <GlassButton1
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
              </motion.div>
            ))}

            {/* Exit button */}
            <motion.div variants={buttonVariants}>
              <Button
                text={'Выйти'}
                className="w-[254px] h-[62px] flex justify-start px-6 border-[0.5px] border-[#D92727] font-normal text-[16px] leading-[100%] tracking-[-0.02em] text-[#D9272799]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
