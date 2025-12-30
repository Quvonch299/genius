"use client";

import {  useState } from "react";
import { MagnifyingGlassIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence,motion } from "framer-motion";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [catalogOpen, setCatalogOpen] = useState(false); // dropdown holati
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-[43px] hidden lg:block">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex-shrink-0">
            <Image src="/icon/nabarlogo.svg" width={83} height={59} alt="Genius Electro" />
          </div>
          <div className="flex items-center gap-[24px]">
            <Link href="/" className="text-black font-medium">
              Главная
            </Link>
            <Link href="/about" className="text-[#27272799]">
              О нас
            </Link>
            <div className="relative">
      <Link href={'/catalog'}
        className="flex items-center gap-1 text-[#27272799] hover:text-black transition-colors duration-200 focus:outline-none"
      >
        Каталог
        <ChevronDownIcon
        onClick={() => setCatalogOpen(!catalogOpen)}
          className={`w-4 h-4 transition-transform duration-200 ${catalogOpen ? "rotate-180" : ""}`}
        />
      </Link>

      <AnimatePresence>
        {catalogOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50"
            
          >
            <div className="py-4 px-2">
              <Link
              onClick={() => setCatalogOpen(false)}
                href="/catalog-details"
                className="block py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Кабель и провод
              </Link>
              <Link
                href="/catalog-details2"
                className="block py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Другое
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

            <Link href={'/reviews'} className="text-[#27272799]">
              Отзывы
            </Link>
            <Link href={'/dastavca'} className="text-[#27272799]">
              Доставка и оплата
            </Link>
            <Link href={'/cantact'} className="text-[#27272799]">
              Контакты
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Найдите все, что вам нужно"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-[328px] h-[47px] pl-[18px] pr-12 text-base placeholder:text-[#B89B72] bg-gradient-to-br from-[#FDF9F2] to-[#F5EDE2] rounded-[12px] focus:outline-none"
                style={{
                  border: "1px solid transparent",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                  backgroundImage:
                    "linear-gradient(#FDF9F2, #F5EDE2), linear-gradient(119.47deg, #D8C19A 20.35%, #C3974C 94.16%)",
                }}
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-gradient-to-br from-[#D8C19A] to-[#C3974C] rounded-lg w-9 h-9 flex items-center justify-center">
                <MagnifyingGlassIcon className="w-5 h-5 text-white" />
              </div>
            </div>
            <div  className="w-[47px] h-[47px] bg-gradient-to-br from-[#D8C19A] to-[#C3974C] rounded-[12px] flex items-center justify-center cursor-pointer">
              <Image src="/icon/navbaricon1.svg" width={18} height={18} alt="Favorites" />
            </div>
            <div className="w-[47px] h-[47px] bg-gradient-to-br from-[#D8C19A] to-[#C3974C] rounded-[12px] flex items-center justify-center cursor-pointer">
              <Image src="/icon/navbaricon2.svg" width={18} height={18} alt="Cart" />
            </div>
            <Link href={'/auth/login'}>

            <button className="w-[129px] text-[#272727] h-[47px] bg-gradient-to-br from-[#D8C19A] to-[#C3974C] rounded-[12px] font-normal text-[14px] hover:opacity-90 transition">
              Вход
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}