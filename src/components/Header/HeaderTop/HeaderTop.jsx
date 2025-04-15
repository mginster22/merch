import React from "react";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { toggleBasketPopup } from "../../../features/uiSlice/uiSlice";

const HeaderTop = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center wrapper pt-[40px] max-lg:p-[20px] ">
      <Link to="/">
        <img src="/images/logo.png" className="w-80 max-lg:w-60" />
      </Link>
      <div className="w-96 flex items-center relative gap-5 ">
        <div className="absolute pl-2">
          <img src="/images/search.svg" className="max-lg:w-[17px]" />
        </div>
        <input
          type="search"
          placeholder="Поиск"
          className="border-3 rounded-[200px] outline-0 px-8 py-2 w-full text-xs focus:border-[#1FAB8A] "
        />
      </div>
      <a
        href="#"
        className="bg-[#1FAB8A] rounded-[200px] py-4 px-12 text-white text-[14px] max-lg:px-[20px] max-lg:py-[10px] max-lg:text-[12px]"
      >
        +380 630 130 103
      </a>
      <div>
        <img src="/images/user.svg" className="w-[30px] max-lg:w-[22px] " />
      </div>
      <div onClick={() => dispatch(toggleBasketPopup())}>
        <img src="/images/basket.svg" />
      </div>
      <div className="flex items-center ">
        <p className="max-lg:text-[15px]">RU/ </p>
        <p className="max-lg:text-[15px]">ENG</p>
      </div>
    </div>
  );
};

export default HeaderTop;
