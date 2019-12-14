import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// import shortid from 'shortid'

import PokemonItem from '../components/pokemon-item'

import { fetchingPokemonDetail } from '../store/pokemon-details/action'

const PokemonDetails = props => {
  const {
    name,
    isLoading,
    detailPokemon,
    fetchingPokemonDetail
  } = props

  useEffect(() => {
    fetchingPokemonDetail({name})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <p>Pokemon Details</p>
      {
        isLoading && (
          <p>Loading...</p>
        )
      }
      {
        Object.keys(detailPokemon).length > 0 && (
          <PokemonItem {...detailPokemon} />
        )
      }
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