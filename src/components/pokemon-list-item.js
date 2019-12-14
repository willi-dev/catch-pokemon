import React from 'react'
import { Link } from 'react-router-dom'

import PokemonImage from './pokemon-image'

const PokemonListItem = props => (
  <div className="pokemon-list-item">
    <PokemonImage src={`https://img.pokemondb.net/artwork/${props.name}.jpg`} alt={props.name}/>
    <Link to={`/pokemon/${props.name}`}>{props.name}</Link>
  </div>
)

export default PokemonListItem