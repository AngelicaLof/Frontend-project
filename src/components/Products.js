import { Link } from "react-router-dom";
import "../components/Styles/BuyProducts.css";

/**
 * This function is mapping through objects using them as a parameter
 * @param {object} films using props films as a parameter from the list.js file
 * @returns a list of the properties, and makes them into links with the import Link from react router dom.
 */
const Products = ({posts}) => {



//mapping through the object list with javascript
    return ( 
        <div className="fullList">

             <div className="header"><h1>Köp produkter</h1></div>

<div className="buy-products-container">
        {posts.map((post) => (

 <div className="ad-container">
    
<div className="card-image">
            <div className="image-div">
              <img className="card-image-1" key={post.image} src={post.image} alt="bild"/>
             </div>
            </div>

              <div key={post.id}> 
            
                 
              <div className="ad-product-info">
                 <div className="info-box">
             <div className="listtitle"><h2>{post.product}</h2></div>
              
             <div className="listtitle"><p>{post.description}</p></div>

               <div className="listtitle"><p>{post.price}</p></div>
              </div>
               <div className="info-box">
               
<Link to={`/ProductInfo/${post.id}`} className="info-button">

              Information
            </Link>
                </div>
              </div>
              </div>
              
             
              
              </div>
          ))} 

        </div>
        </div>
     );
}
 
export default Products;