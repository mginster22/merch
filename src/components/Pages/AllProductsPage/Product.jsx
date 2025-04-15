import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Popup from "./Popup";
import { setImageIndex } from "../../../features/products/productSlice";
import { addToBasket } from "../../../features/basket/ basketSlice";

const Product = ({ product, index, offset }) => {
  const dispatch = useDispatch();
  const currentIndexes = useSelector((state) => state.products.currentIndexes);

  const [activePopup, setActivePopup] = useState(false);
  const [popupImageIndex, setPopupImageIndex] = useState();
  const [selectedSize, setSelectedSize] = useState(null);
  const [notificationVisible, setNotificationVisible] = useState(false);

  const productIndex = index + offset;
  const currentImageIndex = currentIndexes[productIndex];

  const handlePrevImage = () => {
    const newIndex =
      (currentImageIndex - 1 + product.imgs.length) % product.imgs.length;
    dispatch(setImageIndex({ productIndex, imageIndex: newIndex }));
  };

  const handleNextImage = () => {
    const newIndex = (currentImageIndex + 1) % product.imgs.length;
    dispatch(setImageIndex({ productIndex, imageIndex: newIndex }));
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
    setSelectedSize(null);
    setActivePopup(!activePopup);
    setPopupImageIndex(currentImageIndex);
  };

  const handleAddToCart = () => {
    dispatch(
      addToBasket({
        ...product,
        selectedImage: product.imgs[currentImageIndex],
        selectedSize: selectedSize,
        uniqueId: Date.now(),
      })
    );
    setNotificationVisible(true);
    setTimeout(() => {
      setNotificationVisible(false);
    }, 2000);
  };

  return (
    <div>
      {/* Product Card */}
      <div className="w-[278px] h-[632px] bg-white flex flex-col rounded-2xl overflow-hidden cursor-pointer">
        <div className="relative h-[387px] bg-[#F1F1F8] w-full flex flex-col items-center">
          <div className="h-full p-[20px]">
            <img
              src={product.imgs[currentImageIndex]}
              className="object-cover h-full"
              onClick={togglePopup}
            />
          </div>
          <div className="absolute bottom-0 right-[20px] flex items-center gap-[10px]">
            <img
              src="/images/arrowleft.png"
              className="cursor-pointer w-[10px] h-4"
              onClick={handlePrevImage}
            />
            <span className="text-sm text-gray-600">
              {currentImageIndex + 1} / {product.imgs.length}
            </span>
            <img
              src="/images/arrowright.png"
              className="cursor-pointer w-[10px] h-4"
              onClick={handleNextImage}
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

          <div className="flex items-center justify-between mt-[50px] relative">
            <p className="w-[100px] font-gilroy-bold text-[#C4C4C4] text-[20px]">
              {product.price}
            </p>
            <button className="cursor-pointer z-20" onClick={handleAddToCart}>
              <img src="/images/basket.svg" className="w-[40px]" />
            </button>
            {notificationVisible && (
              <div className="absolute top-[20px] left-[100px] bg-green-500 text-white  rounded-md mt-2 transition-shadow p-2">
                Товар добавлен 
              </div>
            )}
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
