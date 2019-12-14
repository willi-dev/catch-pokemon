import React from 'react'

const styleTypeItem = {
  display: `inline-block`,
  padding: `5px`,
  border: `1px solid #ccc`,
  marginRight: `5px`,
  marginBottom: `5px`,
  borderRadius: `5px`
}

const PokemonType = props => (
  <span style={styleTypeItem}>{props.type}</span>
)

export default PokemonType