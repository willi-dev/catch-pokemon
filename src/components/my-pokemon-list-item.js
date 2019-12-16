import React from 'react'
import Title from './title'
import PokemonImage from './pokemon-image'

const MyPokemonListItem = props => (
  <div className="my-pokemon-list-item w-full md:w-1/3 wrounded overflow-hidden">
    <div className="m-2 p-1 shadow-lg">
      <div className="flex">
        <div className="w-1/2">
          <PokemonImage src={`https://img.pokemondb.net/artwork/${props.name}.jpg`} alt={props.name} />
        </div>
        <div className="w-1/2 p-2">
          <Title text={props.name} />
          <button className="bg-red-500 hover:bg-red-700 text-white text-center font-bold text-xs p-1">
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default MyPokemonListItem