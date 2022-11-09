import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Controls from "./Controls";
import "./VideoGrid.css";

export default function VideoCard(props) {
  // const participants = props.participants;
  const participants = 1;
  return (
    <Card className={`video-card v${participants}`}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={20}
          width={20}
          image={props.src}
          alt="People"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            textAlign="center"
          >
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
