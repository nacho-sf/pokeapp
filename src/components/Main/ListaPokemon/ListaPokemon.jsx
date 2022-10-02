import React, { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import Card from '../ListaPokemon/Card';


const ListaPokemon = () => {

  const [pokemon, setPokemon] = useState([]);
  const [input, setInput] = useState("");
  const debounced = useDebouncedCallback((input) => {
    setInput(input);
  }, 1500);

  
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
  
  

  return (
    <section className={"lista-comp"}>
      <section className={"lista-input"}>
        <form onChange={(e) => debounced(e.target.value.toLowerCase())}>
          <input type="text" name="pokeName" placeholder={"Introduce pokemon..."}  />
        </form>
      </section>
      <section className={"lista-cards"}>
        {pokemon!==[]?pokemon.map(pokemon=><Card value={pokemon} key={crypto.randomUUID()}/>):""}
      </section>
    </section>
    );
}

export default ListaPokemon;