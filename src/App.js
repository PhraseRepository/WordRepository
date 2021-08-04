import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./components/signin/signin.js";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <h1>SIGN IN</h1>
          <SignIn></SignIn>
        </Route>
        <Route path="/">
          <div className="App">
            <h1>HELLO</h1>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
