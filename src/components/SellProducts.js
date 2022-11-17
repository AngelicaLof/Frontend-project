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

    SetIsPending(true);
    
    fetch('http://localhost:8000/posts', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post)
    }).then(() => {
        console.log('Annons publicerad');
        SetIsPending(false);
        navigate("/BuyProducts");
        alert("Din annons är publicerad!");
    })
}




    return (  


        <div className="sell-page">
            <div className="sell-product">

<form onSubmit={handleSubmit}>
    <h1>Sälj din vara</h1>
    <p>*Fyll i de följande vita fälten nedan med information om din produkt</p>
    <h2 className="header">Produktinformation</h2>
    <div>
   <h3>Typ av produkt</h3>
    <input 
    type="text" className="inputfield-product"
    required 
    value ={product}
    onChange={(e) => setProduct(e.target.value)}
    />
    </div>

    <div>
    <h3>Kvantitet</h3>
    <input 
    type="text" className="inputfield-quantity"
    required
     value ={quantity}
    onChange={(e) => setQuantity(e.target.value)}
    />
    </div>

    <div>
    <h3>Pris</h3>
    <input 
    type="text" className="inputfield-price"
    required
     value ={price}
    onChange={(e) => setPrice(e.target.value)}
    />
    </div>


    <div>
    <h3>Beskrivning</h3>
    <div>
    <textarea required className="input-area" rows="5" cols="30"
     value ={description}
    onChange={(e) => setDescription(e.target.value)}
    ></textarea>
    </div>
    </div>

<div>
   <h3>Bild</h3>
    <input 
    type="text" className="inputfield-image"
    
    value ={image}
    onChange={(e) => setImage(e.target.value)}
    />
     </div>


<div>
   <h3>Plats för upphämtning</h3>
    <input 
    type="text" className="inputfield-place"
    required 
    value ={place}
    onChange={(e) => setPlace(e.target.value)}
    />
     </div>

        <div>
   <h3>Telefonnummer</h3>
    <input 
    type="text" className="inputfield-number"
    required 
    value ={number}
    onChange={(e) => setNumber(e.target.value)}
    />
    
    </div>
<div className="buttons">

    { !isPending && <button className="publish-button">Annonsera</button>}
    { isPending && <button className="publish-button" disabled>Annonserar..</button>}

    </div>
</form>

</div>

        </div>
     );
}


export default SellProducts;