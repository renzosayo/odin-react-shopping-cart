import { useState, useEffect } from "react";
import Card from "./Card";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=10");
      const data = await res.json();
      // console.log(data);
      setProducts(data);
    };
    getProducts();
  }, []);

  if (products.length < 1) return <div>Loading...</div>;
  else {
    console.log(products);
    return (
      <div className="shop-page">
        {products.map((product) => {
          return <Card key={product.key} product={product} />;
        })}
      </div>
    );
  }
}
