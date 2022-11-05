import Grid from "@mui/material/Unstable_Grid2/Grid2";
import VideoCard from "./VideoCard";

export default function VideoGrid(props) {
  return (
    <div>
      <Grid container spacing={2} style={{ margin: 1 }}>
        {[...Array(6)].map((_, index) => (
          <Grid
            xs={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {/* Video Card */}
            <VideoCard />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
