import React from "react";
import Image from "next/image";
import "../src/styles/globals.css";

import {
  getCombinedData,
  CombinedItem,
} from "../controllers/productController";
import images from "../public/images/obj1images/pic1.webp";
import ProductList from "../src/components/ProductList";

const Home = () => {
  const combinedData: CombinedItem[] = getCombinedData();

  return (
    <div className="container mx-auto p-4">
      home
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
        Click Me
      </button>
      <ProductList data={combinedData} />
    </div>
  );
};

export default Home;
