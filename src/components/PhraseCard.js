import React from "react";

function PhraseCard(props) {
    return (
        <div className='phrase-card'>
            <p className='phrase-card-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
            </p>
            {/* <p className='phrase-card-author'> */}
            <a href='https://google.com' className='phrase-card-author'>
                by Joe Mama
            </a>
            {/* </p> */}

            <div className='phrase-card-actions'>
                <Tag></Tag>
                <Tag></Tag>
                <Tag></Tag>
            </div>
            <div className='phrase-card-actions'>
                <button className='phrase-card-action'>😭</button>
                <button className='phrase-card-action'>😂</button>
                <button className='phrase-card-action'>💖</button>
                <button className='phrase-card-action'>💾</button>
            </div>
        </div>
    );
}

function Tag(props) {
    return <div className='phrase-card-tag'>Tagggg</div>;
}

export default PhraseCard;
