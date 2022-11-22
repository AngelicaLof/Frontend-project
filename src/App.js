import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from "./components/LandingPage";
import BuyProducts from "./components/BuyProducts";
import ProductInfo from "./components/ProductInfo";
import SellProducts from "./components/SellProducts";
import Navbar from "./components/Navbar";
import ViewProduct from "./components/ViewProduct";
import Confirmed from "./components/Confirmed";
import Footer from "./components/Footer";




function App() {
  return (
    <div className="App">
    <Navbar />
      
      <Router>
        <Routes>
        
          <Route path="/" element={<LandingPage />} />
          <Route path="/buyproducts" element={<BuyProducts />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/sellproducts" element={<SellProducts />} />
          <Route path="/viewproduct/:id" element={<ViewProduct />} />
           <Route path="/confirmed" element={<Confirmed />} />
        
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
