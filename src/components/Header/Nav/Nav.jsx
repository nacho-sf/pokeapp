import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {

  return <div className="nav-box">
    <Link className="home-nav" to='/'>Listado</Link>
    <Link className="search-nav" to='/search'>Buscar</Link>
    <Link className="new-nav" to='/new'>Crear</Link>

    
  </div>;
}


export default Nav;