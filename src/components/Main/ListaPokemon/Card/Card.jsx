import React, { Component } from "react";

class Card extends Component {
  
  constructor(props) {
    super(props)
  
    
  }


  

  render() {
    //const {name,height,weight,base_experience} = this.props.value;
    //const image = this.props.pokeObj.sprites.other.dream_world.front_default || "https://www.timandorra.com/wp-content/uploads/2016/11/Imagen-no-disponible-282x300.png"
    //const {front_default} = this.props.pokeObj.sprites.other.dream_world;
    //const {typesRoot} = this.props.pokeObj;
    
    //const image = this.props.value.sprites.front_default || this.props.image

    return <fieldset className={"card"}>
      <legend>Card</legend>
      <article className={"card-box"}>
        <p>{this.props.value.name}</p>
        <p>{this.props.value.height}</p>
        <p>{this.props.value.weight}</p>
        <p>{this.props.value.base_experience}</p>
        
{
        //<img src={image} alt={this.props.value.name} />
      }
      {
      //<img src={image} alt={name} />
      }
        
        
      {
      //typesRoot.types.map((types)=> <p>{types.type.name}</p>)
      }
        
        {/*
        <h3>Nombre: {name}</h3>
        <p>Altura: {height} uda</p>
        <p>Peso: {weight} udm</p>
        <p>Experiencia base: {base_experience} puntos</p>
    */}
      </article>
    </fieldset>;
  }
}

export default Card;
