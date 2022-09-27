import React, { Component } from "react";

class Header extends Component {
  render() {
    return <header className={"header"}>
      <input placeholder={"Introduce Pokemon..."}/>
      <button>Enviar</button>
    </header>;
  }
}

export default Header;
