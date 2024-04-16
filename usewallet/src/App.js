import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './Login/Login';


function App() {


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>


        </Switch>
      </div>
    </Router>

    

  );
}

export default App;
