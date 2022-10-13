import "../components/Styles/BuyProducts.css";
import { Link } from "react-router-dom";

const BuyProducts = () => {
    return ( 
        <div className="buy-products-page">
           <div className="header"><h1>Köp produkter</h1></div>
            <div className="buy-products-container">
              
              <div className="ad-container">
              
               <div className ="ad-card">
                        <img
            className="ad-container-photo"
            src={require("../components/images/potato.jpeg")}
            alt="potato"
          />
    
        <div className="ad-product-info">
          <div className="info-box">
          <h2>Produkt</h2>

        <p>info om produkten</p> 
        </div>
        <div className="info-box"><Link to="/ProductInfo" className="info-button">
              Information
            </Link>
        
        </div>
        </div>
        </div>

         <div className ="ad-card">
                        <img
            className="ad-container-photo"
            src={require("../components/images/apples.jpeg")}
            alt="potato"
          />
    
        <div className="ad-product-info">
          <div className="info-box">
          <h2>Produkt</h2>

        <p>info om produkten</p> 
        </div>
        <div className="info-box"><Link to="/ProductInfo" className="info-button">
              Information
            </Link></div>       
        </div>
        </div>

        <div className ="ad-card">
                        <img
            className="ad-container-photo"
            src={require("../components/images/carrots.jpeg")}
            alt="potato"
          />
    
        <div className="ad-product-info">
          <div className="info-box">
          <h2>Produkt</h2>

        <p>info om produkten</p> 
        </div>
        <div className="info-box"><Link to="/ProductInfo" className="info-button">
              Information
            </Link></div>       
        </div>
        </div>


        <div className ="ad-card">
                        <img
            className="ad-container-photo"
            src={require("../components/images/tomato.jpeg")}
            alt="potato"
          />
    
        <div className="ad-product-info">
          <div className="info-box">
          <h2>Produkt</h2>

        <p>info om produkten</p> 
        </div>
        <div className="info-box"><Link to="/ProductInfo" className="info-button">
              Information
            </Link></div>       
        </div>
        </div>

        <div className ="ad-card">
                        <img
            className="ad-container-photo"
            src={require("../components/images/apples.jpeg")}
            alt="potato"
          />
    
        <div className="ad-product-info">
          <div className="info-box">
          <h2>Produkt</h2>

        <p>info om produkten</p> 
        </div>
        <div className="info-box"><Link to="/ProductInfo" className="info-button">
              Information
            </Link></div>       
        </div>
        </div>


        <div className ="ad-card">
                        <img
            className="ad-container-photo"
            src={require("../components/images/carrots.jpeg")}
            alt="potato"
          />
    
        <div className="ad-product-info">
          <div className="info-box">
          <h2>Produkt</h2>

        <p>info om produkten</p> 
        </div>
        <div className="info-box"><Link to="/ProductInfo" className="info-button">
              Information
            </Link></div>       
        </div>
        </div>



        </div>
        </div>
        </div>
     );
}
 
export default BuyProducts;