import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from "./components/LandingPage";
import BuyProducts from "./components/BuyProducts";
import ProductInfo from "./components/ProductInfo";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/buyproducts" element={<BuyProducts />} />
          <Route path="/productinfo" element={<ProductInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
