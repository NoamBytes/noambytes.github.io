import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ImageModal } from "./imgModal";
import LBB from "../media/LBB.png";
import ZPB from "../media/ZPB.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
      padding: "15px"
    },
    header: {
      marginBottom: "7px",
      marginTop: "0",
      fontSize: "36px"
    },
    ptext: {
      margin: "0 150px 0 150px",
      lineHeight: "25px"
    },
    linkText: {
      cursor: "pointer",
      color: "#8383b4",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline"
      }
    }
  })
);

export const About: React.FunctionComponent = () => {
  const classes = useStyles();
  const [ziggyOpen, setZiggyOpen] = React.useState<boolean>(false);
  const [ladyOpen, setLadyOpen] = React.useState<boolean>(false);

  return (
    <div className={classes.root} id={"about-section"}>
      <h1 className={classes.header}>About Me</h1>
      <p className={classes.ptext}>
        I'm your local friendly Brooklynite who happens to be a software
        engineer. I attended CUNY Brooklyn College and graduated in 2018 with a
        degree in Computer Science, and I currently work at JPMorgan Chase & Co.
        My focus, as a developer, is primarily on web applications, with a
        strong interest in user-centered UI design. I also care a lot about
        making tech a more inclusive and welcoming space. In my free time, I
        enjoy cross stitching, roller skating, and spoiling my dog,{" "}
        <span
          onClick={() => {
            setLadyOpen(true);
          }}
          className={classes.linkText}
        >
          Lady Bird
        </span>
        , and my chinchilla,{" "}
        <span
          onClick={() => {
            setZiggyOpen(true);
          }}
          className={classes.linkText}
        >
          Ziggy
        </span>{" "}
        to an absolutely unhealthy extent. In the time before covid-19, I might
        have said I enjoyed travel, and didn't do it nearly enough. If you'd
        like to collaborate (or conspire) with me on something, check out my contact info
        <a href={"#contact-section"} className={classes.linkText}> here. </a>
      </p>
      <ImageModal
        isOpen={ladyOpen}
        onClose={() => {
          setLadyOpen(false);
        }}
        imageSource={LBB}
        imageTitle="Lady Bird Bean"
        altTextForImage="photo of Lady Bird the dog"
      />
      <ImageModal
        isOpen={ziggyOpen}
        onClose={() => {
          setZiggyOpen(false);
        }}
        imageSource={ZPB}
        imageTitle="Zigford P. Bean"
        altTextForImage="photo of Ziggy the chinchilla"
      />
    </div>
  );
};
