import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function VideoCard(props) {
  return (
    // <div
    //   style={{
    //     backgroundColor: "red",
    //     display: "block",
    //     width: 1000,
    //     height: 200,
    //     borderRadius: 20,
    //   }}
    // />

    <Card sx={{ minWidth: 300, width: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            textAlign="center"
          >
            Lizard
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
