import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasketSharp";
import { useStateValue } from "../stateProvider/StateProvider";
import { auth } from "../../firebase";
function Header() {
  const [{ basket, user }] = useStateValue();
  const login = () => {
    if (user) auth.signOut();
  };
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link
          to={!user && "/login"}
          className="header__link"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          <div onClick={login} className="header__option">
            <span className="header_optionLineOne">Hello, {user?.email}</span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link
          to="/"
          className="header__link"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          <div className="header__option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link
          to="/"
          className="header__link"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          <div className="header__option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link
          to="/checkout"
          className="header__link"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          <div
            className="header__optionBasket"
            style={{ display: "flex", alignItems: "center" }}
          >
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
