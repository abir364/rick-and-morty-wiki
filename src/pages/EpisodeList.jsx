import React, { useEffect } from 'react';
import { useState } from 'react';

const EpisodeList = ({ link }) => {

    const [epn, setEpn] = useState("");


    const fetchEpn = async (api) => {
        const epnResponse = await fetch(api);
        const value = await epnResponse.json();
        console.log(value);
        setEpn(value.name);
    };

    useEffect(()=>{
        fetchEpn(link);
    },[]);

    return (
        <h2>●{epn}</h2>
    );
}

export default EpisodeList;