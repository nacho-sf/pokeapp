import React, { Component } from "react";
import ListaPokemon from "./ListaPokemon";


class Main extends Component {
  render() {
    return <section className={"main"}>
      <ListaPokemon />
    </section>;
  }
}

export default Main;
