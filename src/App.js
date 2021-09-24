import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { useEffect } from "react";
import SignIn from "./pages/signin.js";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
import { createClient } from "@supabase/supabase-js";
import Search from "./pages/Search";
import SignOut from "./pages/SignOut";
const supabase = createClient("https://hiiwioouscmwdgfhobom.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyODA0MTA5NiwiZXhwIjoxOTQzNjE3MDk2fQ.uMF3eAqCD2zgJnJJL6h2rKYSH-d2H6rsGrXGF74X-70");

function App() {
    useEffect(() => {
        const user = supabase.auth.user();
        const session = supabase.auth.session();
        console.log("loading");
        console.log(user, session);
    }, []);
    return (
        <Router>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div className='page'>
                    <Switch>
                        <Route path='/signin'>
                            <SignIn></SignIn>
                        </Route>
                        <Route path='/signout'>
                            <SignOut></SignOut>
                        </Route>
                        <Route path='/home'>
                            <Home></Home>
                        </Route>
                        <Route path='/create'>
                            <Create></Create>
                        </Route>
                        <Route path='/search/:tags?'>
                            <Search></Search>
                        </Route>
                        <Route path='/'>
                            <Home></Home>
                        </Route>
                    </Switch>
                </div>
                <Navbar></Navbar>
            </div>
        </Router>
    );
}

export default App;
