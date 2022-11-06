import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as VolumeOn } from "../Assets/volume.svg";
import { ReactComponent as VolumeOff } from "../Assets/volumeoff.svg";
import { ReactComponent as HangUp } from "../Assets/hangup.svg";
import { ReactComponent as MicOn } from "../Assets/micon.svg";
import { ReactComponent as MicOff } from "../Assets/micoff.svg";
import { ReactComponent as VideoOn } from "../Assets/videoon.svg";
import { ReactComponent as VideoOff } from "../Assets/videooff.svg";
import { ReactComponent as ScreenOn } from "../Assets/screenon.svg";
import { ReactComponent as ScreenOff } from "../Assets/screenoff.svg";

export default function Controls() {
  const [volume, setVolume] = useState(true);
  const [mic, setMic] = useState(true);
  const [video, setVideo] = useState(true);
  const [screenshare, setScreenshare] = useState(false);

  return (
    <Grid container spacing={2} sx={{ textAlign: "center", alignItems: "center" }}>
      <Grid item xs>
        <IconButton onClick={() => setVolume(!volume)} sx={{ backgroundColor: "#2D2D2D", borderRadius: "20px" }}>
          {volume ? <VolumeOn /> : <VolumeOff />}
        </IconButton>
      </Grid>
      <Grid item xs>
        <IconButton onClick={() => setMic(!mic)} sx={{ backgroundColor: "#2D2D2D", borderRadius: "20px" }}>
          {mic ? <MicOn /> : <MicOff />}
        </IconButton>
      </Grid>
      <Grid item xs>
        <IconButton sx={{ backgroundColor: "#2D2D2D", borderRadius: "20px", width: "132px" }}>
          <HangUp />
        </IconButton>
      </Grid>
      <Grid item xs>
        <IconButton onClick={() => setVideo(!video)} sx={{ backgroundColor: "#2D2D2D", borderRadius: "20px" }}>
          {video ? <VideoOn /> : <VideoOff />}
        </IconButton>
      </Grid>
      <Grid item xs>
        <IconButton onClick={() => setScreenshare(!screenshare)} sx={{ backgroundColor: "#2D2D2D", borderRadius: "20px" }}>
          {screenshare ? <ScreenOff /> : <ScreenOn />}
        </IconButton>
      </Grid>
    </Grid>
  );
}
