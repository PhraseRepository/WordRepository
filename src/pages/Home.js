import React from "react";
import PhraseCard from "../components/PhraseCard";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://hiiwioouscmwdgfhobom.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyODA0MTA5NiwiZXhwIjoxOTQzNjE3MDk2fQ.uMF3eAqCD2zgJnJJL6h2rKYSH-d2H6rsGrXGF74X-70");

const natural = require("natural");

function Home(props) {
    // State variable that holds the array of rows that are created by you
    const [myPhrases, updatePhrases] = useState([]);
    const [savedPhrases, updateSavedPhrases] = useState([]);
    const [trendingPhrases, updateTrendingPhrases] = useState([]);
    const [redirect, changeRedirect] = useState(false);
    let history = useHistory();

    const {
        register: register,
        handleSubmit: handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        console.log("hello");
        // needs to be a separate function for await
        addTrending();
        getPersonal();
        getSaved();
    }, [supabase.auth.user()]);
    const searchThings = (data) => {
        let tags = data.value;
        tags = tags.split(" ");
        tags = tags.map((tag) => {
            let stemmedTag = natural.PorterStemmer.stem(tag);
            stemmedTag = stemmedTag.toLowerCase();
            return stemmedTag;
        });
        history.push("/search/" + tags.join("-"));
        changeRedirect(true);
    };
    async function getPersonal() {
        // this does correctly get the data from supabase
        const { data, error } = await supabase.from("pickuplines").select().match({ userId: supabase.auth.user()?.id }).order("date", { ascending: false });
        // updates the state variable probably where things go wrong
        updatePhrases(data);
        // data.forEach((element) => {
        //     console.log(element);
        // });
    }
    async function getSaved() {
        const { data, error } = await supabase.from("users").select("savedPhrases").match({ userId: supabase.auth.user()?.id });
        console.log(data);
        var tempArray = [];
        try {
            for (const savedPostId of data[0]?.savedPhrases) {
                const { data: data2, error: error2 } = await supabase.from("pickuplines").select().match({ id: savedPostId });
                console.log(data2, savedPostId);
                if (tempArray.length == 4) {
                    break;
                }
                tempArray.push(data2[0]);
            }
            updateSavedPhrases(tempArray);
        } catch (error) {}
    }
    async function addTrending() {
        const { data, error } = await supabase.from("pickuplines").select().order("likes", { ascending: false }).limit(8);
        updateTrendingPhrases(data);
    }
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "1rem", boxSizing: "border-box" }}>
                <h1 style={{ fontSize: "5rem", marginBottom: "1rem" }}>
                    FIND THE PERFECT <span style={{ textDecoration: "underline" }}>PICKUP LINE</span>
                </h1>
                <form onSubmit={handleSubmit(searchThings)}>
                    <input type='text' {...register("value", { required: true })} placeholder='Describe your target...'></input>
                </form>
            </div>

            <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
                <div className='phrase-column'>
                    <h2>Trending Pickups</h2>
                    {trendingPhrases.map((phraseObject) => {
                        return <PhraseCard object={phraseObject} key={phraseObject?.id}></PhraseCard>;
                    })}
                </div>
                <div className='phrase-column'>
                    <h2>My Pickups</h2>
                    {myPhrases.map((phraseObject) => {
                        console.log(phraseObject.id);
                        return <PhraseCard object={phraseObject} key={phraseObject?.id}></PhraseCard>;
                    })}
                    {myPhrases.length == 0 ? (
                        <h1>
                            Create pickup lines from the{" "}
                            <Link to='/create' style={{ color: "var(--primaryText" }}>
                                Create
                            </Link>{" "}
                            page
                        </h1>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className='phrase-column'>
                    <h2>Saved Pickups</h2>
                    {savedPhrases.map((phraseObject) => {
                        console.log(phraseObject);
                        return <PhraseCard object={phraseObject} key={phraseObject?.id}></PhraseCard>;
                    })}
                    {savedPhrases.length == 0 ? <h1>Save pickup lines by pressing the save icon (and reloading)</h1> : <div></div>}
                </div>
            </div>
        </div>
    );
}

export default Home;
