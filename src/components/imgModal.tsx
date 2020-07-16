import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
      imageStyle: {
        maxHeight: "500px"
      },
      closeButtonStyle: {
        float: "right",
        padding: "0"
      }
    })
);

type ImageModalProps = {
  imageSource: string;
  isOpen: boolean;
  altTextForImage: string;
  imageTitle?: string;
  onClose(): void;
};

export const ImageModal: React.FunctionComponent<ImageModalProps> = (
  props: ImageModalProps
) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Dialog onClose={props.onClose} open={props.isOpen}>
        <DialogTitle>
            {props.imageTitle}
            <IconButton aria-label="close" onClick={props.onClose} className={classes.closeButtonStyle}>
                <CloseIcon />
            </IconButton>
        </DialogTitle>
        <img src={props.imageSource} alt={props.altTextForImage} className={classes.imageStyle}/>
      </Dialog>
    </React.Fragment>
  );
};
