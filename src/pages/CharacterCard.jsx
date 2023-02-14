import React from "react";

// import './CharacterCard.css';

const CharacterCard = ({ character }) => {

    return (
        <div className="character">
            <div>
                <img className="card-image"
                    src={
                        character.image !== ""
                            ? character.image
                            : "https://via.placeholder.com/300/000000/FFFFFF/?text=rNm-page"
                    }
                    alt={character.name}/>
            </div>
            <div className="char-text">
                <span>{character.name}</span>
            </div>
        </div>
    );
};

export default CharacterCard;
