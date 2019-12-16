import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import PokemonItem from '../components/pokemon-item'
import Loading from '../components/loading'

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
    <div style={{ position: `relative`, width: `100%`, height: `100vh` }}>
      {
        isLoading && (
          <Loading />
        )
      }
      <div className="flex flex-wrap justify-center mb-16">
      {
        Object.keys(detailPokemon).length > 0 && (
          <PokemonItem {...props} />
        )
      }
      </div>
    </div>
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