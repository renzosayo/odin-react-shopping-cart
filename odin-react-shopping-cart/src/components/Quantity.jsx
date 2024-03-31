import PropTypes from "prop-types";

export default function Quantity({ incrementCount, decrementCount, count }) {
  return (
    <div className="quantity">
      <span>
        <button className="minus" onClick={decrementCount} disabled={count < 2}>
          <strong>-</strong>
        </button>
      </span>
      <span>{count}</span>
      <span>
        <button className="add" onClick={incrementCount}>
          <strong>+</strong>
        </button>
      </span>
    </div>
  );
}

Quantity.propTypes = {
  incrementCount: PropTypes.func,
  decrementCount: PropTypes.func,
  count: PropTypes.number,
};
