import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeBasketPopup } from "../../../features/uiSlice/uiSlice";
import { removeFromBasket } from "../../../features/basket/ basketSlice";

const BasketPopup = () => {
  const basket = useSelector((state) => state.basket.items);
  const dispatch = useDispatch();

  console.log(basket);
  return (
    <div
      className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-50 flex flex-col items-center pt-[50px] overflow-y-auto gap-[50px]"
      onClick={() => dispatch(closeBasketPopup())}
    >
      <div
        className="w-[80%] h-[50%] bg-white rounded-2xl p-[20px] pb-[300px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between">
          <div className="w-[380px]">
            <h3>Оформить заказ</h3>
            <p>
              Введите свои контактные данные, и наш менеджер свяжется с Вами в
              течение 1 часа
            </p>
            <form className="flex flex-col w-[200px] items-start gap-[20px] mt-[20px]">
              <input
                type="text"
                placeholder="Введите имя"
                className="border-b-2"
              />
              <input
                type="email"
                placeholder="Введите email"
                className="border-b-2"
              />
              <input
                type="number"
                placeholder="Введите телефон"
                className="border-b-2"
              />
              <button className="w-[200px] py-[15px] rounded-4xl bg-[#309F85] text-white">
                Заказать
              </button>
            </form>
          </div>

          {basket.length === 0 ? (
            <p className="text-xl">Корзина пуста</p>
          ) : (
            <div className="flex flex-col gap-[15px] h-[300px] overflow-y-auto">
              {basket.map((item) => (
                <div
                  className="flex items-center gap-[10px]"
                  key={item.uniqueId}
                >
                  <img src={item.selectedImage} className="w-[100px]" />
                  <div>
                    <p>{item.title}</p>
                    {item.selectedSize !== null &&
                      item.size &&
                      item.size[item.selectedSize] && (
                        <p>Размер: {item.size[item.selectedSize]}</p>
                      )}
                    <p>{item.price}</p>
                  </div>
                  <button
                    className="text-red-500 ml-auto"
                    onClick={() => dispatch(removeFromBasket(item.uniqueId))}
                  >
                    X
                  </button>
                </div>
              ))}
              <p className="font-bold text-right mt-4">
                Итого:{" "}
                {basket
                  .reduce((acc, item) => acc + Number(item.price), 0)
                  .toFixed(2)}{" "}
                ₽
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasketPopup;
