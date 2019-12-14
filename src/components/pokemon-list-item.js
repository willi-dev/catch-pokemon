import React from 'react'
import { Link } from 'react-router-dom'

import PokemonImage from './pokemon-image'
import Title from './title'

const PokemonListItem = props => (
  <div className="pokemon-list-item w-full md:w-1/4 wrounded overflow-hidden">
    <div className="m-2 p-5 shadow-lg">
      <PokemonImage src={`https://img.pokemondb.net/artwork/${props.name}.jpg`} alt={props.name}/>
      <Title text={props.name}/>
      <Link to={`/pokemon/${props.name}`} className="block w-full rounded-full bg-red-500 hover:bg-red-700 text-white font-bold p-2 text-center">
        Details Monster
      </Link>
    </div>
  </div>
)

export default PokemonListItem