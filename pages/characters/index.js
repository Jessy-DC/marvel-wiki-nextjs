import React from 'react'

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
        }
    }

    componentDidMount() {
        this.handleApiCall('A')
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
            <div>
                {this.state.characters ? (
                    <div>We have {this.state.characters.length} characters</div>
                ) : (
                    <div>No characters</div>
                )}
            </div>

        )
    }
}