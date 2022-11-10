import { useState } from "react";
import { useNavigate } from 'react-router-dom';    
import "../components/Styles/SellProducts.css";

const SellProducts = () => {

const [product, setProduct] = useState('');
const [quantity, setQuantity] = useState('');
const [price, setPrice] = useState('');
const [description, setDescription] = useState('');
const [image, setImage] = useState('');
const [place, setPlace] = useState('');
const [number, setNumber] = useState('');
const [isPending, SetIsPending] = useState(false);
const navigate = useNavigate();


const handleSubmit = (e) => {
    e.preventDefault();
    const post = { product, quantity, price, description, image, place, number };
//SetIsPending is first set to true while the function is loading. When the data is posted it is set to false. History.push makes you return to the homepage
    SetIsPending(true);
    
    fetch('http://localhost:8000/posts', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post)
    }).then(() => {
        console.log('Annons publicerad');
        SetIsPending(false);
        navigate("/BuyProducts");
        alert("Din annons är publicerad");
    })
}




    return (  


        <div className="create">
            <div className="createForm">

<form onSubmit={handleSubmit}>
    <h2 className="header">Produktinformation</h2>
    <div>
   <h3>Produkt</h3>
    <input 
    type="text" className="inputField"
    required 
    value ={product}
    onChange={(e) => setProduct(e.target.value)}
    />
    </div>

    <div>
    <h3>Kvantitet</h3>
    <input 
    type="text" className="inputField"
    required
     value ={quantity}
    onChange={(e) => setQuantity(e.target.value)}
    />
    </div>

    <div>
    <h3>Pris</h3>
    <input 
    type="text" className="inputField"
    required
     value ={price}
    onChange={(e) => setPrice(e.target.value)}
    />
    </div>


    <div>
    <h3>Beskrivning</h3>
    <div>
    <textarea required className="inputArea" rows="5" cols="30"
     value ={description}
    onChange={(e) => setDescription(e.target.value)}
    ></textarea>
    </div>
    </div>

<div>
   <h3>Bild</h3>
    <input 
    type="text" className="inputField"
    
    value ={image}
    onChange={(e) => setImage(e.target.value)}
    />
     </div>


<div>
   <h3>Plats för upphämtning</h3>
    <input 
    type="text" className="inputField"
    required 
    value ={place}
    onChange={(e) => setPlace(e.target.value)}
    />
     </div>

        <div>
   <h3>Telefonnummer</h3>
    <input 
    type="number" className="inputField"
    required 
    value ={number}
    onChange={(e) => setNumber(e.target.value)}
    />
    
    </div>


    { !isPending && <button className="edit">Annonsera</button>}
    { isPending && <button className="edit" disabled>Annonserar..</button>}
</form>

</div>

        </div>
     );
}

/*
       <div className="product-detail-page">
            <div className="pro-article">
      
            
                <h1 className="header-details">Produktinformation</h1>

              
                <div className="product-detail">
                <h2>Produkt</h2>
                <input type="text" className="product-type" />
                </div>

                
                <div className="product-detail">
                <h2>Kvantité</h2>
                <input type="text" name="quantity" className="product-quantity" />
                </div>

                
                <div className="product-detail">
                <h2>Pris</h2>
                <input type="text" className="product-price" />
                </div>

            
                <div className="product-detail">
                <h2>Beskrivning</h2>
                <input type="text" className="product-description" />
                
                </div>

               
                <div>
             bild
             </div>

            <div className="product-detail">
                <h2>Plats för upphämtning</h2>
                <input type="text" className="product-place"/>

            </div>

            <div className="product-detail">

                <h2>Telefon</h2>
                <input type="text" className="product-phone"/>
            </div>
        
            

        
        </div>
    
    
        </div>
    );
}
 */
export default SellProducts;