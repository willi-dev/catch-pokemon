import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import PokemonItem from '../components/pokemon-item'

import { fetchingPokemonDetail } from '../store/pokemon-details/action'
import { catchingPokmeon } from '../store/my-pokemon/action'

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
      {
        isLoading && (
          <p>Loading...</p>
        )
      }
      <div className="flex flex-wrap justify-center">
      {
        Object.keys(detailPokemon).length > 0 && (
          <PokemonItem {...props} />
        )
      }
      </div>
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
  },
  catchPokemon: pokemon => {
    dispatch(catchingPokmeon(pokemon))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails)