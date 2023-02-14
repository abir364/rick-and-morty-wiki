import React from 'react';

import './Hero.css';
import bubble from '../assets/hero/bubble.png';
import portal from '../assets/hero/portal.png';
import gun from '../assets/hero/Gun.png';
import pill from '../assets/hero/pill.png';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>
            <div className='hero'>
                <div className='line-one'>
                    <img src={bubble} className='bubble' alt="bubble" />
                    <h1 className='white'>The</h1>
                    <img src={portal} className="portal" alt="portal" />
                    <h1 className='green'>Rick</h1>
                    <h1 className='green'>&</h1>
                    <img src={pill} className='pill' alt="pill"/>
                </div>
                <img src={gun} className='gun' alt="gun"/>
                <div className='line-two'>
                    <h1 className='green'>Morty </h1
                    ><h1 className='white'> Wiki</h1>
                </div>

            </div>
            <div className="bottom">
                <Link to="https://www.youtube.com/watch?v=KQ9Cgdsa9tc&ab_channel=ONEMedia">
                    <button className='watch'>Watch Now</button>
                </Link>
                <p>Brilliant but boozy scientist Rick Sanchez hijacks his fretful teenage grandson Morty, for wild escapades on other worlds and in alternate dimensions.</p>
            </div>
        </>

    );
}

export default Hero;