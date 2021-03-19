import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import SearchIcon from '@material-ui/icons/Search';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import Link from 'next/link'
import InputBase from '@material-ui/core/InputBase';
import { useStylesHeader } from "../styles/theme";

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

export function Header(props) {
    const classes = useStylesHeader();
    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <Link href={"/"}>
                            <MenuItem>
                                <Typography variant="h6">Marvel Wiki</Typography>
                            </MenuItem>
                        </Link>
                        <Link href={"/characters"}>
                            <MenuItem>
                                <Typography variant="h6">Characters</Typography>
                            </MenuItem>
                        </Link>
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
                            />
                        </div>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
            <Container>
                <div>

                </div>
            </Container>
        </React.Fragment>
    );
}