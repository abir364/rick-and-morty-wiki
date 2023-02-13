import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link,useLocation } from 'react-router-dom';

import status from '../assets/cast-details/Icons/PNG/Status.png';
import species from "../assets/cast-details/Icons/PNG/Species.png";
import gender from "../assets/cast-details/Icons/PNG/Gender.png";
import origin from "../assets/cast-details/Icons/PNG/origin.png";
import re from "../assets/cast-details/Icons/PNG/Redirect.png";
import loc from "../assets/cast-details/Icons/PNG/Location.png";
// import epi from "../assets/cast-details/Icons/PNG/Episode(s).png";
import './Character.css';

const Character = () => {
    // let { ca } = useParams();
    // console.log(ca);
    let url = "";

    const [cast, setCast] = useState({});
    const [id, setId] = useState(useParams().ca);

    const [ori, setOri] = useState("");
    const [local, setLocal] = useState("");
    const [ep, setEp] = useState([]);

    const fetchData = async () => {
        const response = await fetch(url);
        const json = await response.json();
        // console.log(json);
        // console.log("fdsf",(json));
        setCast(json);
        setOri(json.origin.name);
        setLocal(json.location.name);
        setEp(json.episode);
    };

    // console.log("sad",ca);
    // url = "https://rickandmortyapi.com/api/character/"+ca;
    // fetchData();
    const lt = useLocation();
    console.log(lt.pathname);

    useEffect(() => {
        // console.log("init" + id);
        url = "https://rickandmortyapi.com/api/character/" + id;
        fetchData();

        // console.log("sdas", cast);
    }, [id]);
    // console.log("last-ca",useParams());




    return (
        <div>
            <Link to="/characters"><button className='back-button'>&#x3c;</button></Link>

            <div className='wrapper'>
                <div className="left-wrapper">
                    <h1 className='profile-name'>{cast.name}</h1>
                    <img className='profile-pic' src={cast.image} alt={cast.name} />
                </div>
                <div className="right-wrapper">
                    <div className="small-box">
                        <img src={status} alt="status" />
                        <span>Status</span>
                        <h2>{cast.status}</h2>
                    </div>
                    <div className="small-box">
                        <img src={species} alt="species" />
                        <span>Species</span>
                        <h2>{cast.species}</h2>
                    </div>
                    <div className="small-box">
                        <img src={gender} alt="gender" />
                        <span>Gender</span>
                        <h2>{cast.gender}</h2>
                    </div>
                    <div className='origin'>
                        <div className="first-line">
                            <img src={origin} alt="origin" />
                            <img src={re} alt="redirect" />
                        </div>
                        <span>Origin</span>
                        <h2>{ori}</h2>
                    </div>
                    <div className='last-loc'>
                        <div className="first-line">
                            <img src={loc} alt="last" />
                            <img src={re} alt="redirect" />
                        </div>
                        <span>Last Known Location</span>
                        <h2>{local}</h2>
                    </div>
                    <div className="scroll-box">
                        <h3>Episode(S)</h3>
                        <div className="list">
                            {
                                ep.map(
                                    (c) => (
                                        <h2>●{c}</h2>
                                    )
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Character