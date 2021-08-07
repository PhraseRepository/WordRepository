import React from "react";
import PhraseCard from "../components/PhraseCard";
import { useHistory } from "react-router";

function Search(props) {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "50vw", padding: "1rem", boxSizing: "border-box" }}></div>
            <div style={{ width: "50vw", padding: "1rem", boxSizing: "border-box", position: "fixed" }}>
                <input type='text' placeholder='Describe your target...'></input>
                <div style={{ marginTop: "2rem" }}>
                    <Tag>Hello</Tag>
                    <Tag>Hello</Tag>
                    <Tag>Hello</Tag>
                    <Tag>Hello</Tag>
                    <Tag>Hello</Tag>
                    <Tag>Hello</Tag>
                    <Tag>Hello</Tag>
                    <Tag>Hello</Tag>
                    <Tag>Hello</Tag>
                    <Tag>Hello</Tag>
                    <Tag>Hello</Tag>
                    <Tag>Hello</Tag>
                    <Tag>Hello</Tag>
                    <Tag>Hello</Tag>
                    <Tag>Hello</Tag>
                    <Tag>Hello</Tag>
                    <Tag>Hello</Tag>
                </div>
            </div>
            <div className='phrase-column'>
                {/* <PhraseCard></PhraseCard>
                <PhraseCard></PhraseCard>
                <PhraseCard></PhraseCard>
                <PhraseCard></PhraseCard>
                <PhraseCard></PhraseCard>
                <PhraseCard></PhraseCard>
                <PhraseCard></PhraseCard>
                <PhraseCard></PhraseCard>
                <PhraseCard></PhraseCard> */}
            </div>
        </div>
    );
}

export function Tag(props) {
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
            {props.children}
            <button
                onClick={props.onClick}
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
