import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginTop: '2%',
        backgroundColor: 'red'
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    card: {
        fontSize: 16,
    }
});

export default function ComicCard({comic}) {
    const classes = useStyles();
    console.log(comic)
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
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}