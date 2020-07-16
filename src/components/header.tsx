import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../media/Noam.svg';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        logo: {
            height: "75px",
            width: "75px",
            backgroundColor: "#b3b3e6"
        },
        bar: {
            boxShadow: "0px 0.5px 9px #b3b3e6"
        }
    })
); 

export const NavBar: React.FunctionComponent = () => {
    const classes = useStyles();
    return(
        <React.Fragment>
            <AppBar position="sticky">
                <Toolbar className={classes.bar}>
                    <img src={logo} className={classes.logo} alt="Noam Swisa logo"/>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}