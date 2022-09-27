import React, { Component } from "react";
import ListaPokemon from "./ListaPokemon";


class Main extends Component {
  render() {
    return <fieldset className={"main"}>
      <legend>Main</legend>
      Main
      <ListaPokemon />
    </fieldset>;
  }
}

export default Main;
