import Image from "next/image";
import Button from "./Buttom";

export default function BuildingCableCard() {
  return (
    <div className=" rounded-[16px] h-[415px] bg-gradient-to-b from-transparent to-gray-100/80 ">
      <div className=" h-[180px] ">
       <Image className='-z-10' src={'/sec2.png'} height={306.495540307804} width={408.66073058293125} alt="1"/>
      </div>
      <div className="p-5">
        <h3 className="font-normal text-[24px] leading-[100%] tracking-[-0.04em] mb-2">
    Силовые кабели
        </h3>

        <p className=" font-normal text-[16px] leading-[130%] tracking-[-0.04em] mb-4">
      Кабели для энергетических систем
и промышленного оборудования с высокой надёжностью и износостойкостью
        </p>

      <Button
  className={`relative w-[367px] h-[52px] text-center bg-[#DDDDDD] text-[#272727] 
              transition-all duration-500 
              hover:bg-[linear-gradient(119.47deg,_#D8C19A_20.35%,_#C3974C_94.16%)]`}
  text={'Перейти в каталог'}
/>
      </div>
    </div>
  );
}
