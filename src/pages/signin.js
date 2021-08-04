import { useState, useEffect, useRef } from "react";
import { createClient } from "@supabase/supabase-js";
import SignInComponent from "../components/signin/signincomponent";
const supabase = createClient("https://hiiwioouscmwdgfhobom.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyODA0MTA5NiwiZXhwIjoxOTQzNjE3MDk2fQ.uMF3eAqCD2zgJnJJL6h2rKYSH-d2H6rsGrXGF74X-70");

const SignIn = (params) => {
  return (
    <div>
      <h1>Hello</h1>
      <SignInComponent></SignInComponent>
    </div>
  );
};

export default SignIn;
