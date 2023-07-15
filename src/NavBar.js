import "./Components/NavBar.css";
import { Link } from "react-router-dom";
import React from "react";

function NavBar() {
  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="user-box">
            {" "}
            <Link className="links" to="/">
              User
            </Link>
          </div>
          <div className="product-box">
            {" "}
            <Link className="links" to="/Product">Products</Link>
          </div>
        </div>
       
      </nav>
    </>
  );
}

export default NavBar;
