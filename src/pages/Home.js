import React from "react";
import PhraseCard from "../components/PhraseCard";
import { useState, useEffect, useRef } from "react";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://hiiwioouscmwdgfhobom.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyODA0MTA5NiwiZXhwIjoxOTQzNjE3MDk2fQ.uMF3eAqCD2zgJnJJL6h2rKYSH-d2H6rsGrXGF74X-70");

function Home(props) {
    // State variable that holds the array of rows that are created by you
    const [myPhrases, updatePhrases] = useState([]);
    const [savedPhrases, updateSavedPhrases] = useState([]);

    useEffect(() => {
        console.log("hello");
        // needs to be a separate function for await
        getPersonal();
        getSaved();
    }, [supabase.auth.user()]);

    async function getPersonal() {
        // this does correctly get the data from supabase
        const { data, error } = await supabase.from("pickuplines").select().match({ userId: supabase.auth.user()?.id }).order("date", { ascending: false }).limit(4);
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
        for (const savedPostId of data[0].savedPhrases) {
            const { data: data2, error: error2 } = await supabase.from("pickuplines").select().match({ id: savedPostId });
            console.log(data2, savedPostId);
            tempArray.push(data2[0]);
        }
        updateSavedPhrases(tempArray);
    }
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "1rem", boxSizing: "border-box" }}>
                <h1 style={{ fontSize: "5rem", marginBottom: "1rem" }}>
                    FIND THE PERFECT <span style={{ textDecoration: "underline" }}>ROAST</span>
                </h1>
                <input type='text' placeholder='Describe your target...'></input>
            </div>

            <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
                <div className='phrase-column'>
                    <h2>Trending Roasts</h2>
                    {/* <PhraseCard></PhraseCard>
                    <PhraseCard></PhraseCard>
                    <PhraseCard></PhraseCard> */}
                </div>
                <div className='phrase-column'>
                    <h2>My Roasts</h2>
                    {/* TODO!  MAKE THIS PIECE OF CRAP WORK IDK WHY IT WONT ACTUALLY RENDER.  IT CONSOLE.LOGS CORRECTLY BUT DOESNT RENDER I WANT TO DIE */}
                    {myPhrases.map((phraseObject) => {
                        // the weirdest part is that THIS works, and consoles.logs correctly
                        console.log(phraseObject.id);
                        // but then no phrase cards are being rendered

                        // watch carefully
                        return <PhraseCard object={phraseObject} key={phraseObject.id}></PhraseCard>;
                    })}
                </div>
                <div className='phrase-column'>
                    <h2>Saved</h2>
                    {savedPhrases.map((phraseObject) => {
                        // the weirdest part is that THIS works, and consoles.logs correctly
                        console.log(phraseObject);
                        // but then no phrase cards are being rendered

                        // watch carefully
                        return <PhraseCard object={phraseObject} key={phraseObject.id}></PhraseCard>;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;
