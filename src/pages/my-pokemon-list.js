import React from 'react'
import { connect } from 'react-redux'
import shortid from 'shortid'
import MyPokemonListItem from '../components/my-pokemon-list-item'
import { removingPokemon } from '../store/my-pokemon/action'

const MyPokemonList = props => {
  const { listMyPokemon, removeMyPokemon } = props

  /**
   * removePokemon
   * removing pokemon from my pokemon list
   * @param name 
   */
  const removePokemon = name => {
    const stillMyPokemon = listMyPokemon.filter(myPokemon => {
      return myPokemon.name !== name
    })
    removeMyPokemon(stillMyPokemon)
  }

  return (
    <div className="mypokemon-list">
      {
        listMyPokemon.length === 0 && (
          <div className="text-center" style={{ width: `100%`, height: `100vh`, position: `absolute`, left: 0, top: 0}}>
            <h2 className="font-mono">You have no monster...!</h2>
          </div>
        )
      }
      {
        listMyPokemon.length > 0 && (
          listMyPokemon.map(myPokemon => {
            return <MyPokemonListItem key={shortid.generate()} {...myPokemon} removePokemon={removePokemon} />
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
  removeMyPokemon: data => {
    dispatch(removingPokemon(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MyPokemonList)