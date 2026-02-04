import { LOGO_URL } from "../utlis/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo container">
        <div className="logo">
          <img src={LOGO_URL}></img>
        </div>
      </div>
      <div className="nav container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;