import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Instagram, GitHub, LinkedIn, Twitter } from "@material-ui/icons";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
      padding: "15px",
      backgroundColor: "#fff"
    },
    header: {
      marginBottom: "7px",
      marginTop: "0",
      fontSize: "36px",
      color: "#000"
    },
    iconRow: {
        flexDirection: "row",
        width: "400px",
        margin: "0 auto",
        textAlign: "center"
    },
    individualIcon: {
        margin: "5px"
    }
  })
);

export const ContactSection: React.FunctionComponent = () => {
    const classes = useStyles();
    return(
        <div className={classes.root} id={"contact-section"}>
            <h1 className={classes.header}> Contact </h1>
            <div className={classes.iconRow}>
                <Link target="_blank" href="http://linkedin.com/in/noamswisa">
                    <LinkedIn className={classes.individualIcon} fontSize={"large"} color={"secondary"}/>
                </Link>
                <Link target="_blank" href="http://github.com/NoamBytes">
                    <GitHub className={classes.individualIcon} fontSize={"large"} color={"secondary"}/>
                </Link>
                <Link target="_blank" href="http://instagram.com/noambytes">
                    <Instagram className={classes.individualIcon} fontSize={"large"} color={"secondary"}/>
                </Link>
                <Link target="_blank" href="http://twitter.com/NoamBytes">
                    <Twitter className={classes.individualIcon} fontSize={"large"} color={"secondary"}/>
                </Link>
            </div>
        </div>
    )
}