import React from "react";
import PhraseCard from "../components/PhraseCard";
import { useLocation } from "react-router";
import { useState, useEffect, useRef } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://hiiwioouscmwdgfhobom.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyODA0MTA5NiwiZXhwIjoxOTQzNjE3MDk2fQ.uMF3eAqCD2zgJnJJL6h2rKYSH-d2H6rsGrXGF74X-70");

function Search(props) {
    let location = useLocation();
    useEffect(() => {}, [supabase.auth.user()]);

    async function search() {
        const [data, error] = await supabase.from("pickuplines").select().textSearch("input");
    }
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
