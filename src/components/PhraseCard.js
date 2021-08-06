import React from "react";
import { useState, useEffect, useRef } from "react";

const PhraseCard = (props) => {
    useEffect(() => {
        console.log(props.object);
    }, [props]);

    return (
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
                <button className='phrase-card-action'>💾</button>
            </div>
        </div>
    );
};

function Tag(props) {
    return <div className='phrase-card-tag'>{props.data}</div>;
}

export default PhraseCard;
