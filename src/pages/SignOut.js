import React, { useEffect } from "react";

import { createClient } from "@supabase/supabase-js";
import { useHistory } from "react-router-dom";
const supabase = createClient(
    "https://hiiwioouscmwdgfhobom.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyODA0MTA5NiwiZXhwIjoxOTQzNjE3MDk2fQ.uMF3eAqCD2zgJnJJL6h2rKYSH-d2H6rsGrXGF74X-70"
);

function SignOut(props) {
    const navigation = useHistory();

    useEffect(function () {
        //sign out of supabase
        supabase.auth.signOut();
        navigation.push("/signin");
    }, []);

    return <div>Sign Out</div>;
}

export default SignOut;
