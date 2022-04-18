import React, { useEffect, useState } from 'react'
import getCharacterInfo from '../services/getCharacterInfo'

export default function ResidentInfo({url}) {

    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [status, setStatus] = useState('');
    const [origin, setOrigin] = useState('');
    const [episodes, setEpisodes] = useState('');

    useEffect(() => {
        getCharacterInfo(url)
            .then((response) => {
                console.log(response.data);
                setName(response.data.name)
                setImg(response.data.image)
                setStatus(response.data.status)
                setOrigin(response.data.origin.name)
                setEpisodes(response.data.episode.length)
            })
    },[url]);

    return (
        <div className='ResidentInfo'>
            <img src={img}/>
            <h4>Name:{name}</h4>
            <h4>Status:{status}</h4>
            <h4>Origin:{origin}</h4>
            <h4>Num of episodes:{episodes}</h4>
        </div>
    )
}
