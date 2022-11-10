import "../components/Styles/BuyProducts.css";
/*import { useEffect, useState } from "react";
import { Link } from "react-router-dom";*/

import Products from './Products';
import UseFetch from './UseFetch';

const BuyProducts = () => {
const { data: posts, loading } = UseFetch('http://localhost:8000/posts');



// putting out the value that was fetched with useFetch
    return ( 
        <div className="buy-products-page">

        { loading && <div>Loading page...</div> }
         { posts && <Products posts={posts}  />}
        
        </div>
     );
}
 
export default BuyProducts;









/*
const BuyProducts = () => {
  const [posts, setPosts] = useState(null);

  useEffect(()  => {
    fetch("http://localhost:8000/posts")
    .then(res => {
     return res.json()
    })
    .then( data => {
console.log(data);
setPosts(data)
    })
  }, []);

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
 
export default BuyProducts;*/