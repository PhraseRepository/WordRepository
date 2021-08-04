import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./pages/signin.js";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
function App() {
    return (
        <Router>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div className='page'>
                    <Switch>
                        <Route path='/signin'>
                            <h1>SIGN IN</h1>
                            <SignIn></SignIn>
                        </Route>
                        <Route path='/home'>
                            <Home></Home>
                        </Route>
                        <Route path='/'>
                            <Explore></Explore>
                        </Route>
                    </Switch>
                </div>
                <Navbar></Navbar>
            </div>
        </Router>
    );
}

export default App;
