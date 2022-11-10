import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import UseFetch from './UseFetch';

const ViewProduct = () => {

const { id } = useParams();
const { data: product, loading } = UseFetch( 'http://localhost:8000/posts/' + id )


    return ( 
        <div className="product-detail-page">
            <div className="pro-article">
        { loading && <div>Loading</div> }
        { product && (
            <article>
                <h1 className="header-details">Vald produkt</h1>

              
                <div className="product-detail">
                <h2>Produkt</h2>
                <input readonly type="text" className="product-type" value={`${ product.product }`}/>
                </div>

                
                <div className="product-detail">
                <h2>Kvantitet</h2>
                <input readonly type="text" className="product-quantity" value={`${ product.quantity }`}/>
                </div>

                
                <div className="product-detail">
                <h2>Pris</h2>
                <input readonly type="text" className="product-price" value={`${ product.price }`}/>
                </div>

            
                

            <div className="product-detail">

                <h2>Telefon</h2>
                <input readonly type="text" className="product-phone" value={`${ product.phone }`}/>
            </div>
 <div className="buttons">
                <Link to={`/Receipt/${product.id}`} className="back-button">
              Bekräfta
            </Link>
            </div>
        
            </article>

        )}
        </div>
    
    
        </div>
     );
}
 
export default ViewProduct;