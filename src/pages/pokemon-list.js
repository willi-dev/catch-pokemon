import React, { useEffect } from 'react'
import  { connect } from 'react-redux'
import shortid from 'shortid'

import PokemonListItem from '../components/pokemon-list-item'

import { fetchingListPokemon } from '../store/pokemon-list/action'

const PokemonList = props => {
  const { isLoading, listMonster } = props // store state
  const { fetchingListPokemon } = props // action

  const handleScroll = async () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return
    await fetchingListPokemon(props.currentPage)
  }

  useEffect(() => {
    if (listMonster.length === 0) {
      const fetchInit = (async () => await fetchingListPokemon(props.currentPage))
      fetchInit()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  })

  return (
    <div className="pokemon-list">
      <div className="flex flex-wrap">
        {
          listMonster.map( monster => {
            return <PokemonListItem key={shortid.generate()} {...monster} />
          })
        }
      </div>
      {
        isLoading && (
          <p>loading...</p>
        )
      }
    </div>
  )
}

const mapStateToProps = state => ({
  isLoading: state.listPokemon.isLoading,
  listMonster: state.listPokemon.list,
  currentPage: state.listPokemon.currentPage
})

const mapDispatchToProps = dispatch => ({
  fetchingListPokemon: page => {
    dispatch(fetchingListPokemon(page))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)