import React, { useEffect, useState } from 'react';
import Card from '../ListaPokemon/Card';

const ListaPokemon = () => {

  const [pokemon, setPokemon] = useState({});

  const [input, setInput] = useState("");

  

  useEffect(() =>{
    const getPokemon = async () =>{
      if(input){
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
      const data = await resp.json();
      setPokemon(data);
      }else{
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
        const data = await resp.json();
        setPokemon(data);
      }
    }
    getPokemon();
  }, [input]);
  
  
  const addPokemon = (e) => {
    e.preventDefault();
    const input = e.target.pokeName.value;
    setInput(input);
    e.target.reset();
  } 

  return (
    <fieldset className={"lista-pokemon"}>
      <legend>List</legend>
      <form onSubmit={addPokemon}>
        <input name="pokeName" placeholder={"Introduce pokemon..."} />
        
        <button type="submit" >Enviar</button>
      </form>
      {pokemon!=={}?<Card value={pokemon}/>:""}
    </fieldset>
    );
}

export default ListaPokemon;
