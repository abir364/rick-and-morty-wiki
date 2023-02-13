import React from "react";

import CharacterCard from "./CharacterCard";

import Slider from "react-slick";


const CardCarousel = ({ characters }) => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5.5,
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
        <Slider {...settings}>
            {
                characters.map(
                    (cast) => (
                        <CharacterCard character={cast} />
                    )
                )
            }
        </Slider >

    );
};

export default CardCarousel;