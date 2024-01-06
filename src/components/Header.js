import { LOGO_URL } from "../utils/constant";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img className="logo" src={LOGO_URL} alt="app Logo" />
      <h1>SwiGhee</h1>
      <h3>Pehle pet pooja phir kaam dooja</h3>
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About us </li>
        <li>Contact us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
