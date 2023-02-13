import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

import CardCarousel from "./CardCarousel";
import Episodes from "./Episodes";
import ViewAll from "./ViewAll";

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
            <div className="cast-title">
                <h3>Meet the cast</h3>
                <Link to="/characters" className="btn"><button className="view-all"> View All</button></Link>
            </div>
            <div className="carousel">
                <CardCarousel characters={characters} />
            </div>
            <div className="episodes-carousels">
                <h3>Episodes</h3>
                <Episodes />
            </div>
        </div>

    );
}

export default Home;