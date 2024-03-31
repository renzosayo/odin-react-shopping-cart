import ProductPage from "./ProductPage";
import Modal from "react-modal";
import { useContext } from "react";
import { ContextProvider } from "./Shop";

export default function ProductModal() {
  const { isOpen } = useContext(ContextProvider);
  return (
    <Modal isOpen={isOpen} appElement={document.getElementById("root")}>
      <ProductPage />
    </Modal>
  );
}
