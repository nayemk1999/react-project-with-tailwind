import logo from './logo.svg';
import './App.css';
import "tailwindcss/tailwind.css"
import Header from './Components/Home/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router >
      <Switch>
        <Route exact to="/">
          <Header/>
        </Route>
        <Route to="/home">
          <Header/>
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
