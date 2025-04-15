import React, { useState } from "react";
import Popup from "./Popup";

const Product = ({
  product,
  index,
  setCurrentIndexes,
  products,
  offset,
  currentIndexes,
  basket,
  setBasket,
  setActiveBasket,
  selectedSize,
  setSelectedSize,
}) => {
  const [activePopup, setActivePopup] = useState(false);
  const [popupImageIndex, setPopupImageIndex] = useState();

  const handlePrevImage = (productIndex) => {
    setCurrentIndexes((prevIndexes) =>
      prevIndexes.map((product, i) =>
        i === productIndex + offset
          ? (product - 1 + products[i].imgs.length) % products[i].imgs.length
          : product
      )
    );
  };

  const handleNextImage = (productIndex) => {
    setCurrentIndexes((prevIndexes) =>
      prevIndexes.map((product, i) =>
        i === productIndex + offset
          ? (product + 1) % products[i].imgs.length
          : product
      )
    );
  };

  const handlePrevPopupImage = () => {
    setPopupImageIndex(
      (prev) => (prev - 1 + product.imgs.length) % product.imgs.length
    );
  };

  const handleNextPopupImage = () => {
    setPopupImageIndex((prev) => (prev + 1) % product.imgs.length);
  };

  const togglePopup = () => {
    setActivePopup(!activePopup);
    setPopupImageIndex(currentIndexes[index + offset]);
  };

  return (
    <div>
      {/* Product Card */}
      <div className="w-[278px] h-[632px] bg-white flex flex-col r rounded-2xl overflow-hidden cursor-pointer">
        <div className="relative h-[387px] bg-[#F1F1F8] w-full flex flex-col items-center ">
          <div className="h-full p-[20px]">
            <img
              src={product.imgs[currentIndexes[index + offset]]}
              className="object-cover bg-cover h-full"
              onClick={togglePopup}
            />
          </div>
          <div className="absolute bottom-0 right-[20px] flex items-center gap-[10px] justify-center mt-2">
            <img
              src="/images/arrowleft.png"
              className="cursor-pointer w-[10px] h-4"
              onClick={() => handlePrevImage(index)}
            />
            <span className="text-sm text-gray-600">
              {currentIndexes[index + offset] + 1} / {product.imgs.length}
            </span>
            <img
              src="/images/arrowright.png"
              className="cursor-pointer w-[10px] h-4"
              onClick={() => handleNextImage(index)}
            />
          </div>
        </div>
        <div className="px-[20px] mt-[10px]">
          <p className="w-[221px] font-bold text-[15px]">{product.title}</p>
          <p className="w-[151px] text-[10px] mt-[10px]">{product.subtitle}</p>
          <div className="flex items-start w-[80px] mt-[10px] gap-[5px]">
            {product.color.map((img, i) => (
              <div key={i}>
                <img src={img} />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-[50px]">
            <p className="w-[100px] font-gilroy-bold text-[#C4C4C4] text-[20px]">
              {product.price}
            </p>
            <button
              className="cursor-pointer z-20"
              onClick={() => {
                setActiveBasket(true);
                setBasket((prev) => {
                  const isProductInBasket = prev.some(
                    (item) =>
                      item.id === product.id &&
                      item.selectedImage === product.selectedImage
                  );
                  if (isProductInBasket) {
                    // Если товар уже есть в корзине, не добавляем его снова
                    return prev;
                  }
                  return [
                    ...prev,
                    {
                      ...product,
                      selectedImage:
                        product.imgs[currentIndexes[index + offset]],
                      uniqueId: Date.now(),
                    },
                  ];
                });
              }}
            >
              <img src="/images/basket.svg" className="w-[40px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Popup */}
      {activePopup && (
        <Popup
          togglePopup={togglePopup}
          handlePrevPopupImage={handlePrevPopupImage}
          handleNextPopupImage={handleNextPopupImage}
          product={product}
          popupImageIndex={popupImageIndex}
          basket={basket}
          setBasket={setBasket}
          index={index}
          offset={offset}
          currentIndexes={currentIndexes}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
      )}
    </div>
  );
};

export default Product;
