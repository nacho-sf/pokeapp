import React, { useState } from 'react';

function Card(props) {
  
  const [poke,setPoke] = useState(props.value)

  const { name, base_experience } = poke;
  const image = poke.sprites.other.dream_world.front_default;
  
  return <div className="card-comp">
    <h1 className={"h1"}>{name}</h1>
    <div className={"image"}>
      <img src={image} alt={name} />
    </div>
    <div className={"info"}>
      <div className={"exp"}>
        <p><b>Base Experience:</b> {base_experience} points</p>
      </div>
      <div className={"info2"}>
        <div className={"type"}>
          <p><b>Type:</b></p>
          {poke.types.map(types=><p key={crypto.randomUUID()}>{types.type.name}</p>)}
        </div>
        <div className={"abilities"}>
          <p><b>Abilities:</b></p>
          {poke.abilities.map(abilities=><p key={crypto.randomUUID()}>{abilities.ability.name}</p>)}
        </div>
      </div>
    </div>
    
  </div>;
}
export default Card;
