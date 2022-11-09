import Grid from "@mui/material/Unstable_Grid2/Grid2";
import VideoCard from "./VideoCard";

export default function VideoGrid(props) {
  return (
    <div style={{ flexGrow: 1 }}>
      <Grid container spacing={2} style={{ margin: 1 }}>
        {[...Array(6)].map((_, index) => (
          <Grid
            xs={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <VideoCard
              name="Kuro"
              src="https://cdn.discordapp.com/attachments/941558138602156062/1039808845897273354/006YqTs3gy1h6os9pk6c6j31xg132b1w.jpg"
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
