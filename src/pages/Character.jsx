import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './Character.css';

const API_URL = "https://rickandmortyapi.com/api";

const Character = () => {
    // const cast = {
    //     "id": 1,
    //     "name": "Rick Sanchez",
    //     "status": "Alive",
    //     "species": "Human", "type": "",
    //     "gender": "Male",
    //     "origin": { "name": "Earth (C-137)", "url": "https://rickandmortyapi.com/api/location/1" },
    //     "location": { "name": "Citadel of Ricks", "url": "https://rickandmortyapi.com/api/location/3" },
    //     "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    //     "episode": ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2", "https://rickandmortyapi.com/api/episode/3", "https://rickandmortyapi.com/api/episode/4", "https://rickandmortyapi.com/api/episode/5", "https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/13", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/28", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31", "https://rickandmortyapi.com/api/episode/32", "https://rickandmortyapi.com/api/episode/33", "https://rickandmortyapi.com/api/episode/34", "https://rickandmortyapi.com/api/episode/35", "https://rickandmortyapi.com/api/episode/36", "https://rickandmortyapi.com/api/episode/37", "https://rickandmortyapi.com/api/episode/38", "https://rickandmortyapi.com/api/episode/39", "https://rickandmortyapi.com/api/episode/40", "https://rickandmortyapi.com/api/episode/41", "https://rickandmortyapi.com/api/episode/42", "https://rickandmortyapi.com/api/episode/43", "https://rickandmortyapi.com/api/episode/44", "https://rickandmortyapi.com/api/episode/45", "https://rickandmortyapi.com/api/episode/46", "https://rickandmortyapi.com/api/episode/47", "https://rickandmortyapi.com/api/episode/48", "https://rickandmortyapi.com/api/episode/49", "https://rickandmortyapi.com/api/episode/50", "https://rickandmortyapi.com/api/episode/51"],
    //     "url": "https://rickandmortyapi.com/api/character/1",
    //     "created": "2017-11-04T18:48:46.250Z"
    // };

    const { characterId } = useParams();

    const [cast, setCast] = useState({});

    // console.log(characterId);

    const getCast = async (id) => {
        const response = await fetch(`${API_URL}/character/${id}`);
        const data = await response.json();
        // console.log(data);
        setCast(data);

    };

    useEffect(() => {
        getCast(characterId);
    }, {});

    // const getEpisodeName = async (url) => {
    //         const r = await fetch(url);
    //         const name = await r.json();

    //         return name;
    // }

    return (
        <div>
            <Link to="/characters"><button className='back-button'>&#x3c;</button></Link>
            {/* <div>{cast.name}</div> */}

            <div className='wrapper'>
                <div className="left-wrapper">
                    <h1 className='profile-name'>{cast.name}</h1>
                    <img className='profile-pic' src={cast.image} alt={cast.name} />
                </div>
                <div className="right-wrapper">
                    <div className="small-box">
                        <img src="src\assets\cast-details\Icons\PNG\Status.png" alt="status" />
                        <span>Status</span>
                        <h2>{cast.status}</h2>
                    </div>
                    <div className="small-box">
                        <img src="src\assets\cast-details\Icons\PNG\Species.png" alt="species" />
                        <span>Species</span>
                        <h2>{cast.species}</h2>
                    </div>
                    <div className="small-box">
                        <img src="src\assets\cast-details\Icons\PNG\Gender.png" alt="gender" />
                        <span>Gender</span>
                        <h2>{cast.gender}</h2>
                    </div>
                    <div className='origin'>
                        <div className="first-line">
                            <img src="src\assets\cast-details\Icons\PNG\origin.png" alt="origin" />
                            <img src="src\assets\cast-details\Icons\PNG\Redirect.png" alt="redirect" />
                        </div>
                        <span>Origin</span>
                        {/* <h2>{cast && cast.origin.name}</h2> */}
                    </div>
                    <div className='last-loc'>
                        <div className="first-line">
                            <img src="src\assets\cast-details\Icons\PNG\origin.png" alt="last" />
                            <img src="src\assets\cast-details\Icons\PNG\Redirect.png" alt="redirect" />
                        </div>
                        <span>Last Known Location</span>
                        {/* <h2>{cast && cast.location.name}</h2> */}
                    </div>
                    <div className="scroll-box">
                        <img src="src\assets\cast-details\Icons\PNG\origin.png" alt="episodes" />
                        <span>Episode(S)</span>
                        <div className="list">
                            {
                                cast && cast.episode.map(
                                    (c) => (
                                        <h2>●{c}</h2>
                                    )
                                )
                            }
                        </div>
                        {/* <h2>{cast.episode[0]}</h2> */}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Character;