import React, { useState } from "react";
import { ReactComponent as VolumeOn } from "../Assets/volume.svg";
import { ReactComponent as VolumeOff } from "../Assets/volumeoff.svg";
import { ReactComponent as HangUp } from "../Assets/hangup.svg";
import { ReactComponent as MicOn } from "../Assets/micon.svg";
import { ReactComponent as MicOff } from "../Assets/micoff.svg";
import { ReactComponent as VideoOn } from "../Assets/videoon.svg";
import { ReactComponent as VideoOff } from "../Assets/videooff.svg";
import { ReactComponent as ScreenOn } from "../Assets/screenon.svg";
import { ReactComponent as ScreenOff } from "../Assets/screenoff.svg";

import IconButton from "@mui/material/IconButton";

export default function Controls() {
  const [volume, setVolume] = useState(true);
  const [mic, setMic] = useState(true);
  const [video, setVideo] = useState(true);
  const [screenshare, setScreenshare] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setVolume(!volume)} sx={{ backgroundColor: "#2D2D2D", borderRadius: "20px" }}>
        {volume ? <VolumeOn /> : <VolumeOff />}
      </IconButton>
      <IconButton onClick={() => setMic(!mic)} sx={{ backgroundColor: "#2D2D2D", borderRadius: "20px" }}>
        {mic ? <MicOn /> : <MicOff />}
      </IconButton>
      <IconButton sx={{ backgroundColor: "#2D2D2D", borderRadius: "20px" }}>
        <HangUp />
      </IconButton>
      <IconButton onClick={() => setVideo(!video)} sx={{ backgroundColor: "#2D2D2D", borderRadius: "20px" }}>
        {video ? <VideoOn /> : <VideoOff />}
      </IconButton>
      <IconButton onClick={() => setScreenshare(!screenshare)} sx={{ backgroundColor: "#2D2D2D", borderRadius: "20px" }}>
        {screenshare ? <ScreenOff /> : <ScreenOn />}
      </IconButton>
    </div>
  );
}
