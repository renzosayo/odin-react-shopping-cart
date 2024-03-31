import Quantity from "./AddToCart";
import { useContext, useState } from "react";
import { ContextProvider } from "./Shop";

export default function ProductPage() {
  const [countToBuy, setCountToBuy] = useState(1);
  const { setIsOpen, selected } = useContext(ContextProvider);
  const rating = Math.round(selected.rating.rate);

  return (
    <div className="product-page">
      <img src={selected.image} alt={selected.title} />
      <div className="product-details">
        <button
          className="close-modal"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          ✖
        </button>
        <h2>{selected.title}</h2>
        <p className="description">{selected.description}</p>
        <p className="price">${selected.price.toFixed(2)}</p>
        <p className="rating">{"★".repeat(rating)}</p>
        <p className="rate-count">by {selected.rating.count} reviews</p>
        <Quantity countToBuy={countToBuy} setCountToBuy={setCountToBuy} />
      </div>
    </div>
  );
}
