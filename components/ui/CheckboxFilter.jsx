"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function DropdownCheckboxFilter({ title, options, onChange }) {
  const [selected, setSelected] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (value) => {
    const updated = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];

    setSelected(updated);
    onChange?.(updated);
  };

  return (
    <div className="w-[317px] rounded-md border border-gray-300 bg-white">
      {/* Header */}
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-normal text-[18px] leading-[24px] tracking-[-0.02em]">{title}</h3>
        {isOpen ? <AiOutlineMinus size={20} /> : <AiOutlinePlus size={20} />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden px-4 pb-4"
          >
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {options.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-3 font-medium text-[16px] leading-[18px] tracking-[0em] cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selected.includes(option.value)}
                    onChange={() => toggleOption(option.value)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
