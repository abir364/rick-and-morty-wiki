import { useEffect, useState } from "react";
import React from "react";

import Slider from "react-slick";

import EpisodeCard from "./EpisodeCard";

import './Episodes.css'

const API_URL = "https://rickandmortyapi.com/api";

const Episodes = () => {

    const [episodes, setEpisodes] = useState([]);

    const getEpisode = async (id) => {
        const response = await fetch(`${API_URL}/episode/?page=${id}`);
        const data = await response.json();
        setEpisodes(data.results);
    };

    // run on page load
    useEffect(() => {
        getEpisode(1);
    }, []);

    console.table(episodes);

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5.2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <div className="episodes">
            <Slider {...settings}>{
                episodes.map(
                    (episode) => (
                        <EpisodeCard ep={episode} />
                    )
                )
            }</Slider>

        </div>
    );
}

export default Episodes;