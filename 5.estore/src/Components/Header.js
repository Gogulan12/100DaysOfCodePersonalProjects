import React from "react";
import "../Styles/Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreIcon from "@mui/icons-material/Store";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      {/* div for header logo */}
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <div className="header_logo">
          <StoreIcon fontSize="large" className="header_logoImage" />
          <h2 className="header_logoTitle">eSTORE</h2>
        </div>
      </Link>
      {/* div for search */}
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      {/* div for navigation */}
      <div className="header_nav">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="nav_item">
            <span className="nav_itemLineOne">Hello Guest</span>
            <span className="nav_itemLineTwo">Sign In</span>
          </div>
        </Link>
        <div className="nav_item">
          <span className="nav_itemLineOne">Your</span>
          <span className="nav_itemLineTwo">Shop</span>
        </div>
        <Link to={"/checkout"} style={{ textDecoration: "none" }}>
          <div className="nav_itemBasket">
            <ShoppingCartIcon />
            <span className="nav_itemLineTwo nav_basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
