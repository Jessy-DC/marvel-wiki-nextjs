import React from 'react'
import CharacterCard from '../../components/card'
import '../../styles/Characters.module.css'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/core/styles';

const HEADERS = new Headers({
    'Content-type': 'application/x-www-form-urlencoded',
});

const INIT = {
    methode: 'GET',
    headers: HEADERS,
    mode: 'cors',
};

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

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
            <div style={{textAlign: 'center'}}>
                <GridList cellHeight={400} cols={3}>
                    {this.state.characters ? (
                        this.state.characters.map(character => (
                                <GridListTile key={character.id}>
                                    <CharacterCard character={character} />
                                </GridListTile>
                        ))
                    ) : (
                        <div>No characters</div>
                    )}
                </GridList>
            </div>

        )
    }
}