import Home from "./views/home";
import Favorites from "./views/favorites";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Woof woof!</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/favorites">Favorites</Link>
        </nav>
        <div style={{ marginTop: "24px" }}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/favorites">
              <Favorites />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
