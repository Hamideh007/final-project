import React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <header className="header">
      <div className="logo">Movie finder</div>
      <Nav />
    </header>
  );
}

export default Header;