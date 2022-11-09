import Grid from "@mui/material/Unstable_Grid2/Grid2";
import HomeIcon from "./HomeIcon";
import MemberIcon from "./MemberIcon";
import VideoIcon from "./VideoIcon";
import MessageIcon from "./MessageIcon";
import SettingsIcon from "./SettingsIcon";

export default function LeftSidebar() {
  return (
    <Grid
      container
      minWidth="64px"
      bgcolor="darkgray"
      justifyContent="center"
      alignContent="center"
      sx={{ flexDirection: "column" }}
    >
      <Grid
        gap={2}
        container
        // bgcolor={"red"}
        justifyContent="center"
        alignContent="flex-end"
        sx={{ flexDirection: "column" }}
      >
        <HomeIcon />
        <VideoIcon />
        <MessageIcon />
        <MemberIcon />
        <SettingsIcon />
      </Grid>
    </Grid>
  );
}
