import React from "react";
import PhraseCard from "../components/PhraseCard";

function Search(props) {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "50vw", padding: "1rem", boxSizing: "border-box" }}></div>
            <div style={{ width: "50vw", padding: "1rem", boxSizing: "border-box", position: "fixed" }}>
                <input type='text' placeholder='Describe your target...'></input>
                <div style={{ marginTop: "2rem" }}>
                    <Tag></Tag>
                    <Tag></Tag>
                    <Tag></Tag>
                    <Tag></Tag>
                    <Tag></Tag>
                    <Tag></Tag>
                    <Tag></Tag>
                    <Tag></Tag>
                    <Tag></Tag>
                    <Tag></Tag>
                    <Tag></Tag>
                    <Tag></Tag>
                    <Tag></Tag>
                    <Tag></Tag>
                    <Tag></Tag>
                    <Tag></Tag>
                    <Tag></Tag>
                </div>
            </div>
            <div className='phrase-column'>
                <PhraseCard></PhraseCard>
                <PhraseCard></PhraseCard>
                <PhraseCard></PhraseCard>
                <PhraseCard></PhraseCard>
                <PhraseCard></PhraseCard>
                <PhraseCard></PhraseCard>
                <PhraseCard></PhraseCard>
                <PhraseCard></PhraseCard>
                <PhraseCard></PhraseCard>
            </div>
        </div>
    );
}

function Tag(props) {
    return (
        <div
            className='phrase-card-tag'
            style={{
                marginBottom: "2rem",
                fontSize: "2rem",
                padding: "1rem",
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "var(--secondaryBackground)",
            }}>
            Hello
            <button
                style={{
                    marginLeft: "1rem",
                    fontSize: "2rem",
                    border: "none",
                    backgroundColor: "transparent",
                    // backgroundColor: "var(--tertiaryBackground)",
                    // aspectRatio: "1/1",
                    // boxSizing: "border-box",
                }}>
                X
            </button>
        </div>
    );
}

export default Search;
