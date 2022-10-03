import React from "react";
import useFetch from '../../../hooks/useFetch';
import { Link } from "react-router-dom";

const Home = () => {

  const { loading, result } = useFetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100');

  return <div className="home-box">
    {loading ? <h3>Cargando...</h3> : result.results.map((pokemon, i) =>
        <div 
        key={crypto.randomUUID()}
        className="card-home-comp"
        >
          <Link 
          className="poke-link" 
          to={"/pokemon/"+i}
          >
            <h2 className={"h2"}>{pokemon.name}</h2>
            <div className={"image-card-home"}>
              <div className="empty"></div>
              <div className={"image-card-ball"}></div>
            </div>
              </Link>
            </div>
        
    )}
  </div>;
}

export default Home;
