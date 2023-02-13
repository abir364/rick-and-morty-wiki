import React from "react";

import './EpisodeCard.css';

const EpisodeCard = ({ ep }) => {

    return (
        <div className="episode">
            <span>{ep.episode}</span>
            <p>{ep.name}</p>
        </div>
    );
}

export default EpisodeCard;