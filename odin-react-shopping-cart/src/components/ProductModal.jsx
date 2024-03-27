import ProductPage from "./ProductPage";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ContextProvider } from "./Shop";

export default function ProductModal({ isOpen, setIsOpen }) {
  const selected = useContext(ContextProvider);

  return (
    <Modal isOpen={isOpen} appElement={document.getElementById("root")}>
      <ProductPage data={selected} />
      <button
        onClick={() => {
          setIsOpen(false);
        }}
      >
        Close modal
      </button>
    </Modal>
  );
}

ProductModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
