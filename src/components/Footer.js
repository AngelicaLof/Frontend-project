import "../components/Styles/Footer.css";
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer-content">
             <div className="social-media"> 
                <div className="icon"><FaFacebookSquare/></div> 
                <div className="icon"><FaInstagramSquare/> </div> 
                <div className="icon"><FaTwitterSquare/> </div>
         </div>
            
        <div className="footer-copyright">© 2022 TasteTheWaste</div>
          </div>

        </div>
        
     );
}
 
export default Footer;