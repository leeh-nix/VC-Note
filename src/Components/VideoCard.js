import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Controls from "./Controls";

export default function VideoCard(props) {
  return (
    <Card minWidth={300}>
      <CardActionArea>
        <CardMedia component="img" height="50%" image={props.src} alt="People" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" textAlign="center">
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
