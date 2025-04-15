import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";
import products from "../../../assets/products.json";
import BasketPopup from "./BasketPopup";

const Products = () => {
  const [currentIndexes, setCurrentIndexes] = useState(products.map(() => 0));
  const [currentPage, setCurrentPage] = useState(0);
  const [basket, setBasket] = useState([]);
  const [activeBasket, setActiveBasket] = useState(false);
  const [selectedSize, setSelectedSize] = useState(0);

  const deleteBasketById = (uniqueId) => {
    setBasket((prev) => prev.filter((item) => item.uniqueId !== uniqueId));
  };

  const itemsPerPage = 8;
  const offset = currentPage * itemsPerPage;
  const pageCount = Math.ceil(products.length / itemsPerPage);
  const currentItems = products.slice(offset, offset + itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  const togglePopupBusket = () => {
    setActiveBasket(!activeBasket);
  };

  return (
    <div className="px-[40px] bg-[#E5E5E5] pt-[100px]">
      <div className="flex items-center flex-wrap justify-center gap-[15px]">
        {currentItems.map((product, index) => (
          <Product
            product={product}
            index={index}
            key={product.id}
            currentIndexes={currentIndexes}
            setCurrentIndexes={setCurrentIndexes}
            products={products}
            offset={offset}
            basket={basket}
            setBasket={setBasket}
            activeBasket={activeBasket}
            setActiveBasket={setActiveBasket}
            selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}

          />
        ))}
      </div>
      {activeBasket && (
        <BasketPopup
          togglePopupBusket={togglePopupBusket}
          basket={basket}
          deleteBasketById={deleteBasketById}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          
        />
      )}

      {/* Пагинация */}
      <div className="flex justify-end mt-8 mr-[100px]">
        <ReactPaginate
          breakLabel={"..."}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"flex gap-2"}
          pageClassName={
            " flex items-center justify-center   text-black cursor-pointer"
          }
          pageLinkClassName="w-8 h-8 rounded-full text-[#7981AD] font-gilroy-bold text-[20px] flex items-center justify-center" // ✅ гарантируем стили для <a>
          activeClassName={""} // ✅ применяется к li
          activeLinkClassName={"text-white bg-[#7981AD]"} // ✅ применяется к внутреннему <a>
          previousClassName={
            " flex items-center justify-center rounded-full bg-white text-black cursor-pointer"
          }
          nextClassName={
            " flex items-center justify-center rounded-full bg-white text-black cursor-pointer"
          }
          previousLabel={
            <div className="px-[15px]">
              <img
                src="/images/arrowleft.png"
                alt="prev"
                className="w-[10px] h-4 "
              />
            </div>
          }
          nextLabel={
            <div className="px-[15px]">
              <img
                src="/images/arrowright.png"
                alt="next"
                className="w-[10px] h-4"
              />
            </div>
          }
          breakClassName={"w-8 h-8 flex items-center justify-center"}
        />
      </div>
    </div>
  );
};

export default Products;
