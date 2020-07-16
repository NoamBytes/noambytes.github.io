import * as React from "react";
import headshot from "../media/headshot.jpg";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        headshotPic: {
          height: "500px",
          width: "40%"
        },
        root: {
          display: "flex",
          flexDirection: "row"
        },
        bigBlock: {
          backgroundColor: "#000",
          padding: "20px",
          textAlign: "left",
          width: "70%"
        },
        header: {
          color: "#b3b3e6",
          marginTop: "10%",
          marginBottom: "3%",
          marginLeft: "3%",
          fontSize: "100px"
        },
        ptext: {
          color: "#fff",
          fontSize: "30px",
          marginLeft: "3%"
        }
    })
);

export const Jumbotron: React.FunctionComponent = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <img src={headshot} alt="Noams face lol" className={classes.headshotPic} />
      <div className={classes.bigBlock}>
        <h1 className={classes.header}>Hi, I'm Noam!</h1>
        <p className={classes.ptext}>Nice to meet you.</p>
      </div>
    </div>
  );
};
