// components/ProductList.tsx
import React from "react";
import { CombinedItem } from "../../controllers/productController";
import Image from "next/image";
interface Props {
  data: CombinedItem[];
}

function ProductList({ data }: Props) {
  // Render the data here
  return (
    <div className="product-list">
      <ul>
        {data.map((item, index) => (
          <li key={`item${index}`}>
            {/* Render individual item properties */}
            <Image src={item.image} alt={`Product ${item.id}`} />
            <p>ID: {item.id}</p>
            <p>Name: {item.name}</p>
            {/* Include other properties as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
