import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

import CardCarousel from "./CardCarousel";
import Episodes from "./Episodes";

import './Home.css';

const API_URL = "https://rickandmortyapi.com/api";

const Home = () => {

    const [characters, setCharacters] = useState([]);

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
        <div className="home">
            
            <Link to="/characters" className="btn"><button> View All</button></Link>
            <div className="carousel">
                <CardCarousel characters={characters} />
            </div>
            <div className="episodes">
                <Episodes />
            </div>
        </div>

    );
}

export default Home;