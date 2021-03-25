import React, {useEffect, useState} from 'react'
import CharacterCard from '../../components/card-character'
import styles from '../../styles/Characters.module.css'
import { useStylesSearch } from "../../styles/theme";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {API_KEY, INIT} from "../../data/key";
import fetch from "node-fetch";

export default function Characters() {
    const [characters, setCharacters] = useState([])
    const [characterName, setCharacterName] = useState('A')
    const classes = useStylesSearch();

    useEffect(() => {
        handleApiCall(characterName)
    }, [characterName])

    const handleChange = (e) => {
        if(e.target.value !== '') {
            setTimeout(() => {
                setCharacterName(e.target.value)
            }, 500)
        } else {
            setTimeout(() => {
                setCharacterName('A')
            }, 500)
        }
    }

    const handleApiCall = name => {
        if(name !== '') {
            const API_URL = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${characterName}&apikey=${API_KEY}`;
            fetch(API_URL, INIT)
                .then(response => response.json())
                .then(json => {
                    setCharacters(json.data.results);
                })
                .catch(error => console.log(error))
                .catch(error => console.log(error));
        }
    }

    return(
        <div>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.grid} id={"characters-grid"}>
                {characters ? (
                    characters.map(character => (
                        <div key={character.id}>
                            <CharacterCard character={character} />
                        </div>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    )

}