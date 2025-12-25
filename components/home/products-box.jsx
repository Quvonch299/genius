import React from 'react';
import Product from '../ui/Product';

export default function ProductsBox() {
  return (
    <section className="mt-[100px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-12">
          <div className="text-center sm:text-left">
            <p className="text-[18px] font-normal leading-tight tracking-[-0.04em] text-[#27272799]">
              Наши товары
            </p>
          </div>
            <h2 className="mt-2 text-[28px] sm:text-[32px] font-normal leading-[1.3] tracking-[-0.04em] text-[#272727]">
              Новые поступления
            </h2>
          <button className="flex items-center justify-center gap-2 w-full sm:w-auto min-w-[180px] h-[42px] rounded-[12px] bg-[#DDDDDD] hover:bg-[#D0D0D0] transition">
            <span className="text-[16px] font-medium">Посмотреть все</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 13.5L13.5 4.5" stroke="#272727" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4.19995 4.19995H13.8V13.8" stroke="#272727" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </section>
  );
}