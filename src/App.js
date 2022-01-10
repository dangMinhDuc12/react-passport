
import './App.css';
import Header from "./common/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Profile from "./components/Profile";
import Forgot from "./components/Forgot"

function App() {
  return (
    <Router>
      <Header />



      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/forgot" component={Forgot}/>
      </Switch>
    </Router>
  );
}

export default App;
