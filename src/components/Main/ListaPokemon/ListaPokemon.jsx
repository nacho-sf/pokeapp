import React, { useEffect, useState } from 'react';
import Card from '../ListaPokemon/Card';

const ListaPokemon = () => {

  const [pokemon, setPokemon] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() =>{
    const getPokemon = async () =>{
      if(input){
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
      const data = await resp.json();
      setPokemon([data, ...pokemon]);
      }
    }
    getPokemon();
  }, [input]);
  
  
  const addPokemon = async (e) => {
    e.preventDefault();
    setInput(e.target.pokeName.value.toLowerCase());
    e.target.reset();
  } 

  return (
    <section className={"lista-comp"}>
      <section className={"lista-input"}>
        <form onSubmit={addPokemon}>
          <input type="text" name="pokeName" placeholder={"Introduce pokemon..."} />
          <button type="submit" >Enviar</button>
        </form>
      </section>
      <section className={"lista-cards"}>
        {pokemon!==[]?pokemon.map(pokemon=><Card value={pokemon} key={crypto.randomUUID()}/>):""}
      </section>
    </section>
    );
}

export default ListaPokemon;
