import React from 'react';

function PhraseCard(props) {
    return (
        <div className="phrase-card">
            <p className="phrase-card-text">Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet</p>
            <div className="phrase-card-actions">
                <button className="phrase-card-action">😭</button>
                <button className="phrase-card-action">😂</button>
                <button className="phrase-card-action">💖</button>
                <button className="phrase-card-action">💾</button>
            </div>

        </div>
    );
}

export default PhraseCard;