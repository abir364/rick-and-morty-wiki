import React from "react";

import './LocationCard.css';

const LocationCard = ({ locale }) => {

    return (
        <div className="location">
            <span>{`# ${locale.id}`}</span>
            <p>{locale.name}</p>
        </div>
    );
}

export default LocationCard;