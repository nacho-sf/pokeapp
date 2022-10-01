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
  
  
  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value.toLowerCase());
  } 

  return (
    <section className={"lista-comp"}>
      <section className={"lista-input"}>
        <form onChange={handleInputChange}>
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
