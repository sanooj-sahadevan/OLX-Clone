/* eslint-disable no-unused-vars */
import React from "react";
import { useContext } from "react";
import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function Header() {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigate("/login");
  };

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        {user ? (
          <>
            <p>{user.displayName}</p>
            <button
              onClick={handleLogOut}
              className="underline font-semibold"
              style={{
                color: "blue", // Change color to whatever you like
                filter: "blur(0.5px)", // Adds a blur effect
                transition: "color 0.3s, filter 0.3s", // Smooth transition for color and blur
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <button>
            <Link className="underline font-semibold" to="/login"      style={{
                color: "blue", // Change color to whatever you like
                filter: "blur(0.5px)", // Adds a blur effect
                transition: "color 0.3s, filter 0.3s", // Smooth transition for color and blur
              }}   >
              Login
            </Link>
          </button>
        )}
        {user ? (
          <div className="sellMenu" onClick={() => navigate("/addProduct")}>
            <SellButton></SellButton>
            <div className="sellMenuContent">
              <SellButtonPlus></SellButtonPlus>
              <span>SELL</span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Header;
