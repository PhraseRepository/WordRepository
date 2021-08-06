// import { SupabaseAuthClient } from "@supabase/supabase-js/dist/main/lib/SupabaseAuthClient";
import React from "react";
import { useState, useEffect, useRef } from "react";

import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
    "https://hiiwioouscmwdgfhobom.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyODA0MTA5NiwiZXhwIjoxOTQzNjE3MDk2fQ.uMF3eAqCD2zgJnJJL6h2rKYSH-d2H6rsGrXGF74X-70"
);

const PhraseCard = (props) => {
    useEffect(() => {
        console.log(props.object);
    }, [props]);
    async function addSaves() {
        const { data, error } = await supabase.from("users").select("savedPhrases").match({ userId: supabase.auth.user().id });
        supabase.from("users").upsert([{ savedPhrases: [] }]);
    }
    return (
        <>
            <div className='phrase-card'>
                <p className='phrase-card-text'>{props.object.data}</p>
                {/* <p className='phrase-card-author'> */}
                <a href='https://google.com' className='phrase-card-author'>
                    by SOMEONE
                </a>
                {/* </p> */}

                <div className='phrase-card-actions'>
                    {/* {props.tags.map((type) => {
                    <Tag data={type}></Tag>;
                })} */}
                </div>
                <div className='phrase-card-actions'>
                    <button className='phrase-card-action'>😭</button>
                    <button className='phrase-card-action'>😂</button>
                    <button className='phrase-card-action'>💖</button>
                    <button className='phrase-card-action' onClick={addSaves}>
                        💾
                    </button>
                </div>
            </div>
        </>
    );
};

function Tag(props) {
    return <div className='phrase-card-tag'>{props.data}</div>;
}

export default PhraseCard;
