import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import FemFeed from "../media/FemFeed.png";
import Spotlist from "../media/Spotlist3.png";
import Vobia from "../media/Vobia.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
      padding: "15px",
      backgroundColor: "#000",
    },
    header: {
      marginBottom: "7px",
      marginTop: "0",
      fontSize: "36px",
      color: "#fff",
    },
    pText: {
      color: "#fff",
    },
    projectsRow: {
      display: "flex",
      flexDirection: "row",
    },
    media: {
      height: 300,
    },
    card: {
      maxWidth: 345,
      margin: 10,
    },
    cardActionAreaWBottom: {
      marginBottom: 20,
    },
  })
);

export const Projects: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id={"projects-section"}>
      <h1 className={classes.header}>Selected Projects</h1>
      <div className={classes.projectsRow}>
        <Card className={classes.card}>
          <CardActionArea className={classes.cardActionAreaWBottom}>
            <CardMedia
              className={classes.media}
              image={Spotlist}
              title="Spotlist"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Spotlist
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Spotlist is a project that I recently started working on with my
                friend Chris. It is a web application that takes setlists from
                the website setlist.fm and turns them into Spotify playlist.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="secondary"
              href="https://github.com/NoamBytes/spotlist"
            >
              Git Repo
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.media} image={Vobia} title="Vobia" />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Vobia
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Vobia was an application for the Samsung Gear VR that I worked
                on during my participation in the CUNYCodes program in 2018. My
                team and I created this appliction to allow users to gradually
                desensitize themselves to their fear of spiders.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="secondary"
              href="https://github.com/CUNYTech/Vobia"
            >
              Git Repo
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={FemFeed}
              title="FemFeed"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                FemFeed
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                FemFeed was a collaborative code sharing website for women that
                I created at the Technica 2016 hackathon. While the website is
                no longer available to view, the dev post about the site can be
                found below and contains screenshots.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="secondary"
              href="https://devpost.com/software/fem-feed"
            >
              DevPost Article
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};
