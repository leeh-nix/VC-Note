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
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
