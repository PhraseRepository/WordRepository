import { useState, useEffect, useRef } from "react";
import { Redirect } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://hiiwioouscmwdgfhobom.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyODA0MTA5NiwiZXhwIjoxOTQzNjE3MDk2fQ.uMF3eAqCD2zgJnJJL6h2rKYSH-d2H6rsGrXGF74X-70");

const SignInComponent = (params) => {
    const [emailEntered, setEmail] = useState("");
    const [passwordEntered, setPassword] = useState("");
    const [loggedIn, changeStatus] = useState(false);
    async function signUp() {
        const { user, session, error } = await supabase.auth.signUp({
            email: emailEntered,
            password: passwordEntered,
        });
        if (error) {
            window.alert("Sorry, something went wrong.");
        } else {
            const { data, error } = await supabase.from("users").insert([{ email: user?.email, userId: user?.id }]);
            window.alert("You have signed up");
        }
    }
    async function signIn() {
        const { user, session, error } = await supabase.auth.signIn({
            email: emailEntered,
            password: passwordEntered,
        });
        if (error) {
            window.alert("Check your email and password and try again!");
        }
        if (user) {
            console.log(supabase.auth.user()?.id);
            console.log("Successful sign in ");
            changeStatus(true);
        }
    }
    return (
        <div>
            <h1 className='page-heading'>SIGN IN</h1>
            <h1 className='input-label'>Email</h1>
            <input type='text' onChange={(e) => setEmail(e.target.value)}></input>
            <h1 className='input-label'>Password</h1>
            <input onChange={(e) => setPassword(e.target.value)} type='password' style={{ marginBottom: "2rem" }}></input>
            <button className='form-button' style={{ marginRight: "2rem" }} onClick={signIn}>
                Sign In
            </button>
            <button className='form-button' onClick={signUp}>
                Sign Up
            </button>
            {loggedIn && supabase.auth.user() !== undefined ? <Redirect to='/' /> : <div />}
        </div>
    );
};

export default SignInComponent;
