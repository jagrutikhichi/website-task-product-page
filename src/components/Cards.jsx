import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

export default function Cards() {
  const [photos, setPhotos] = useState([]);
  const [currentPhotos, setCurrentPhotos] = useState([]);
  var [count, setCount] = useState(60);
  const { productId } = useParams();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPhotos(data);
      });
  }, []);

  useEffect(() => {
    setCurrentPhotos(photos.slice(0, count));
  }, [photos, count]);

  return (
    <>
      <div className="px-12 pb-24 w-full">
        <Grid
          className="mb-5"
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          {currentPhotos.map((photo) => (
            <Grid item xs={12} sm={4} md={3} key={photo.id}>
              <Card sx={{ maxWidth: 280, height: 350, maxHeight: "auto" }}>
                <CardMedia
                  sx={{ objectFit: "contain" }}
                  component="img"
                  alt={photo.title}
                  image={photo.url}
                  className="h-28"
                />
                <CardContent className="py-3">
                  <Typography
                    gutterBottom
                    component="div"
                    className="text-base"
                  >
                    {photo.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="text-sm"
                  >
                    This Shirt For Men Is One Of The Top Selling Product From
                    Premium Quality Casual....
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={(photo) => photo.id === parseInt(productId)}
                  >
                    <Link to={`/product/${photo.id}`}>Show More</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Button
          onClick={() => setCount((prev) => prev + 50)}
          variant="contained"
        >
          Load More
        </Button>
      </div>
    </>
  );
}
