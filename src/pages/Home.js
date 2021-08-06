import React from "react";
import PhraseCard from "../components/PhraseCard";

function Home(props) {
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
                    <PhraseCard></PhraseCard>
                    <PhraseCard></PhraseCard>
                    <PhraseCard></PhraseCard>
                </div>
                <div className='phrase-column'>
                    <h2>Editors Picks</h2>
                    <PhraseCard></PhraseCard>
                    <PhraseCard></PhraseCard>
                    <PhraseCard></PhraseCard>
                    <PhraseCard></PhraseCard>
                </div>
                <div className='phrase-column'>
                    <h2>Saved</h2>
                    <PhraseCard></PhraseCard>
                    <PhraseCard></PhraseCard>
                </div>
            </div>
        </div>
    );
}

export default Home;
