import React from 'react'

const styleMoveItem = {
  display: `inline-block`,
  padding: `2px 5px`,
  border: `1px solid #ccc`,
  marginRight: `5px`,
  marginBottom: `5px`,
  borderRadius: `5px`
}

const PokemonMove = props => (
  <span className="font-mono text-xs" style={styleMoveItem}>{props.move}</span>
)

export default PokemonMove