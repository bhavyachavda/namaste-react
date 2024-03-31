import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, SetBtnNameReact] = useState("Login");
  // console.log("header render");

  //if no dependency array => useEffect is called on every render
  //if dependency array is empty = [] => useEffect is called on initial render(just once)
  //id dependency array is [btnName] => called everytime btnNameReact is updated
  useEffect(() => {
    console.log("useEffect Called");
  }, [btnNameReact]);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status: {onlineStatus? "✅" : "🔴" }
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About US</Link>
          </li>
          <li>
            <Link to="/contact">Contact US</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="login"
            onClick={() =>
              btnNameReact === "Login"
                ? SetBtnNameReact("Logout")
                : SetBtnNameReact("Login")
            }
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
