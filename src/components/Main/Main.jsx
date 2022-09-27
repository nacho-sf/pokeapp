import React, { Component } from "react";

import ListaPokemon from "./ListaPokemon";
import Card from './Card';

class Main extends Component {
  render() {
    return <main className={"main"}>
      <Card />
      <ListaPokemon />
    </main>;
  }
}

export default Main;
