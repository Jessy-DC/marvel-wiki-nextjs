import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useStylesCard} from "../styles/theme";

export default function CharacterCard({character}) {
    const classes = useStylesCard();
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {character.name[0]}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={character.name}
                subheader={character.modified}
            />
            <CardMedia
                className={classes.media}
                image={character.thumbnail.path + '.' + character.thumbnail.extension}
                title="Paella dish"
            />
        </Card>
    );
}