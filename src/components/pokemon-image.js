import React from 'react'

/**
 * style
 * @param detail 
 */
const style = detail => {
  const wrapper = {}
  const image = {}
  if (!detail) {
    wrapper.width = `100%`
    wrapper.paddingTop = `100%`
    wrapper.overflow = `hidden`
    wrapper.position = `relative`

    image.position = `absolute`
    image.top = `50%`
    image.left = `50%`
    image.transform = `translate(-50%, -50%)`
  }
  return { wrapper, image }
}

const PokemonImage = props => {
  const { wrapper, image } = style(props.detail)
  return (
    <>
      <div style={wrapper}>
        <img src={props.src} alt={props.alt} style={image} />
      </div>
      
    </>
  )
}

export default PokemonImage