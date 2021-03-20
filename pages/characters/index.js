import React from 'react'
import CharacterCard from '../../components/card'
import styles from '../../styles/Characters.module.css'

const HEADERS = new Headers({
    'Content-type': 'application/x-www-form-urlencoded',
});

const INIT = {
    methode: 'GET',
    headers: HEADERS,
    mode: 'cors',
};

export default class Characters extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            characters: null,
            characterSearch: 'A'
        }
    }

    componentDidMount() {
        this.handleApiCall(this.state.characterSearch)
    }

    handleApiCall = name => {
        const API_URL = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&apikey=3cb9f312871cec62f82dc980caeded2c`;
        fetch(API_URL, INIT)
            .then(response => response.json())
            .then(json => {
                this.setState({characters: json.data.results});
            })
            .catch(error => console.log(error))
            .catch(error => console.log(error));
    }

    render() {
        return(
            <div className={styles.grid}>
                {this.state.characters ? (
                    this.state.characters.map(character => (
                             <div key={character.id}>
                                <CharacterCard character={character} />
                            </div>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>

        )
    }
}