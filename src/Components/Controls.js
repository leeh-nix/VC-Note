import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { ReactComponent as LowerHand } from "../Assets/lowerhand.svg";
import { ReactComponent as RaiseHand } from "../Assets/raisehand.svg";
import { ReactComponent as HangUp } from "../Assets/hangup.svg";
import { ReactComponent as MicOn } from "../Assets/micon.svg";
import { ReactComponent as MicOff } from "../Assets/micoff.svg";
import { ReactComponent as VideoOn } from "../Assets/videoon.svg";
import { ReactComponent as VideoOff } from "../Assets/videooff.svg";
import { ReactComponent as ScreenOn } from "../Assets/screenon.svg";
import { ReactComponent as ScreenOff } from "../Assets/screenoff.svg";

export default function Controls() {
  const [hand, setHand] = useState(false);
  const [mic, setMic] = useState(true);
  const [video, setVideo] = useState(true);
  const [screenshare, setScreenshare] = useState(false);

  return (
    <Grid container spacing={2} sx={{ textAlign: "center", alignItems: "center" }}>
      <Grid item xs>
        <Tooltip title={mic ? "Turn off microphone" : "Turn on microphone"}>
          <IconButton onClick={() => setMic(!mic)} sx={{ backgroundColor: "#2D2D2D", borderRadius: "20px" }}>
            {mic ? <MicOn /> : <MicOff />}
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item xs>
        <Tooltip title={video ? "Turn on camera" : "Turn off camera"}>
          <IconButton onClick={() => setVideo(!video)} sx={{ backgroundColor: "#2D2D2D", borderRadius: "20px" }}>
            {video ? <VideoOn /> : <VideoOff />}
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item xs>
        <Tooltip title={"Hang Up"}>
          <IconButton sx={{ backgroundColor: "#2D2D2D", borderRadius: "20px", width: "132px" }}>
            <HangUp />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item xs>
        <Tooltip title={hand ? "Lower Hand" : "Raise Hand"}>
          <IconButton onClick={() => setHand(!hand)} sx={{ backgroundColor: "#2D2D2D", borderRadius: "20px" }}>
            {hand ? <RaiseHand /> : <LowerHand />}
          </IconButton>
        </Tooltip>
      </Grid>

      <Grid item xs>
        <Tooltip title={screenshare ? "Stop Sharing" : "Share screen"}>
          <IconButton onClick={() => setScreenshare(!screenshare)} sx={{ backgroundColor: "#2D2D2D", borderRadius: "20px" }}>
            {screenshare ? <ScreenOff /> : <ScreenOn />}
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
}
