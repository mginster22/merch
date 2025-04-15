import React, { useState } from "react";
import cn from "classnames";

const info = [
  { title: "Высокое качество ", subtitle: "ONLY", img: "/images/circle.svg" },
  {
    title: "Поддержка менеджера ",
    subtitle: "24/7",
    img: "/images/circle.svg",
  },
  {
    title: "Выполнение заказа в ",
    subtitle: "turbo-режиме",
    img: "/images/circle.svg",
  },
];
const HeaderInfo = ({ title, text, quantity, image }) => {
  return (
    <div
      className={cn("wrapper mt-[40px] flex  max-lg:relative max-lg:px-[20px]")}
    >
      <div
        className={cn("w-[600px] flex flex-col  gap-[100px] max-lg:w-[800px]", {
          "w-[800px]": quantity,
        })}
      >
        <div className="">
          <h2 className="text-[50px] max-lg:leading-[1.1] max-lg:text-[60px]">
            {title}
          </h2>
          <p className="text-[#272525] font-[Gilroy_Thin] w-[490px] max-lg:w-[600px] max-lg:mt-[20px]">
            {text}
          </p>
        </div>
        {quantity ? (
          <div
            className={cn(
              "flex items-center gap-[70px] max-lg:pb-[30px] max-lg:-translate-y-[60px]"
            )}
          >
            <button
              className={cn(
                "border-none bg-[#3C336C] rounded-[4rem] w-[250px] py-[20px] cursor-pointer z-50 ",
                
                {
                  "text-black bg-transparent  -translate-y-[50px] flex items-center gap-[15px] font-gilroy-thin z-50 ": !quantity.buttonClass,
                  "text-white":quantity.buttonClass
                }
              )}
            >
              {quantity.button}{!quantity.buttonClass&&<img src="/images/arrow2.png"/>}
            </button>
            <p className="">{quantity.text}</p>
          </div>
        ) : (
          <div className="flex items-center -translate-x-8 max-lg:-translate-y-[60px] max-lg:translate-x-0 pb-[100px] max-lg:pb-0">
            {info.map((item) => (
              <div className="flex flex-col items-center w-[230px] max-lg:w-[140px]">
                <div className="">
                  <img src={item.img} className="w-[120px] max-lg:w-[80px]" />
                </div>
                <p className="w-[170px] text-center h-[60px] max-lg:w-[120px] max-lg:text-[12px] ">
                  {item.title}
                  <span className="font-bold text-[20px] max-lg:text-[15px]">
                    {item.subtitle}
                  </span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        className={cn(
          "max-lg:absolute max-lg:right-0  border-t-[1px] border-l-[1px] border-r-[1px] max-lg:border-none max-lg:w-[600px]",
          {
            "border-none -translate-y-[100px] max-lg:translate-x-0 max-lg:translate-y-0 max-lg:max-w-[430px] ":
              quantity,
          }
        )}
      >
        <img
          src={image}
          className={cn(" max-lg:-translate-y-[40px] ", {
            "translate-0  ": quantity,
          })}
        />
      </div>
    </div>
  );
};

export default HeaderInfo;
