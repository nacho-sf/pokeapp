import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {

  return <div className="nav-box">
    <Link className="home-nav" to='/'>Home</Link>
    <Link className="new-nav" to='/new'>Crea tu pokemon</Link>
    <Link className="search-nav" to='/search'>Buscar pokemons</Link>
  </div>;
}


export default Nav;