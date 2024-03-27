import PropTypes from "prop-types";
import QuantityInput from "./QuantityInput";
import { useState } from "react";

export default function ProductPage({ data }) {
  const rating = Math.round(data.rating.rate);
  const [countToBuy, setCountToBuy] = useState(1);

  return (
    <div className="product-page">
      <img src={data.image} alt={data.title} />
      <div className="product-details">
        <h2>{data.title}</h2>
        <p className="description">{data.description}</p>
        <p className="price">${data.price.toFixed(2)}</p>
        <p className="rating">{"★".repeat(rating)}</p>
        <p className="rate-count">by {data.rating.count} reviews</p>
        <QuantityInput countToBuy={countToBuy} setCountToBuy={setCountToBuy} />
      </div>
    </div>
  );
}

ProductPage.propTypes = {
  data: PropTypes.object,
};
