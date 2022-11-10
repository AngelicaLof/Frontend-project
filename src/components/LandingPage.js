import { Link } from "react-router-dom";
import "../components/Styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page-container">
        <div>
          <h1>Taste The Waste</h1>
        </div>
        <div>
          <h2>Din handelsplats för att minimera matsvinnet</h2>
        </div>
        <div>
          <p>
            Här erbjuds råvaror med kort datum eller som har små skönhetsfel
            till ett förmånligt pris. Bra för miljön och din plånbok.
          </p>
        </div>
        <div className="tree-container">
          <img
            className="landing-page-tree"
            src={require("../components/images/tree-landingpage.png")}
            alt="tree"
          />
        </div>
        <div className="ground-color">
          <div className="buttons">
            <Link to="/BuyProducts" className="buy-button">
              Köp
            </Link>
            <Link to="/SellProducts" className="sell-button">
              Sälj
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;