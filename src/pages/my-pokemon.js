import React from 'react'
import { connect } from 'react-redux'

const MyPokemon = () => {
  return (
    <>
      <p>my pokemon list</p>
    </>
  )
}

const mapStateToProps = state => ({
  listMyPokemon: state.myPokemon.list
})

const mapDispatchToProps = dispatch => ({
  fetchListMyPokemon: data => {
    dispatch()
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MyPokemon)