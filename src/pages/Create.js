import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect, useRef } from "react";
import { Redirect, useHistory } from "react-router-dom";

import { createClient } from "@supabase/supabase-js";
import { Tag } from "./Search";
const supabase = createClient("https://hiiwioouscmwdgfhobom.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyODA0MTA5NiwiZXhwIjoxOTQzNjE3MDk2fQ.uMF3eAqCD2zgJnJJL6h2rKYSH-d2H6rsGrXGF74X-70");
const natural = require("natural");

function Create(props) {
    const [tagList, updatedPhrases] = useState([]);
    const navigation = useHistory();

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

    const onTagEntry = (data, e) => {
        let stemmedTag = natural.PorterStemmer.stem(data.tag);
        stemmedTag = stemmedTag.toLowerCase();
        if (!tagList.includes(stemmedTag)) {
            updatedPhrases([...tagList, stemmedTag]);
        }
        e.target.reset();
    };
    const onPickupSubmit = (data) => {
        console.log("yo");
        addToDatabase(data);
    };
    async function addToDatabase(data5) {
        // const { data, error } = await supabase.from("users").insert([{ email: "user.email", userId: "user.id" }]);

        const { data, error } = await supabase.from("pickuplines").insert([{ userId: supabase.auth.user().id, data: data5.value, tags: tagList }]);
        navigation.push("/home");
    }

    function removeTag(phrase) {
        updatedPhrases(tagList.filter((ph) => phrase !== ph));
    }
    console.log(supabase.auth.user());
    if (supabase.auth.user() == undefined) return <Redirect to='/signin'></Redirect>;

    return (
        <div>
            <h1 className='page-heading'>Add a Pickup Line</h1>
            <div>
                <form onSubmit={handleSubmit2(onTagEntry)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <h1 className='input-label'>Describe the person this is for, or the type of line (e.g. pun, bad)</h1>
                    <input type='text' {...register2("tag")} placeholder='french' />
                </form>
                <div style={{ marginTop: "2rem" }}>
                    {tagList.map((phrase) => (
                        <Tag
                            onClick={function () {
                                removeTag(phrase);
                            }}>
                            {phrase}
                        </Tag>
                    ))}
                </div>
            </div>
            <div>
                <form onSubmit={handleSubmit(onPickupSubmit)}>
                    <h1 className='input-label'>Enter Pickup Line</h1>
                    <input type='text' {...register("value", { required: true })} placeholder='Are you French? Because Eiffel for you.'></input>
                    {errors.value && <h1 className='input-error'>Please enter a Pickup Line</h1>}

                    <button type='submit' style={{ marginTop: "2rem" }}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Create;
