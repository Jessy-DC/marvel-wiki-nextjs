import {makeStyles} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";
import {fade} from "@material-ui/core";

export const useStylesCard = makeStyles(theme => ({
    root: {
        maxWidth: 345,
        marginTop: '2%',
        backgroundColor: 'red'
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export const useStylesSearch = makeStyles((theme) => ({
    searchIcon: {
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'white',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
    },
}))

export const useStylesHeader = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "red",
    },
}));