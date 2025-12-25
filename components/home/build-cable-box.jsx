import React from 'react'
import BuildingCableCard from '../ui/BuildingCableCard'

export default function BuildCableBox() {
  return (
    <div>
      <div className='flex justify-between items-center mt-[100px] mb-[48px] max-w-7xl m-auto'>
        <h2 className='text-lg text-[#27272799] leading-none tracking-minus-4 font-normal'>Продукция</h2>
        <p className='font-normal text-3xl max-w-[517px] leading-tight tracking-minus-4'>Кабельно-проводниковые изделия для любых задач</p>
        <div></div>
      </div>
        <div className='max-w-7xl m-auto grid grid-cols-3 gap-[24px]'> 
        <BuildingCableCard />
        <BuildingCableCard />
        <BuildingCableCard />
        <BuildingCableCard />
        <BuildingCableCard />
        <BuildingCableCard />
        </div>
    </div>
  )
}
