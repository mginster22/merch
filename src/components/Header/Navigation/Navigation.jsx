import React from "react";
import { Link, useLocation } from "react-router";
import cn from "classnames";

const linkItem = [
  { title: "Наборы", href: "/naboru" },
  { title: "Все товары", href: "/vsetovaru" },
  { title: "Пошив", href: "/powuv" },
  { title: "Производство", href: "/proizvodstvo" },
  { title: "Информация", href: "/informacia" },
];

const Navigation = () => {
  const location = useLocation(); // Получаем текущий путь страницы
  const activeLink = location.pathname; // Сравниваем с pathname

  return (
    <div
      className="mt-[60px] bg-[linear-gradient(to_right,_#c7b7e6_0%,_#fcfcfc_100%)] h-[100px] flex justify-center w-full
    wrapper  max-lg:px-[20px] "
    >
      <div className=" flex items-center justify-between  w-full">
        <ul className="flex items-center h-full max-w-[700px] max-lg:gap-[20px] ">
          {linkItem.map((item) => (
            <li
              key={item.href}
              className="relative h-full flex items-center justify-center rounded-[10px]  transition-colors duration-300 group -translate-x-[15px]"
            >
              <Link
                className={cn(
                  "w-full h-full flex items-center px-4 text-[15px] font-medium  transition-colors duration-300 group-hover:bg-black group-hover:text-white",
                  {
                    "bg-black text-white": activeLink === item.href, // Apply active styles
                  }
                )}
                to={item.href}
              >
                {item.title}
              </Link>

              {/* Полоска снизу при hover или активной ссылке */}
              <span
                className={cn(
                  "absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-0 h-[4px] bg-black transition-all duration-300 group-hover:w-full",
                  {
                    "w-full": activeLink === item.href, // Show the stripe if link is active
                  }
                )}
              ></span>
            </li>
          ))}
        </ul>
        <div className="flex items-center  h-full relative max-lg:h-[200px] max-lg:p-0  ">
          <h3 className="text-[35px] font-bold text-[#3C336C]  max-lg:text-[30px] max-lg:w-[250px] max-lg:z-50 max-lg:leading-[1.1] max-lg:pl-[30px]">
            Шопперы со скидкой - 25%
          </h3>
          <div className="h-full max-lg:absolute max-lg:-right-[19px] max-lg:z-20 max-lg:h-[100px]">
            <img
              src="/images/shooper.svg "
              className="w-[200px] object-cover h-full opacity-60  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
