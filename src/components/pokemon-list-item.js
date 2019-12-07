import React from 'react'

const PokemonListItem = props => (
  <div>
    <img src={`https://img.pokemondb.net/artwork/${props.name}.jpg`} alt={props.name}/>
    {props.name}
  </div>
)

export default PokemonListItem