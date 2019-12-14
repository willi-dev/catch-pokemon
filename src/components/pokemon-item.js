import React from 'react'
import Title from './title'
import Subtitle from './subtitle'
import PokemonImage from './pokemon-image'
import PokemonMove from './pokemon-move'
import PokemonType from './pokemon-type'
import shortid from 'shortid'

const PokemonItem = props => (
  <div className="pokemon-item">
    <PokemonImage src={`https://img.pokemondb.net/artwork/${props.name}.jpg`} alt={props.name}/>
    {props.name}
    <Title text={props.name} />
    <div>
      <Subtitle text="Moves" />
      {
        props.moves.map(moveItem => (
          <PokemonMove key={shortid.generate()} move={moveItem.move.name} />
        ))
      }
    </div>
    
    <div>
      <Subtitle text="Types" />
      {
        props.types.map(typeItem => (
          <PokemonType key={shortid.generate()} type={typeItem.type.name} />
        ))
      }
    </div>

    <button>
      Catch
    </button>
    
  </div>
)

export default PokemonItem