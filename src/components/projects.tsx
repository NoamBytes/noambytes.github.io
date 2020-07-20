import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
      padding: "15px",
      backgroundColor: "#000"
    },
    header: {
      marginBottom: "7px",
      marginTop: "0",
      fontSize: "36px",
      color: "#fff"
    },
    pText: {
        color: "#fff"
    }

  })
);

export const Projects: React.FunctionComponent = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <h1 className={classes.header}>Recent Projects</h1>
            <p className={classes.pText}>Coming soon!</p>
        </div>
    )
}