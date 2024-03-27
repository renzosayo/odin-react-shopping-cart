import { useState, useEffect, createContext } from "react";
import Card from "./Card";
import ProductModal from "./ProductModal";

export const ContextProvider = createContext();

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=50");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    getProducts();
  }, []);

  const handleClick = () => {
    setIsOpen(true);
  };

  if (products.length < 1) return <div>Loading...</div>;
  else {
    return (
      <div className="shop-page">
        {products.map((product) => {
          return (
            <Card
              key={product.id}
              product={product}
              handleClick={() => {
                setSelected(product);
                handleClick(product.id);
              }}
            />
          );
        })}
        <ContextProvider.Provider value={selected}>
          <ProductModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </ContextProvider.Provider>
      </div>
    );
  }
}
