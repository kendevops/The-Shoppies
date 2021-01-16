import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import StarsIcon from "@material-ui/icons/Stars";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
  },
});

export default function Nominated({ movies, handleNominateClick }) {
  const classes = useStyles();

  return (
    <>
      {movies.map((movie, index) => (
        <Card key={index} className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={movie.Poster}
              title="Image Poster"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                // style={{ height: 40 }}
              >
                {movie.Title} ({movie.Year})
              </Typography>
              {/* <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography> */}
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              startIcon={<StarsIcon />}
              size="small"
              className={classes.btn}
              onClick={() => handleNominateClick(movie)}
            >
              Remove Nomination
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}
