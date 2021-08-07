import React from "react";
import PhraseCard from "../components/PhraseCard";
import { useLocation } from "react-router";
import { useState, useEffect, useRef } from "react";
import { createClient } from "@supabase/supabase-js";
import { useForm } from "react-hook-form";
const natural = require("natural");

const supabase = createClient("https://hiiwioouscmwdgfhobom.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyODA0MTA5NiwiZXhwIjoxOTQzNjE3MDk2fQ.uMF3eAqCD2zgJnJJL6h2rKYSH-d2H6rsGrXGF74X-70");

function Search(props) {
    const [tagList, updatedPhrases] = useState([]);
    let location = useLocation();
    const [matchingPhrases, updateMatch] = useState([]);
    useEffect(() => {}, [supabase.auth.user()]);
    const {
        register: register,
        handleSubmit: handleSubmit,
        formState: { errors },
    } = useForm();
    const {
        register: register2,
        handleSubmit: handleSubmit2,
        formState: { errors2 },
    } = useForm();
    function removeTag(phrase) {
        updatedPhrases(tagList.filter((ph) => phrase !== ph));
    }
    function search2() {
        search();
    }
    async function search() {
        console.log(tagList);
        const { data: data2, error: error2 } = await supabase
            .from("pickuplines")
            .select()
            .contains("tags", [...tagList]);
        updateMatch(data2);
    }
    const onTagEntry = (data, e) => {
        let stemmedTag = natural.PorterStemmer.stem(data.tag);
        stemmedTag = stemmedTag.toLowerCase();
        if (!tagList.includes(stemmedTag)) {
            updatedPhrases([...tagList, stemmedTag]);
        }
        e.target.reset();
    };

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "50vw", padding: "1rem", boxSizing: "border-box" }}></div>
            <div style={{ width: "50vw", padding: "1rem", boxSizing: "border-box", position: "fixed" }}>
                <form onSubmit={handleSubmit2(onTagEntry)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <h1 className='input-label'>Describe the person this is for, or the type of line (e.g. pun, bad)</h1>
                    <input type='text' {...register2("tag")} placeholder='french' id='searchBox' defaultValue={location.pathname.split("/").pop()} />
                </form>
                <button onClick={search2} type='submit'>
                    search
                </button>

                <div style={{ marginTop: "2rem" }}></div>
                {tagList.map((phrase) => (
                    <Tag
                        onClick={function () {
                            removeTag(phrase);
                        }}>
                        {phrase}
                    </Tag>
                ))}
            </div>
            <div className='phrase-column'>
                {matchingPhrases.map((phraseObject) => {
                    console.log(phraseObject.id);
                    return <PhraseCard object={phraseObject} key={phraseObject.id}></PhraseCard>;
                })}
            </div>
            <div style={{ marginTop: "2rem" }}></div>
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
