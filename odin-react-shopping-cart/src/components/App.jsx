import "../assets/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Shop.jsx";
import MainPage from "./MainPage.jsx";
import Cart from "./Cart.jsx";
import Home from "./Home.jsx";
import ProductPage from "./ProductPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <div>Error</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
