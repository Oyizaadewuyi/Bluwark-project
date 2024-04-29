import React from "react";
import EradicateScam from "../../components/EradicateScam";
import EliminateFraud from "../../components/EliminateFraud";
import HeaderPage from "../../components/BulwarkHomePage/HeaderPage";
import { Scan } from "../../components/productpageComponent/linkscan";
import ScamChecker from "../../components/productpageComponent/scanChecker";
import { CustomFooter } from "../../components/Footer/Footer";


const ProductPage = () => {
  return (
    
      
      <div className="bg-[E0E0FD] flex flex-col justify-center py-12 px-20">
      <HeaderPage />
        <EradicateScam />
        <EliminateFraud />
        {/* <CustomFooter/> */}
       <ScamChecker/>

       <CustomFooter/>
       
       
       </div> 
     
    
    
    
  );
};

export default ProductPage;


