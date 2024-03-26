import PropTypes from "prop-types";

export default function Card({ product }) {
  const rating = Math.round(product.rating.rate);

  return (
    <div className="card" key={product.title}>
      <img src={product.image} alt={product.title} />
      <div className="details">
        <p className="product-name">{product.title}</p>
        <p className="product-price">${product.price}</p>
        <div className="product-rating-details">
          <span className="product-rating">{"★".repeat(rating)}</span>
          <span className="product-rating-detail">
            ({product.rating.count})
          </span>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.object,
};
