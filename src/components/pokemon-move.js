import React from 'react'

const styleMoveItem = {
  display: `inline-block`,
  padding: `5px`,
  border: `1px solid #ccc`,
  marginRight: `5px`,
  marginBottom: `5px`,
  borderRadius: `5px`
}

const PokemonMove = props => (
  <span style={styleMoveItem}>{props.move}</span>
)

export default PokemonMove