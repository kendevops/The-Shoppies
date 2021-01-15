import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width: 300,
    margin: 20,
  },
  media: {
    height: 300,
  },
});

export default function MovieList({ movies }) {
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
              <Typography gutterBottom variant="h5" component="h2">
                {movie.Title}
              </Typography>
              {/* <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography> */}
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Nominate
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}

// const MovieList = ({ movies }) => {
//   return (
//     <>
//       {movies.map((movie, index) => (
//         <div key={index}>
//           <img src={movie.Poster} alt="movie poster" />
//         </div>
//       ))}
//     </>
//   );
// };

// export default MovieList;
