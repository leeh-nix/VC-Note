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
import { useMeeting } from "@videosdk.live/react-sdk";

export default function Controls({ onMeetingLeave }) {
  const mMeeting = useMeeting();
  const localMicOn = mMeeting?.localMicOn;
  const localWebcamOn = mMeeting?.localWebcamOn;
  const [hand, setHand] = useState(false);
  const [screenshare, setScreenshare] = useState(false);

  return (
    <Grid container spacing={2} sx={{ textAlign: "center", alignItems: "center", maxWidth: "36.25rem" }}>
      <Grid item xs>
        <Tooltip title={localMicOn ? "Turn off microphone" : "Turn on microphone"}>
          {/* <IconButton onClick={() => setMicOn(!micEnabled)} sx={{ backgroundColor: "#2D2D2D", borderRadius: "20px" }}> */}
          <IconButton onClick={() => mMeeting.toggleMic()} sx={{ backgroundColor: "#2D2D2D", borderRadius: "20px" }}>
            {localMicOn ? <MicOn /> : <MicOff />}
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item xs>
        <Tooltip title={localWebcamOn ? "Turn on camera" : "Turn off camera"}>
          <IconButton
            onClick={() => {
              if (localWebcamOn) {
                mMeeting.disableWebcam();
              } else {
                mMeeting.enableWebcam();
              }
              // const track = await createCameraVideoTrack({
              //   optimizationMode: "motion",
              //   encoderConfig: "h720p_w1280p",
              //   facingMode: "environment",
              //   multiStream: false,
              // });
              // mMeeting.toggleWebcam(track);
            }}
            sx={{ backgroundColor: "#2D2D2D", borderRadius: "20px" }}
          >
            {localWebcamOn ? <VideoOn /> : <VideoOff />}
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item xs>
        <Tooltip title={"Hang Up"}>
          <IconButton onClick={() => onMeetingLeave()} sx={{ backgroundColor: "#2D2D2D", borderRadius: "20px", width: "132px" }}>
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
