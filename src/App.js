import logo from './logo.svg';
import './App.css';
import "tailwindcss/tailwind.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';

function App() {
  return (
    <Router >
      <Switch>
        <Route exact to="/">
        <Home/>
        </Route>
        <Route to="/home">
         <Home/>
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
