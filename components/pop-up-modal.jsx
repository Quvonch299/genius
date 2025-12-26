'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { PiPaperclipThin } from "react-icons/pi";
import Button from './ui/Buttom';
import { motion } from 'framer-motion';

export default function PopUpModal({ setOpen }) {
  const [file, setFile] = useState(null);
  const fileInputRef = React.useRef(null);

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };
  return (
    // Backdrop
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => setOpen(false)}
    >
      <motion.div 
        className='bg-[#FFFFFF] flex gap-[48px] rounded-[32px]'
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div 
          className=""
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/modal.png"
            width={630}
            height={796}
            alt="modalimg"
            className="rounded-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className='flex justify-around mt-[48px] items-center'>
            <motion.h2 
              className='font-normal text-[32px] leading-[42px] tracking-[-0.04em]'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Оставить заявку
            </motion.h2>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={()=>setOpen(false)}
              className="cursor-pointer"
            >
              <IoCloseOutline size={32} />
            </motion.button>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
<input className=' px-[24px] outline-none w-[483px] mt-[32px] h-[67px] rounded-[12px] border-[1px] border-[#27272733] mr-[99px]' type="text" placeholder='Имя' name="" id=""/>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
<input className=' px-[24px] outline-none w-[483px] mt-[24px] h-[67px] rounded-[12px] border-[1px] border-[#27272733] mr-[99px]' type="text" placeholder='+7 (___) ___-__-__' name="" id=""/>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
<input className=' px-[24px] outline-none w-[483px] mt-[24px] h-[67px] rounded-[12px] border-[1px] border-[#27272733] mr-[99px]' type="text" placeholder='Email' name="" id=""/>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
<input className=' px-[24px] outline-none w-[483px] mt-[24px] h-[67px] rounded-[12px] border-[1px] border-[#27272733] mr-[99px]' type="text" placeholder='Комментарий' name="" id=""/>
          </motion.div>
          <motion.p 
            className='font-normal text-[18px] leading-[130%] tracking-[-0.04em] text-[#27272799] mt-[16px]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            Если у вас есть документы для подбора кабеля и расчёта <br/> стоимости, прикрепите файл к заявке
          </motion.p>
          <motion.span 
            className='flex w-[206px] h-[67px] border border-[#27272733] rounded-[12px] mt-[24px] flex justify-center items-center gap-[6px] cursor-pointer'
            whileHover={{ scale: 1.05, borderColor: '#D8C19A' }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            onClick={handleFileClick}
          >
          <PiPaperclipThin size={19} />
<p className='text-base leading-[1.2] tracking-[-0.02em] text-[#27272780] w-'>{file ? file.name : 'Прикрепить файл'}</p>
          </motion.span>
          <input 
            ref={fileInputRef}
            type="file" 
            onChange={handleFileSelect}
            className="hidden"
            accept=".pdf,.doc,.docx,.xls,.xlsx,.zip"
          />
          <motion.label 
            className="flex mt-[24px] items-center gap-3 cursor-pointer text-[#6B6B6B] text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
  <input type="checkbox" className="w-5 h-5 rounded border border-[#27272733] accent-black focus:ring-0"/>
  <span>Согласен с политикой конфиденциальности</span>
</motion.label>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button className={`w-[450px] h-[78px] bg-[linear-gradient(119.47deg,#D8C19A_20.35%,#C3974C_94.16%)] mt-[32px]`} text={'Оставить заявку'}/>
          </motion.div>
        </motion.div> 
      </motion.div>
    </motion.div>
  )
}
