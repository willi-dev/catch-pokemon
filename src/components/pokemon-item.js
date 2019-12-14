import React from 'react'
import Title from './title'
import Subtitle from './subtitle'
import PokemonImage from './pokemon-image'
import PokemonMove from './pokemon-move'
import PokemonType from './pokemon-type'
import shortid from 'shortid'

const PokemonItem = props => (
  <div className="pokemon-item w-full md:w-1/4 wrounded overflow-hidden">
    <div className="m-2 p-5">
      <PokemonImage src={`https://img.pokemondb.net/artwork/${props.name}.jpg`} alt={props.name}/>
      <Title text={props.name} />
      <div className="mb-2">
        <Subtitle text="Types" />
        {
          props.types.map(typeItem => (
            <PokemonType key={shortid.generate()} type={typeItem.type.name} />
          ))
        }
      </div>
      <div className="mb-2">
        <Subtitle text="Moves" />
        {
          props.moves.map(moveItem => (
            <PokemonMove key={shortid.generate()} move={moveItem.move.name} />
          ))
        }
      </div>

      <button className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
        Catch
      </button>
    </div>
  </div>
)

export default PokemonItem