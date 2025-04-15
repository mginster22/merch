import React from "react";
import Header from "../../Header/Header";
import Popular from "./Popular";

const HomePage = () => {
  return (
    <div>
      <Header
        title="Свежее дыхание в корпоративной жизни"
        text="Ми вдосконалили процес замовлення продукції для того, щоб Ви і Ваша компанія сконцентрувались на основних задачах і досягали поставлених цілей."
        image="/images/portrait.svg"
      />
      <Popular />
    </div>
  );
};

export default HomePage;
