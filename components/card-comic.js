import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStylesComicCard } from '../styles/theme'

export default function ComicCard({comic}) {
    const classes = useStylesComicCard();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={comic.thumbnail.path + '.' + comic.thumbnail.extension}
                    title={comic.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.card}>
                        {comic.title.length > 30 ? comic.title.toUpperCase().slice(0,30) : comic.title.toUpperCase()}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {comic.description.slice(0, 150)}...
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="inherit" style={{color: 'white'}}>
                    Share
                </Button>
                <Button size="small" color="inherit" style={{color: 'white'}}>
                    <a
                    href={comic.urls ? comic.urls[0].url : ""}
                    target={"_blank"}>
                        Learn More
                    </a>
                </Button>
            </CardActions>
        </Card>
    );
}