import React, { useState, useEffect } from 'react'
import  { connect } from 'react-redux'
import shortid from 'shortid'

import PokemonListItem from '../components/pokemon-list-item'

import { fetchingListPokemon } from '../store/pokemon-list/action'

const PokemonList = props => {
  const [page, setPage] = useState(1)

  const { isLoading, listMonster } = props // store state
  const { fetchingListPokemon } = props // action

  useEffect(() => {
    fetchingListPokemon(page)
  }, [fetchingListPokemon, page])

  const nextClick = (e) => {
    setPage(page + 1)
  }

  return (
    <>  
      <h1>Pokemon List</h1>
      {
        isLoading && (
          <p>loading pokemon</p>
        )
      }
      {
        listMonster.map( monster => {
          return <PokemonListItem key={shortid.generate()} {...monster} />
        })
      }
      <button onClick={(e) => nextClick(e)} disabled={isLoading}>
        Next Page
      </button>
    </>
  )
}

const mapStateToProps = state => ({
  isLoading: state.listPokemon.isLoading,
  listMonster: state.listPokemon.list
})

const mapDispatchToProps = dispatch => ({
  fetchingListPokemon: page => {
    dispatch(fetchingListPokemon(page))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)