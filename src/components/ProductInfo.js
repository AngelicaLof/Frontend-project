import "../components/Styles/ProductInfo.css";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import UseFetch from './UseFetch';


const ProductInfo = () => {

const { id } = useParams();
const { data: product, loading } = UseFetch( 'http://localhost:8000/posts/' + id )

  return ( 
  <div className="product-detail-page">
      <div className="pro-article">
    { loading && <div>Loading</div> }
    { product && (
      <article>
        <h1 className="header-details">Produktinformation</h1>

        <div className="product-detail">
          <h2>Produkt</h2>
          <input readOnly type="text" className="product-type" value={`${ product.product }`}/>
        </div>

                
        <div className="product-detail">
          <h2>Kvantitet</h2>
          <input readOnly type="text" className="product-quantity" value={`${ product.quantity }`}/>
        </div>

                
        <div className="product-detail">
          <h2>Pris</h2>
          <input readOnly type="text" className="product-price" value={`${ product.price }`}/>
        </div>

            
        <div className="product-detail">
          <h2>Beskrivning</h2>
          <input readOnly type="text" className="product-description" value={`${ product.description }`}/>
        </div>

               
        <div className="card-image-div">
          <img className="card-image-2" key={product.image} src={product.image} alt="bild"/>
        </div>

        <div className="product-detail">
          <h2>Plats för upphämtning</h2>
        <input readOnly type="text" className="product-place" value={`${ product.place }`}/>
        </div>

        <div className="product-detail">
          <h2>Telefon</h2>
          <input readOnly type="text" className="product-phone" value={`${ product.number }`}/>
        </div>

        <div className="buttons">
        <Link to={`/ViewProduct/${product.id}`} className="back-button">
              Köp produkt
        </Link>

        <Link to="/BuyProducts" className="back-button">
              Gå tillbaka
        </Link>
            
        </div>
        
        </article>

        )}
        </div>
    
    </div>
    
     );
}
 
export default ProductInfo;