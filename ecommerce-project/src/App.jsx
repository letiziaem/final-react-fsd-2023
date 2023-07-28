import { useEffect, useState } from "react";
import './index.scss';
import Homepage from './routes/Homepage/Homepage';
import CategoryPage from './routes/CategoryPage/CategoryPage';
import ProductPage from './routes/ProductPage/ProductPage';

export default function App() {
  const [route, setRoute] = useState("homepage");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get("page");
    if (page) setRoute(page);
  }, []);

  return (
    <div className="App">
      {route === "homepage" && <Homepage />}
      {route === "category-all-seatings" && <CategoryPage />}
      {route === "product-page" && <ProductPage />}
    </div>
  )
}
