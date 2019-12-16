import React from 'react'
import { connect } from 'react-redux'
import shortid from 'shortid'
import MyPokemonListItem from '../components/my-pokemon-list-item'

const MyPokemonList = props => {
  const { listMyPokemon } = props
  console.log( props )
  return (
    <div>
      <p>my pokemon list</p>
      {
        listMyPokemon.length > 0 && (
          listMyPokemon.map(myPokemon => {
            return <MyPokemonListItem key={shortid.generate()} {...myPokemon} />
          })
        )
      }
    </div>
  )
}

const mapStateToProps = state => ({
  listMyPokemon: state.myPokemon.list
})

const mapDispatchToProps = dispatch => ({
  fetchListMyPokemon: data => {
    // dispatch()
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MyPokemonList)