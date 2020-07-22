import * as React from "react";
import headshot from "../media/headshot.jpg";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headshotPic: {
      height: "100%",
      width: "100%"
    },
    contain: {
      flexGrow: 1
    },
    bigBlock: {
      backgroundColor: "#000",
      padding: "20px",
      textAlign: "left"
    },
    header: {
      color: "#b3b3e6",
      marginTop: "10%",
      marginBottom: "3%",
      marginLeft: "3%",
      fontSize: "90px"
    },
    ptext: {
      color: "#fff",
      fontSize: "30px",
      marginLeft: "3%"
    }
  })
);

export const Jumbotron: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.contain}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <img
            src={headshot}
            alt="Noams face lol"
            className={classes.headshotPic}
          />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.bigBlock}>
          <h1 className={classes.header}>Hi, I'm Noam!</h1>
          <p className={classes.ptext}>Nice to meet you.</p>
        </Grid>
      </Grid>
    </div>
  );
};
