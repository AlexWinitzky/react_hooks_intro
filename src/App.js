import React from 'react'
import Reducer from './components/Reducer'
import State from './components/State'
import Effect from './components/Effect'
import { Route, Switch, Link, } from 'react-router-dom'
import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path='/reducer' component={Reducer} />
      <Route exact path='/state' component={State} />
      <Route exact path='/effect' component={Effect} />
    </Switch>

    <div className="App">
      <header className="App-header">
        <h1>Introduction to Stateful Logic with React Hooks</h1>
        <div>
          <Link style={{color: 'green'}} to="/state">
            Try useState
          </Link>
          <div>|</div>
          <Link style={{color: 'green'}} to="/reducer">
            Try useReducer
          </Link>
          <div>|</div>
          <Link style={{color: 'green'}} to="/effect">
            Try useEffect
          </Link>
        </div>
      </header>
    </div>
  </>
)

export default App
