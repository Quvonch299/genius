import React from 'react';
import Button from '../ui/Buttom';

const ContactCard = () => {
  return (
    <div className=" max-w-7xl flex gap-[48px] mt-[64px] m-auto">
      <div className=" w-[475px]">
        <h2 className="font-normal text-[32px] leading-[120%] tracking-[-0.01em] mb-[32px]">Офис</h2>
        <div className="mb-6">
          <p className="font-normal text-[16px] leading-[18px] tracking-[0] text-[#272727] mb-[16px]">Находится по адресу:</p>
          <p className="font-normal text-[20px] leading-[130%] tracking-[0] mb-[32px]">
            196006, г. Санкт-Петербург, ул. Новорощинская д. 4, оф. 403-1
          </p>
        </div>
        <div className="grid grid-cols-2 mb-[32px]">
          <div>
            <p className="font-normal text-[16px] leading-[18px] tracking-[0] text-gray-600 mb-[16px]">Телефон:</p>
            <a
              href="tel:+79454344343"
              className="font-normal text-[20px] leading-[130%] tracking-[0]"
            >
              +7 (945) 434-43-43
            </a>
          </div>
          <div>
            <p className="font-normal text-[16px] leading-[18px] tracking-[0] text-gray-600 mb-[16px]">E-mail:</p>
            <a
              href="mailto:info@geniusselectro.ru"
              className="font-normal text-[20px] leading-[130%] tracking-[0] "
            >
              info@geniusselectro.ru
            </a>
          </div>
        </div>
        <div className="flex justify-between  ">
<div>
          <h2 className="font-normal text-[16px] leading-[18px] tracking-[0] text-[#272727] mb-[12px] ">Режим работы:</h2>
          <p className="font-normal text-[20px] leading-[130%] tracking-[0] ">Пн - Пт: 9.00 - 18.00</p>
          <p className="font-normal text-[20px] leading-[130%] tracking-[0] ">Сб - Вс: Выходные</p>
</div>
<Button className={`bg-[linear-gradient(119.47deg,#D8C19A_20.35%,#C3974C_94.16%)] w-[230px] h-[61px]`} text={'Заказать звонок'}/>
        </div>
      </div>
      <div className=' rounded-[16px] overflow-hidden w-[817px] '>
  <iframe
      src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d25215.773210401363!2d64.62409127280725!3d40.23793602581625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e2!4m3!3m2!1d40.2694784!2d64.6856316!4m3!3m2!1d40.1866485!2d64.70485769999999!5e1!3m2!1suz!2s!4v1766989847104!5m2!1suz!2s"
      width="817"
      height="366"
     
    />
      </div>
    </div>
  );
};

export default ContactCard;