import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import UseFetch from './UseFetch';


const Receipt = () => {

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
        <div>

        <div className="product-detail-page">
            <div className="pro-article">
        { loading && <div>Loading</div> }
        { product && (
            <article>
                <h1 className="header-details">KVITTO</h1>

              
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

            <div className="buttons">
                <Link to="/" onClick={handleClick} className="back-button">
              Tillbaka
            </Link>
            </div>
        
        
            </article>

        )}
        </div>
    
    
        </div>



        </div>
     );
}
 
export default Receipt;