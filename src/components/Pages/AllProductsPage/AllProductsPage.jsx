import React from "react";
import Header from "../../Header/Header";
import Products from "./Products";
import NavigationProducts from "./NavigationProducts";

const AllProductsPage = () => {
  return (
    <div>
      <Header
        title="Купить чашку с логотипом"
        text="Чашки с логотипом - это классика. Любая конференция или бизнес встреча не обойдется без данного реквизина. Так же  это прекрасный подарок для ваших сотрудников, деловых партнеров, друзей или постоянных клиентов . Владельцы заведений общественного питания могут заказать крупные партии чашек для своего ресторана или кафе. Также вы можете распространять эти изделия во время рекламных мероприятий, презентаций, выставок или конференций."
        image="/images/hudi.svg"
        quantity={{ button: "Показать еще", buttonClass: false }}
      />
      <NavigationProducts />
      <Products />
    </div>
  );
};

export default AllProductsPage;
