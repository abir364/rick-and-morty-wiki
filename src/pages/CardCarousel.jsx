import React from "react";
import { Link } from "react-router-dom";

import CharacterCard from "./CharacterCard";
import ViewAll from "./ViewAll";

import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CardCarousel.css';

const CardCarousel = ({ characters }) => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7.5,
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
        <Slider {...settings}>
            {
                characters.map(
                    (cast) => (
                        <CharacterCard character={cast} />
                    )
                )
            }
            <Link to="/characters">
                <ViewAll />
            </Link>
        </Slider >

    );
};

export default CardCarousel;