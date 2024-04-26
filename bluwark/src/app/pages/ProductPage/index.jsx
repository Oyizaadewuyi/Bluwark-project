import React from "react";
import EradicateScam from "../../components/EradicateScam";
import EliminateFraud from "../../components/EliminateFraud";
import HeaderPage from "../../components/BulwarkHomePage/HeaderPage";
import { Scan } from "../../components/productpageComponent/linkscan";
import malwareImage from "../../components/Assets/images/malwareImage.png";

const ProductPage = () => {
  return (
    <div>
      <HeaderPage />
      <div className="bg-[E0E0FD] flex flex-col justify-center py-12 px-20">
        <EradicateScam />
        <EliminateFraud />
        <br />
        <Scan />
        <img src={malwareImage} alt="malwareImage" />
      </div>
    </div>
  );
};

export default ProductPage;


