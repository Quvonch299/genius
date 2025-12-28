"use client"

import React, { useState } from 'react'
import CheckboxFilter from '../ui/CheckboxFilter'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Buttom';

export default function LeftPanel() {
    const [open, setOpen] = useState(true);
  return (
    <div>
      <div className='  items-center flex justify-between px-[18px] w-[317px] h-[56px] rounded-[10px]  border border-[#27272733]'>
<h2 className="font-inter text-[20px] font-normal leading-[20px] tracking-[-0.02em]">Фильтры</h2>
<p className="font-inter text-[16px] font-normal leading-[18px] tracking-[0em] text-[#27272799]">Сбросить</p>
      </div>
      <div className='mt-[12px] gap-[12px] grid grid-cols-1`'>
 <CheckboxFilter
        title="Производитель"
        options={[
          { label: "IEK", value: "iek" },
          { label: "Конкорд", value: "konkord" },
          { label: "Rexant", value: "rexant" },
          { label: "Cavel", value: "cavel" },
          { label: "KBT", value: "kbt" },
        ]}
        onChange={(selected) => {
          console.log("Tanlanganlar:", selected);
        }}
      />
 <CheckboxFilter
        title="Сечение кабеля, мм2"
        options={[
          { label: "IEK", value: "iek" },
          { label: "Конкорд", value: "konkord" },
          { label: "Rexant", value: "rexant" },
          { label: "Cavel", value: "cavel" },
          { label: "KBT", value: "kbt" },
        ]}
        onChange={(selected) => {
          console.log("Tanlanganlar:", selected);
        }}
      />
 <CheckboxFilter
        title="Количество жил"
        options={[
          { label: "IEK", value: "iek" },
          { label: "Конкорд", value: "konkord" },
          { label: "Rexant", value: "rexant" },
          { label: "Cavel", value: "cavel" },
          { label: "KBT", value: "kbt" },
        ]}
        onChange={(selected) => {
          console.log("Tanlanganlar:", selected);
        }}
      />
 <CheckboxFilter
        title="Материал проводника"
        options={[
          { label: "IEK", value: "iek" },
          { label: "Конкорд", value: "konkord" },
          { label: "Rexant", value: "rexant" },
          { label: "Cavel", value: "cavel" },
          { label: "KBT", value: "kbt" },
        ]}
        onChange={(selected) => {
          console.log("Tanlanganlar:", selected);
        }}
      />
 <CheckboxFilter
        title="Материал внешней
изоляции"
        options={[
          { label: "IEK", value: "iek" },
          { label: "Конкорд", value: "konkord" },
          { label: "Rexant", value: "rexant" },
          { label: "Cavel", value: "cavel" },
          { label: "KBT", value: "kbt" },
        ]}
        onChange={(selected) => {
          console.log("Tanlanganlar:", selected);
        }}
      />
 <CheckboxFilter
        title="Материал изоляции
проводника"
        options={[
          { label: "IEK", value: "iek" },
          { label: "Конкорд", value: "konkord" },
          { label: "Rexant", value: "rexant" },
          { label: "Cavel", value: "cavel" },
          { label: "KBT", value: "kbt" },
        ]}
        onChange={(selected) => {
          console.log("Tanlanganlar:", selected);
        }}
      />
 <CheckboxFilter
        title="Общая длина"
        options={[
          { label: "IEK", value: "iek" },
          { label: "Конкорд", value: "konkord" },
          { label: "Rexant", value: "rexant" },
          { label: "Cavel", value: "cavel" },
          { label: "KBT", value: "kbt" },
        ]}
        onChange={(selected) => {
          console.log("Tanlanganlar:", selected);
        }}
      />
 <CheckboxFilter
        title="Материал внешней
оболочки"
        options={[
          { label: "IEK", value: "iek" },
          { label: "Конкорд", value: "konkord" },
          { label: "Rexant", value: "rexant" },
          { label: "Cavel", value: "cavel" },
          { label: "KBT", value: "kbt" },
        ]}
        onChange={(selected) => {
          console.log("Tanlanganlar:", selected);
        }}
      />
 <CheckboxFilter
        title="Модель/исполнение"
        options={[
          { label: "IEK", value: "iek" },
          { label: "Конкорд", value: "konkord" },
          { label: "Rexant", value: "rexant" },
          { label: "Cavel", value: "cavel" },
          { label: "KBT", value: "kbt" },
        ]}
        onChange={(selected) => {
          console.log("Tanlanganlar:", selected);
        }}
      />
 <CheckboxFilter
        title="Цвет"
        options={[
          { label: "IEK", value: "iek" },
          { label: "Конкорд", value: "konkord" },
          { label: "Rexant", value: "rexant" },
          { label: "Cavel", value: "cavel" },
          { label: "KBT", value: "kbt" },
        ]}
        onChange={(selected) => {
          console.log("Tanlanganlar:", selected);
        }}
      />
 <CheckboxFilter
        title="Длина"
        options={[
          { label: "IEK", value: "iek" },
          { label: "Конкорд", value: "konkord" },
          { label: "Rexant", value: "rexant" },
          { label: "Cavel", value: "cavel" },
          { label: "KBT", value: "kbt" },
        ]}
        onChange={(selected) => {
          console.log("Tanlanganlar:", selected);
        }}
      />
 <CheckboxFilter
        title="Тип изделия"
        options={[
          { label: "IEK", value: "iek" },
          { label: "Конкорд", value: "konkord" },
          { label: "Rexant", value: "rexant" },
          { label: "Cavel", value: "cavel" },
          { label: "KBT", value: "kbt" },
        ]}
        onChange={(selected) => {
          console.log("Tanlanganlar:", selected);
        }}
      />
 <CheckboxFilter
        title="Тип товара"
        options={[
          { label: "IEK", value: "iek" },
          { label: "Конкорд", value: "konkord" },
          { label: "Rexant", value: "rexant" },
          { label: "Cavel", value: "cavel" },
          { label: "KBT", value: "kbt" },
        ]}
        onChange={(selected) => {
          console.log("Tanlanganlar:", selected);
        }}
      />

      </div>
        <div className="w-[317px] rounded-md border border-gray-300 py-4 mt-[12px] px-4 bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors"
      >
        <span>Цена</span>
        <motion.span
          variants={{
            open: { rotate: 0 },
            closed: { rotate: -90 },
          }}
          initial={false}
          animate={open ? 'open' : 'closed'}
          transition={{ duration: 0.3 }}
        >
          {open ? <AiOutlineMinus size={20} /> : <AiOutlinePlus size={20} />}
        </motion.span>
      </button>

      {/* Animatsiyali content */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden mt-4"
          >
            <div className="pt-2">
              {/* Slider (hozircha bitta tutqichli, keyin dual qilish mumkin) */}
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="300000"
                  step="1000"
                  defaultValue="150000"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                />
              </div>

              {/* Narx diapazoni matni */}
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="mt-4 text-center text-sm text-gray-500"
              >
                0 ₽ - 300 000 ₽
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    <div className="w-[317px] mt-[12px]  ">
      <div className="bg-white p-[24px] rounded-2xl shadow">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1468&q=80"
            alt="Электрик провода режет"
            className="w-[269px] h-[79px] object-cover rounded-2xl"
          />
        </div>
        <div className="">
          <h3 className="text-xl font-semibold text-[#272727] mb-2 mt-[16px]">
            Про оформление заказа:
          </h3>
          <p className="font-normal text-sm leading-4 tracking-[-0.02em]">
           Перед добавлением товара в корзину, вам нужно зарегистрироваться на нашем сайте, чтобы оформить заказ
          </p>
        </div>
      </div>
      <Button className={'w-[317px] h-[50px] bg-[linear-gradient(119.47deg,#D8C19A_20.35%,#C3974C_94.16%)]'} text={'Зарегистрироваться'}/>
    </div>
    </div>
  )
}
