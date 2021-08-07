import React from "react";
import PhraseCard from "../components/PhraseCard";
import { useLocation } from "react-router";
import { useState, useEffect, useRef } from "react";
import { createClient } from "@supabase/supabase-js";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
const natural = require("natural");

const supabase = createClient("https://hiiwioouscmwdgfhobom.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyODA0MTA5NiwiZXhwIjoxOTQzNjE3MDk2fQ.uMF3eAqCD2zgJnJJL6h2rKYSH-d2H6rsGrXGF74X-70");

function Search(props) {
    const [tagList, updatedPhrases] = useState([]);
    let location = useLocation();
    let params = useParams();
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
        let newAr = tagList.filter((ph) => phrase !== ph);
        updatedPhrases(newAr);
        console.log("newAr");
        console.log(newAr);
    }

    async function search() {
        console.log(tagList);
        const { data: data2, error: error2 } = await supabase.from("pickuplines").select().contains("tags", tagList).limit(10);
        updateMatch(data2);
    }
    const onTagEntry = (data, e) => {
        let stemmedTag = natural.PorterStemmer.stem(data.tag);
        stemmedTag = stemmedTag.toLowerCase();
        if (!tagList.includes(stemmedTag)) {
            if (stemmedTag !== "") {
                console.log("asdfasdfasdfads");
                console.log(stemmedTag);
                console.log(tagList);
                updatedPhrases([stemmedTag].concat(tagList));
            }
        }
        e.target.reset();
    };

    useEffect(function () {
        if (params.tags) {
            let loadedTags = params.tags.split("-");
            updatedPhrases(loadedTags);
        }
        search();
    }, []);

    useEffect(
        function () {
            console.log("my taglist");
            console.log(tagList);
            search();
        },
        [tagList]
    );

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "50vw", padding: "1rem", boxSizing: "border-box" }}></div>
            <div style={{ width: "50vw", padding: "1rem", boxSizing: "border-box", position: "fixed" }}>
                <form onSubmit={handleSubmit2(onTagEntry)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <h1 className='input-label'>Describe the person this is for, or the type of line (e.g. pun, bad)</h1>
                    <input type='text' {...register2("tag")} placeholder='tags...' id='searchBox' />

                    <div style={{ marginTop: "2rem" }}></div>
                </form>
                {tagList.map((phrase) => {
                    console.log(phrase);
                    return (
                        <Tag
                            onClick={function () {
                                removeTag(phrase);
                            }}>
                            {phrase}
                        </Tag>
                    );
                })}
            </div>
            <div className='phrase-column'>
                {!!matchingPhrases &&
                    matchingPhrases.map((phraseObject) => {
                        console.log(phraseObject.data);
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
                    transform: "rotate(" + -45 + "deg)",
                    color: "var(--secondaryText)",
                    // backgroundColor: "var(--tertiaryBackground)",
                    // aspectRatio: "1/1",
                    // boxSizing: "border-box",
                }}>
                +
            </button>
        </div>
    );
}

export default Search;
