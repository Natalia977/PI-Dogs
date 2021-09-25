import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import BreedCreate from "./components/BreedCreate";
import Detail from './components/Detail';
import About from './components/About';
  

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/home' component={Home}/>
        <Route path='/breed' component={BreedCreate}/>
        <Route exact path='/home/:id' component={Detail}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
