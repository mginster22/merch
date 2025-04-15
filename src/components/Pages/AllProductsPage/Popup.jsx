import classNames from "classnames";
import React, { useState } from "react";

const Popup = ({
  togglePopup,
  handlePrevPopupImage,
  handleNextPopupImage,
  product,
  popupImageIndex,
  setBasket,
  selectedSize,
  setSelectedSize
}) => {

  const [activeCharackteristic, setActiveCharackteristic] = useState(false);

  return (
    <div
      className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-50 flex flex-col items-center pt-[50px] overflow-y-auto gap-[50px]"
      onClick={togglePopup}
    >
      <div
        className="w-[80%] h-[80%]   bg-[#FAFAFA] p-[30px] rounded-[20px] flex gap-[20px] relative pb-[200px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="absolute right-[40px] text-[30px]"
          onClick={togglePopup}
        >
          X
        </div>
        <div className=" flex flex-col gap-[20px]">
          <div className=" relative w-[550px] h-[400px] flex items-center justify-center">
            <div className="bg-[#ECE7F0] p-[10px] rounded-2xl absolute top-[50%] left-[50px] flex justify-center">
              <img
                src="/images/arrowleft.png"
                className="cursor-pointer  w-[20px] h-[20px] "
                onClick={handlePrevPopupImage}
              />
            </div>
            <div className="bg-[#ECE7F0] p-[10px] rounded-2xl absolute right-[50px] top-[50%] flex justify-center">
              <img
                src="/images/arrowright.png"
                className="cursor-pointer w-[20px] h-[20px]  "
                onClick={handleNextPopupImage}
              />
            </div>
            <img
              src={product.imgs[popupImageIndex]}
              className=" bg-cover  object-cover h-[300px]"
            />
          </div>
          <div className="w-[500px] h-[100px] flex items-center flex-wrap gap-[10px]">
            {product.imgs.map((img, i) => (
              <img
                src={img}
                key={i}
                className="w-[80px] bg-cover h-full object-cover"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h5 className="text-[30px] w-[450px]">{product.title}</h5>
          <div className="flex items-center">
            {product.color.map((img, i) => (
              <img src={img} key={i} className="w-[20px]" />
            ))}
          </div>
          <p className="text-[20px] font-bold">{product.price}</p>
          <p className="font-gilroy-thin text-[14px] w-[430px]">
            {product.productInfo}
          </p>
          <div className="flex justify-between gap-[10px]">
            <div className="flex flex-col gap-[5px]">
              <p>Размер</p>
              <div className="flex gap-[10px]">
                {product.size.map((size, i) => (
                  <p
                    key={i}
                    className={classNames("font-gilroy-thin cursor-pointer", {
                      "font-gilroy-bold": selectedSize === i,
                    })}
                    onClick={() => setSelectedSize(i)}
                  >
                    {size}
                  </p>
                ))}
              </div>
              <div className="flex items-center w-[140px] gap-[5px] mt-[10px]">
                <img src="/images/ruler.svg" />
                <p className="text-[12px]">Подобрать размер</p>
              </div>
              <button
                className="bg-[#524983] text-white py-[10px] px-[70px] rounded-2xl cursor-pointer mt-[30px]"
                onClick={() => {
                  setBasket((prev) => [
                    ...prev,
                    {
                      ...product,
                      selectedImage: product.imgs[popupImageIndex],
                      uniqueId: Date.now(),
                    },
                  ]);
                }}
              >
                Заказать
              </button>
            </div>
            <div className="w-full">
              <div
                className="flex items-center gap-[10px] cursor-pointer justify-start"
                onClick={() => setActiveCharackteristic(!activeCharackteristic)}
              >
                <p className="">Характеристики</p>
                <button>
                  <img src="/images/arrowdown.png" />
                </button>
              </div>
              {activeCharackteristic && (
                <>
                  {product.characteristics.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between border-b-2 font-gilroy-thin pt-[10px] pb-[10px] gap-[10px] "
                    >
                      <p className="whitespace-nowrap">{item.name}</p>
                      <p className="text-right max-w-[60%] break-words">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
