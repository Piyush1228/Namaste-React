import { useState } from "react";
import { LOGO_URL } from "../utlis/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login")
  return (
    <div className="header">
      <div className="logo container">
        <div className="logo">
          <img src={LOGO_URL}></img>
        </div>
      </div>
      <div className="nav container">
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/about">About Us</Link></li>
          <li> <Link to ="/contact">Contact Us</Link></li>
          <li>cart</li>
          <button className="Login" onClick={() => {
            btnNameReact === "Login" ?
            setBtnNameReact("Logout") :
            setBtnNameReact("Login")
          }}> {btnNameReact} </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;