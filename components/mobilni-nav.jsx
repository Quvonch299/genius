"use client";

import { useState } from "react";
import { XMarkIcon, Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="lg:hidden   ">
        <div className="flex justify-between items-center py-[24px]  px-[14px]">
          <Image src="/icon/nabarlogo.svg" width={70} height={50} alt="Genius Electro" />
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#C3974C]">
            {isOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsOpen(false)}>
          <div
            className="bg-white "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col min-h-screen">
              {/* Header inside menu */}
              <div className="flex justify-between items-center px-6 py-6 border-b">
                <Image src="/icon/nabarlogo.svg" width={80} height={55} alt="Logo" />
                <button onClick={() => setIsOpen(false)}>
                  <XMarkIcon className="w-8 h-8 text-gray-600" />
                </button>
              </div>
              <div className=" px-[14px]">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Найдите все, что вам нужно"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-[342px] h-[47px] px-4 pr-12 text-[14px] placeholder:text-[#B89B72] bg-gradient-to-br from-[#FDF9F2] to-[#F5EDE2] rounded-[12px]"
                    style={{
                      backgroundImage: "linear-gradient(#FDF9F2, #F5EDE2), linear-gradient(119.47deg, #D8C19A 20.35%, #C3974C 94.16%)",
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                      border: "1px solid transparent",
                    }}
                  />
                  <div className="absolute right-1 top-[7px] bg-gradient-to-br from-[#D8C19A] to-[#C3974C] rounded-lg w-8.25 h-8.25 flex items-center justify-center">
                    <MagnifyingGlassIcon className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Menu Sections */}
              <div className=" px-[14px] space-y-8 flex-1">
                {/* Продукция */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Продукция</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>Силовые кабели</li>
                    <li>Контрольные кабели</li>
                    <li>Специализированные кабели</li>
                    <li>Кабели для энергетики</li>
                    <li>Транспортные кабели</li>
                    <li>Строительные кабели</li>
                  </ul>
                </div>

                {/* Компания */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Компания</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>О нас</li>
                    <li>Отзывы</li>
                    <li>Контакты</li>
                  </ul>
                </div>

                {/* Социальные сети */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Социальные сети</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>ВКонтакте</li>
                    <li>WhatsApp*</li>
                    <li>Instagram*</li>
                  </ul>
                </div>
              </div>

              {/* Footer Contacts */}
              <div className="py-8 border-t space-y-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Телефон</p>
                  <p className="font-semibold">+7 845 434-43-43</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Почта поддержки:</p>
                  <p className="font-semibold">info@geniuselectro.ru</p>
                </div>
                <p className="text-xs text-gray-400 text-center pt-4">
                  © 2025 Гениус Электро. Все права защищены.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}