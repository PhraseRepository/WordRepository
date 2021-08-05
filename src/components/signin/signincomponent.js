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
      window.alert("Did you mean to sign in?");
    } else {
      const { data, error } = await supabase.from("users").insert([{ email: user.email, userId: user.id }]);
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
      console.log(supabase.auth.user().id);
      console.log("Successful sign in ");
      changeStatus(true);
    }
  }
  return (
    <div>
      <h1>Email</h1>
      <input onChange={(e) => setEmail(e.target.value)}></input>
      <h1>Password</h1>
      <input onChange={(e) => setPassword(e.target.value)} type="password"></input>
      <button onClick={signIn}>Sign In</button>
      <button onClick={signUp}>Sign Up</button>
      {loggedIn ? <Redirect to="/" /> : <div />}
    </div>
  );
};

export default SignInComponent;
