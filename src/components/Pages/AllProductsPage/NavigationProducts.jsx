import React, { useState } from "react";
import classNames from "classnames";

const nav = [
  { title: "Все товары" },
  {
    title: "Толстовки",
    subTitle: ["Худи на замке", "Худи без замка", "Оверсайз худи"],
  },
  { title: "Свитшоты" },
  { title: "Футболки" },
  { title: "Поло" },
  { title: "Жилетки" },
  { title: "Рюкзаки" },
  { title: "Бананки" },
  { title: "Эко-сумки/Шопперы" },
  { title: "Пледы" },
  { title: "Носки" },
  { title: "Маски" },
];

const NavigationProducts = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleClick = (i, hasSubTitle) => {
    setActiveIndex(i);
    if (hasSubTitle) {
      setOpenDropdownIndex(i === openDropdownIndex ? null : i);
    } else {
      setOpenDropdownIndex(null);
    }
  };

  return (
    <div className="bg-white px-[40px] flex items-center justify-center" >
      <div className="relative inline-flex justify-between gap-[20px] border-t-[6px] border-[#f2f0f9] pb-[10px]">
        {nav.map((item, i) => (
          <div
            key={i}
            onClick={() => handleClick(i, !!item.subTitle)}
            className={classNames(
              "relative pt-[30px] pb-2  cursor-pointer transition-all",
              {
                "text-black font-semibold": activeIndex === i,
              }
            )}
          >
            <div
              className={classNames(
                "relative text-[13px] p-[10px] rounded-[5px]",
                {
                  "bg-black text-white px-[40px] ": activeIndex === i,
                }
              )}
            >
              <div
                className={classNames(
                  "border-t-[8px] rounded-2xl w-full -translate-y-[46px] right-0 absolute",
                  {
                    "border-black": activeIndex === i,
                    "border-transparent": activeIndex !== i,
                  }
                )}
              ></div>

              {item.title}

              {item.subTitle && openDropdownIndex === i && (
                <div className="absolute left-0  right-0 top-[32px]  bg-black shadow-lg  p-[4px] z-20">
                  {item.subTitle.map((sub, index) => (
                    <p
                      key={index}
                      className="py-2 px-2 hover:bg-gray-100 hover:text-black hover:rounded-[5px] cursor-pointer whitespace-nowrap text-center"
                    >
                      {sub}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationProducts;
