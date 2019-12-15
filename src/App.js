import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PokemonList from './pages/pokemon-list'
import PokemonDetails from './pages/pokemon-details'
import MyPokemon from './pages/my-pokemon'

const App = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="page__pokemon-list page">
          <Switch>
            <Route exact path="/" component={PokemonList}/>
            <Route path="/pokemon/:pokemon" component={PokemonDetails} />
            <Route path="/my-pokemon" component={MyPokemon} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
