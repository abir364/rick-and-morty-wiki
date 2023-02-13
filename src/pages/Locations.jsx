import { useEffect, useState } from "react";
import React from "react";

import Slider from "react-slick";

import LocationCard from "./LocationCard";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Locations.css'

const API_URL = "https://rickandmortyapi.com/api";

const Locations = () => {

    const [locations, setLocations] = useState([]);

    const getLocations = async (id) => {
        const response = await fetch(`${API_URL}/location/?page=${id}`);
        const data = await response.json();
        setLocations(data.results);
    };

    // run on page load
    useEffect(() => {
        getLocations(1);
    }, []);

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4.2,
        slidesToScroll: 1,
        initialSlide: 0,
        swipeToSlide: true,
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
        <div className="locations">
            <Slider {...settings}>{
                locations.map(
                    (location) => (
                        <LocationCard locale={location} />
                    )
                )
            }</Slider>

        </div>
    );
}

export default Locations;