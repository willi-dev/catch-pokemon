import React from 'react'
import { Link } from 'react-router-dom'

import PokemonImage from './pokemon-image'
import Title from './title'

const PokemonListItem = props => (
  <div className="pokemon-list-item w-1/2 md:w-1/4 wrounded overflow-hidden">
    <div className="m-2 p-3 shadow-lg text-center">
      <PokemonImage src={`https://img.pokemondb.net/artwork/${props.name}.jpg`} alt={props.name}/>
      <Title text={props.name}/>
      <Link to={`/pokemon/${props.name}`} className="block w-full rounded-full bg-red-500 hover:bg-red-700 text-white text-xs font-bold p-2 text-center">
        Details
      </Link>
    </div>
  </div>
)

export default PokemonListItem