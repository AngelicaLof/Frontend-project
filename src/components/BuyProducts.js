import "../components/Styles/BuyProducts.css";
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
