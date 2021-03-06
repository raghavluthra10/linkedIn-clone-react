import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
 

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login  />
          </Route>
          <Route exact path='/home'>
            <Header  />
            <Home  />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;


// 3:02:00