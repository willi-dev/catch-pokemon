import React from 'react'
import { Link } from 'react-router-dom'

const PokemonListItem = props => (
  <div>
    <img src={`https://img.pokemondb.net/artwork/${props.name}.jpg`} alt={props.name}/>
    
    <Link to={`/pokemon/${props.name}`}>{props.name}</Link>
  </div>
)

export default PokemonListItem