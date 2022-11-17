import { Link } from "react-router-dom";
import "../components/Styles/Confirmed.css";


const Confirmed = () => {



    return ( 
        <div>

        <div className="confirmed-page">
            <div>
                <h1>Köp bekräftat!</h1>
                <h2>Tack för att du använder TasteTheWaste</h2>
                <p>En bekräftelse kommer att skickas till din angivna mailadress</p>

            </div>

            <div className="tree-container-">
          <img
            className="confirmed-page-tree"
            src={require("../components/images/tree-landingpage.png")}
            alt="tree"
          />
        </div>

             

            <div className="buttons-confirmed">
                <Link to="/"  className="back-button-confirmed">
              Tillbaka
            </Link>
            </div>
        
    
    
    
        </div>



        </div>
     );
}
 
export default Confirmed;