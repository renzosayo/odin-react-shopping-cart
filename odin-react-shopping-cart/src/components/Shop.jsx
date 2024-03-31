import { useState, useEffect, createContext } from "react";
import Card from "./Card";
import ProductModal from "./ProductModal";

export const ContextProvider = createContext();

export default function Shop() {
  const [modalShown, setModalShown] = useState(false);
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=20");
      const data = await res.json();
      // console.log(data);
      setProducts(data);
    };
    getProducts();
  }, []);

  const handleClick = (product) => {
    setIsOpen(true);
    setSelected(product);
  };

  if (products.length < 1) return <div className="loading">Loading...</div>;
  else {
    return (
      <div className="shop-page">
        {products.map((product) => {
          return (
            <Card
              key={product.id}
              product={product}
              handleClick={() => {
                handleClick(product);
              }}
            />
          );
        })}
        <ContextProvider.Provider
          value={{ selected, isOpen, setIsOpen, setModalShown }}
        >
          <ProductModal />
        </ContextProvider.Provider>
        <div
          className={
            modalShown ? "added-to-cart shown" : "added-to-cart hidden"
          }
        >
          <p>Added to cart</p>
        </div>
      </div>
    );
  }
}
