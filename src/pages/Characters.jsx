import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

import CharacterCard from "./CharacterCard";
import SearchIcon from "../assets/search.svg";

import logo from "../assets/Logo.png";
import './Characters.css';


const API_URL = "https://rickandmortyapi.com/api";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [flag, setFlag] = useState(true);

    // function for name searching
    const searchCharacters = async (name) => {
        const response = await fetch(`${API_URL}/character/?name=${name}`);
        const data = await response.json();
        // TODO: something fishy going on here need to look into it handle 404 response "await timeout()"
        if (data.error) {
            setFlag(false);
            // console.log(flag);
            return;
        }
        setCharacters(data.results);
        setFlag(true);
    };

    // function calls initial page load data from api
    const getHome = async (id) => {
        const response = await fetch(`${API_URL}/character/?page=${id}`);
        const data = await response.json();
        setCharacters(data.results);
    };

    // run on page load
    useEffect(() => {
        getHome(1);
    }, []);

    // renders whatever in there
    return (
        <div className="characters characters-page-bg">
            <div className="shared">
                <Link to="/"><img className='logo' src={logo} alt="Logo"/></Link>
                
            </div>
            <Link to="/" className="btn"><button className="back-button">&#x3c;</button></Link>
            {/* search bar */}
            <div className="character-container">
                <div className="search">
                    <input
                        placeholder="Search for characters"
                        value={searchTerm}
                        onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }}
                        onKeyDown={(e) => {
                            if(e.key === 'Enter') {
                                searchCharacters(searchTerm)
                            }
                        }}
                    ></input>
                    <img
                        src={SearchIcon}
                        alt="search"
                        onClick={() => searchCharacters(searchTerm)}
                    />
                </div>
                {/* if characters of the searched cast is available then puts the all characters in the dom otherwise indicates N/A */}
                {flag === true ? (
                    <div className="container">
                        {characters.map((cast) => (
                            <Link to={`/characters/${cast.id}`}>
                                <CharacterCard character={cast} />
                            </Link>))
                        }
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No characters found!</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Characters;
