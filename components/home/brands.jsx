'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import { LiaArrowLeftSolid, LiaArrowRightSolid } from "react-icons/lia";

export default function Brands() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -227,  
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 227,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-16">
      <div className=" flex items-center justify-between">
        <button
          onClick={scrollLeft}
          className="hidden md:flex h-12 w-12 justify-center items-center rounded-full bg-gray-400 hover:bg-gray-500 z-10 "
          aria-label="Oldingi brendlar"
        >
          <LiaArrowLeftSolid size={28} className="text-white" />
        </button>
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory "
        >
          <div className="w-[203px] h-[127px] flex justify-center items-center rounded-[16px] bg-gradient-to-br from-[#D8C19A] to-[#C3974C] flex-shrink-0 snap-center">
            <Image src="/sec4.png" height={32.25} width={73.5} alt="Brand 1" />
          </div>
          <div className="w-[203px] h-[127px] flex justify-center items-center rounded-[16px] bg-[#DDDDDD] flex-shrink-0 snap-center">
            <Image src="/sec5.png" height={39} width={126.75} alt="Brand 2" />
          </div>
          <div className="w-[203px] h-[127px] flex justify-center items-center rounded-[16px] bg-[#DDDDDD] flex-shrink-0 snap-center">
            <Image src="/sec6.png" height={27} width={119.25} alt="Brand 3" />
          </div>
          <div className="w-[203px] h-[127px] flex justify-center items-center rounded-[16px] bg-[#DDDDDD] flex-shrink-0 snap-center">
            <Image src="/sec7.png" height={24} width={130.5} alt="Brand 4" />
          </div>
          <div className="w-[203px] h-[127px] flex justify-center items-center rounded-[16px] bg-[#DDDDDD] flex-shrink-0 snap-center">
            <Image src="/sec8.png" height={18} width={155.25} alt="Brand 5" />
          </div>
        </div>
        <button
          onClick={scrollRight}
          className="hidden md:flex h-12 w-12 justify-center items-center rounded-full bg-gradient-to-br from-[#D8C19A] to-[#C3974C] hover:opacity-90  z-10  "
          aria-label="Keyingi brendlar"
        >
          <LiaArrowRightSolid size={28} className="text-white" />
        </button>
      </div>
      <div className="flex justify-center gap-[16px] mt-4 md:hidden">
        <button
          onClick={scrollLeft}
          className="h-12 w-12 flex justify-center items-center rounded-full bg-gray-400 hover:bg-gray-500"
          aria-label="Oldingi brendlar"
        >
          <LiaArrowLeftSolid size={28} className="text-white" />
        </button>
        <button
          onClick={scrollRight}
          className="h-12 w-12 flex justify-center items-center rounded-full bg-gradient-to-br from-[#D8C19A] to-[#C3974C] hover:opacity-90 transition-opacity"
          aria-label="Keyingi brendlar"
        >
          <LiaArrowRightSolid size={28} className="text-white" />
        </button>
      </div>
    </div>
  );
}
