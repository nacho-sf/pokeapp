import React, { useEffect, useState } from 'react';
import Card from '../ListaPokemon/Card';

const ListaPokemon = () => {

  const [pokemon, setPokemon] = useState({});

  const [input, setInput] = useState("");

  useEffect(() =>{
    const getPokemon = async () =>{
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${"charizard"}`);
      const data = await resp.json();
      setPokemon(data);
    }
    getPokemon();
  }, []);
  
  const addPokemon = (e) => {
    e.preventDefault();
    const pokeName = e.target.pokeName.value;
    setInput(pokeName);
  } 

  return (
    <fieldset className={"lista-pokemon"}>
      <legend>List</legend>
      <form onSubmit={addPokemon}>
        <input name="pokeName" placeholder={"Introduce pokemon..."} />
        <button type="submit" >Enviar</button>
      </form>
      <Card />
    </fieldset>
    );
}

export default ListaPokemon;
