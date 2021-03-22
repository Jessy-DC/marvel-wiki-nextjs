import React, {useEffect, useState} from 'react'
import ComicCard from "../../components/card-comic";
import styles from '../../styles/Characters.module.css'
import {API_KEY, INIT} from "../../data/key";

export default function Comics() {
    const [comics, setComics] = useState([])

    useEffect(() => {
        handleApiCall()
    }, [])

    const handleApiCall = () => {
        const API_URL = `https://gateway.marvel.com:443/v1/public/comics?orderBy=modified&limit=30&apikey=${API_KEY}`;
        fetch(API_URL, INIT)
            .then(response => response.json())
            .then(json => {
                setComics(json.data.results);
            })
            .catch(error => console.log(error))
            .catch(error => console.log(error));
    }

    return (
        <div className={styles.grid}>
            {comics ? (
                comics.map(comic => (
                    <div key={comic.id}>
                        <ComicCard comic={comic} />
                    </div>
                ))
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}