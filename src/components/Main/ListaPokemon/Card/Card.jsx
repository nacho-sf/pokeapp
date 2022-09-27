import React, { Component } from "react";

class Card extends Component {
  render() {
    return <fieldset className={"card"}>
      <legend>Card</legend>
      <div className={"card-box"}></div>
    </fieldset>;
  }
}

export default Card;
