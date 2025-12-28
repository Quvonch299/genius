'use client'
import { useState } from "react";

const categories = [
  "Кабель силовой",
  "Интернет кабель",
  "Кабели контроля (контрольные)",
  "Телевизионный кабель",
  "Кабель гибкий",
  "Для охранно-пожарной сигнализации",
  "Круглый кабель",
  "Кабель бронированный",
  "Кабель сварочный",
];

export default function CableCategories() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((item, index) => (
        <button
          key={index}
          onClick={() => setActive(index)}
          className={`px-5 py-2 rounded-[12px] border text-sm transition-all
            ${
              active == index
                ? "bg-[linear-gradient(119.47deg,#D8C19A_20.35%,#C3974C_94.16%)]  border-[#E6C38B]"
                : "bg-white text-gray-500 border-gray-200 hover:border-[#E6C38B]"
            }
          `}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
