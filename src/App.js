import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Details from "./components/Details";
import List from "./components/List";
import Navbar from './components/Navbar';
import { Provider } from 'react-redux'; 
import Store from './redux/Store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartButtonforMobile from "./components/CartButtonforMobile";

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Navbar/>
        <CartButtonforMobile/>
        <ToastContainer/>
        <Switch>
          <Route exact path="/" component={List}/>
          <Route exact path="/details/:email" component={Details}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
