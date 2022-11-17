import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import UseFetch from './UseFetch';
import "../components/Styles/ViewProduct.css";

const ViewProduct = () => {

const { id } = useParams();
const { data: product, loading } = UseFetch( 'http://localhost:8000/posts/' + id )


const handleClick = () => {
    fetch('http://localhost:8000/posts/' + product.id, {

        method: 'DELETE'
    }).then(() => {
       console.log("deleted");
    });
};


    return ( 
        <div className="product-detail-page-">
            <div className="pro-article-">
        { loading && <div>Loading</div> }
        { product && (
            <article>
                <h1 className="header-details-">Du har valt följande produkt:</h1>

              
                <div className="product-detail-">
                <h2>Produkt:</h2>
                <input readOnly type="text" className="product-type-" value={`${ product.product }`}/>
                </div>

                
                <div className="product-detail-">
                <h2>Kvantitet:</h2>
                <input readOnly type="text" className="product-quantity-" value={`${ product.quantity }`}/>
                </div>

                
                <div className="product-detail-">
                <h2>Pris:</h2>
                <input readOnly type="text" className="product-price-" value={`${ product.price }`}/>
                </div>

                <div className="product-detail-">
                <h2>Upphämtningsplats:</h2>
                <input readOnly type="text" className="product-place-" value={`${ product.place }`}/>
                </div>


                <div className="product-detail-">
                <h2>Telefon:</h2>
                <input readOnly type="text" className="product-number" value={`${ product.number }`}/>
            </div>


 <div className="buttons-">
                <Link to="/Confirmed" onClick={handleClick} className="back-button-">
              Bekräfta köp
            </Link>
 </div>
            
 <div className="buttons-">
                <Link to="/BuyProducts" className="back-button-">
              Tillbaka
            </Link>
</div>
        
            </article>

        )}
        </div>
    
    
        </div>
     );
}
 
export default ViewProduct;