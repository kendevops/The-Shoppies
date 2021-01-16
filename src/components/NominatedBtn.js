import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import StarsIcon from "@material-ui/icons/Stars";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width: 300,
    margin: 15,
    // "&:hover": { transform: "scale(0.9)" },
  },
  media: {
    height: 300,
  },

  btn: {
    backgroundColor: "#008060",
    color: "#fff",
    padding: 10,
    "&:hover": {
      backgroundColor: "#0f6060",
      transform: "scale(1.1)",
    },
    "&:disabled": {
      backgroundColor: "grey",
    },
  },
});

export default function NominatedBtn({ movie, handleNominateClick }) {
  const classes = useStyles();
  const [disabled, setDisabled] = useState(false);

  return (
    <Button
      startIcon={<StarsIcon />}
      size="small"
      disabled={disabled}
      className={classes.btn}
      onClick={() => {
        handleNominateClick(movie);
        setDisabled(true);
      }}
    >
      Nominate
    </Button>
  );
}
