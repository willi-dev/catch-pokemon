import React from 'react'
import Title from './title'
import PokemonImage from './pokemon-image'

const MyPokemonListItem = props => {

  const remove = name => {
    props.removePokemon(name)
  }

  return (
    <div className="my-pokemon-list-item w-full md:w-1/3 wrounded overflow-hidden">
      <div className="m-2 p-1 shadow-lg">
        <div className="flex">
          <div className="w-1/2">
            <PokemonImage src={`https://img.pokemondb.net/artwork/${props.name}.jpg`} alt={props.name} />
          </div>
          <div className="w-1/2 p-2">
            <Title text={props.customName} />
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white text-center font-bold text-xs p-1" onClick={() => remove(props.name)}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyPokemonListItem