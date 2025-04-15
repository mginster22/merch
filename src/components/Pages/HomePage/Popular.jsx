import React from "react";
import { Link } from "react-router";

const Popular = () => {
  return (
    <div className="bg-[url('/images/rect.svg')] pt-[40px] pb-[30px] bg-cover">
        
      <div className="px-[40px]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex relative">
              <h3 className="text-[40px]">Самое популярное</h3>
              <div className="absolute right-[40px] bottom-[25px]">
                <img src="/images/Vector.png" className="" />
              </div>
            </div>
            <p className="font-gilroy-thin">
              Товары, которые наиболее часто заказывают наши клиенты
            </p>
          </div>
          <div className="flex items-center gap-[20px]">
            <Link to="/vsetovaru" className="font-gilroy-thin">
              Все товары
            </Link>
            <img src="/images/arrow1.png" />
          </div>
        </div>
        <div className="flex gap-[6px]">
          <div className="flex flex-col items-center">
            <img src="/images/card1.png" className="w-[1000px]  h-[565px] object-cover rounded-[10px]" />
            <p>Шопперы</p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <img src="/images/card2.png" className="w-[550px] h-[312px]" />
            <div className="flex gap-[6px]">
              <img src="/images/card3.png" className="w-[236px] h-[249px]" />
              <img src="/images/card4.png" className="w-[236px] h-[249px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
