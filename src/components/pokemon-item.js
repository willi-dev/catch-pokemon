import React from 'react'
import Title from './title'
import Subtitle from './subtitle'
import PokemonImage from './pokemon-image'
import PokemonMove from './pokemon-move'
import PokemonType from './pokemon-type'
import shortid from 'shortid'

/**
 * catchPokemon
 */
const catchPokemon = props => {
  /**
   * here process of catch probability
   */
  const prob = Math.random() * 100
  const isCatched = catchProbability(prob)
  console.log(`${prob} ${isCatched}`)
  if (isCatched) {
    props.catchPokemon(props.detailPokemon)
  }
}

/**
 * catchProbability
 * return catch probability
 * @param value 
 */
export const catchProbability = value => {
  let catchStatus = false
  if (value > 50) {
    catchStatus = true
  }
  return catchStatus
}

const PokemonItem = props => (
  <div className="pokemon-item w-full md:w-1/4 wrounded overflow-hidden">
    <div className="m-2 p-5">
      <PokemonImage src={`https://img.pokemondb.net/artwork/${props.detailPokemon.name}.jpg`} alt={props.name}/>
      <Title text={props.detailPokemon.name} />
      <div className="mb-2">
        <Subtitle text="Types" />
        {
          props.detailPokemon.types.map(typeItem => (
            <PokemonType key={shortid.generate()} type={typeItem.type.name} />
          ))
        }
      </div>
      <div className="mb-2">
        <Subtitle text="Moves" />
        {
          props.detailPokemon.moves.map(moveItem => (
            <PokemonMove key={shortid.generate()} move={moveItem.move.name} />
          ))
        }
      </div>
      <button
        className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => catchPokemon(props)}
      >
        Catch
      </button>
    </div>
  </div>
)

export default PokemonItem