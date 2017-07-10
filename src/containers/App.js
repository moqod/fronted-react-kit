import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Main from './Main'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
  )

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/main">Main</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/main" component={Main}/>
    </div>
  </Router>
  )
export default App
