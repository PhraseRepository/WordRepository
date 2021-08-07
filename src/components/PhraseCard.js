// import { SupabaseAuthClient } from "@supabase/supabase-js/dist/main/lib/SupabaseAuthClient";
import React from "react";
import { useState, useEffect, useRef } from "react";

import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
    "https://hiiwioouscmwdgfhobom.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyODA0MTA5NiwiZXhwIjoxOTQzNjE3MDk2fQ.uMF3eAqCD2zgJnJJL6h2rKYSH-d2H6rsGrXGF74X-70"
);

const PhraseCard = (props) => {
    const [author, updateAuthor] = useState("SOMEONE");
    const [saved, updateStatus] = useState(false);
    const [likeAllowed, updateLikeStatus] = useState(true);
    const [likeCount, updateLikes] = useState(0);

    useEffect(() => {
        if (supabase.auth.user()?.id == props.object.userId) {
            updateAuthor("ME");
        }
        updateLikes(props.object.likes);
        checkSaved();
    }, [props.object]);
    async function checkSaved() {
        try {
            const { data, error } = await supabase.from("users").select("savedPhrases", "id").match({ userId: supabase.auth.user()?.id });
            if (data[0].savedPhrases.includes(props.object.id)) {
                updateStatus(true);
            }
        } catch (error) {}
    }
    async function addLike() {
        if (!supabase.auth.user()) return;
        const { data: data2, error2 } = await supabase
            .from("pickuplines")
            .update([{ likes: likeCount + 1 }])
            .match({ id: props.object.id });
        updateLikes(likeCount + 1);
    }
    async function addSaves() {
        if (!supabase.auth.user()) return;
        const { data, error } = await supabase.from("users").select("savedPhrases", "id").match({ userId: supabase.auth.user().id });
        if (data[0].savedPhrases.includes(props.object.id)) {
            var tempSaved = data[0].savedPhrases;
            const index = tempSaved.indexOf(props.object.id);
            tempSaved.splice(index, 1);
            const { data: data2, error2 } = await supabase
                .from("users")
                .update([{ savedPhrases: tempSaved }])
                .match({ userId: supabase.auth.user().id });
            updateStatus(false);

            return;
        }
        var array = [props.object.id, ...data[0].savedPhrases];
        console.log(array);
        const { data: data2, error2 } = await supabase
            .from("users")
            .update([{ savedPhrases: array }])
            .match({ userId: supabase.auth.user().id });
        updateStatus(true);
    }

    return (
        <>
            <div className='phrase-card'>
                <p className='phrase-card-text'>{props.object.data}</p>
                {/* <p className='phrase-card-author'> */}
                <a href='' className='phrase-card-author'>
                    by {author}
                </a>
                {/* </p> */}

                <div className='phrase-card-actions'>
                    {props.object.tags.map((type) => {
                        return <Tag data={type}></Tag>;
                    })}
                </div>
                <div className='phrase-card-actions' style={{ marginTop: 0 }}>
                    <button className='phrase-card-action' onClick={addLike}>
                        {likeCount == 1 ? <p>{likeCount} Like</p> : <p>{likeCount} Likes</p>}
                    </button>
                    <button className='phrase-card-action' onClick={addSaves}>
                        {saved ? <p>Saved</p> : <p>Save</p>}
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
