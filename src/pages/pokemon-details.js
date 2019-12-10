import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// import shortid from 'shortid'

import { fetchingPokemonDetail } from '../store/pokemon-details/action'

const PokemonDetails = props => {
  const {
    name,
    isLoading,
    // detailPokemon,
    fetchingPokemonDetail
  } = props

  useEffect(() => {
    fetchingPokemonDetail({name})
  }, [])

  return (
    <>
      {
        isLoading && (
          <p>Loading...</p>
        )
      }
      <p>Pokemon Details</p>
    </>
  )
}

const mapStateToProps = (state, ownProps) => ({
  name: ownProps.match.params.pokemon,
  isLoading: state.detailPokemon.isLoading,
  detailPokemon: state.detailPokemon.detail 
})

const mapDispatchToProps = dispatch => ({
  fetchingPokemonDetail: pokemon => {
    dispatch(fetchingPokemonDetail(pokemon))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails)