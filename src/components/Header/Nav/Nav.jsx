import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {

  return <div className="nav-box">
    <Link className="home-nav" to='/'>Lista Pokémons</Link>
    <Link className="search-nav" to='/search'>Buscar Pokémon</Link>
    <Link className="new-nav" to='/new'>Crear Pokémon</Link>

    
  </div>;
}


export default Nav;