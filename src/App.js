import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Details from "./components/Details";
import List from "./components/List";
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
         <Route exact path="/" component={List}/>
         <Route exact path="/details/:email" component={Details}/>
      </Switch>
    </Router>
  );
}

export default App;
