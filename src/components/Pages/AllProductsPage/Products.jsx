import React from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../../features/products/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { products, currentIndexes, currentPage, itemsPerPage } = useSelector(
    (state) => state.products
  );

  const offset = currentPage * itemsPerPage;
  const pageCount = Math.ceil(products.length / itemsPerPage);
  const currentItems = products.slice(offset, offset + itemsPerPage);

  const handlePageClick = ({ selected }) => {
    dispatch(setCurrentPage(selected));
  };

  return (
    <div className="px-[40px] bg-[#E5E5E5] pt-[100px]">
      <div className="flex items-center flex-wrap justify-center gap-[15px]">
        {currentItems.map((product, index) => (
          <Product
            product={product}
            index={index}
            key={product.id}
            offset={offset}
            currentIndexes={currentIndexes}
          />
        ))}
      </div>

      {/* Пагинация */}
      <div className="flex justify-end mt-8 mr-[100px]">
        <ReactPaginate
          breakLabel={"..."}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"flex gap-2"}
          pageClassName={"flex items-center justify-center text-black cursor-pointer"}
          pageLinkClassName="w-8 h-8 rounded-full text-[#7981AD] font-gilroy-bold text-[20px] flex items-center justify-center"
          activeLinkClassName={"text-white bg-[#7981AD]"}
          previousLabel={<img src="/images/arrowleft.png" className="w-[10px] h-4" />}
          nextLabel={<img src="/images/arrowright.png" className="w-[10px] h-4" />}
          breakClassName={"w-8 h-8 flex items-center justify-center"}
        />
      </div>
    </div>
  );
};

export default Products;
