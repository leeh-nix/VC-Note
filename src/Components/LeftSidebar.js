import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { ReactComponent as HomeOn } from "../Assets/HomeOn.svg";
import { ReactComponent as HomeOff } from "../Assets/HomeOff.svg";
import { ReactComponent as MessageOn } from "../Assets/MessageOn.svg";
import { ReactComponent as MessageOff } from "../Assets/MessageOff.svg";
import { ReactComponent as MemberOn } from "../Assets/MemberOn.svg";
import { ReactComponent as MemberOff } from "../Assets/MemberOff.svg";
import { ReactComponent as SettingsOn } from "../Assets/SettingsOn.svg";
import { ReactComponent as SettingsOff } from "../Assets/SettingsOff.svg";
import { ReactComponent as VideoFilledOn } from "../Assets/VideoFilledOn.svg";
import { ReactComponent as VideoFilledOff } from "../Assets/VideoFilledOff.svg";
import { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";

export default function LeftSidebar() {
  const [Home, setHome] = useState(false);
  const [VideoFilled, setVideoFilled] = useState(false);
  const [Message, setMessage] = useState(false);
  const [Member, setMember] = useState(false);
  const [Settings, setSettings] = useState(false);
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
        <Tooltip title={"Home"}>
          <IconButton onClick={() => setHome(!Home)}>
            {Home ? <HomeOn /> : <HomeOff />}
          </IconButton>
        </Tooltip>
        <Tooltip title={"VideoCam"}>
          <IconButton onClick={() => setVideoFilled(!VideoFilled)}>
            {VideoFilled ? <VideoFilledOn /> : <VideoFilledOff />}
          </IconButton>
        </Tooltip>
        <Tooltip title={"Message"}>
          <IconButton onClick={() => setMessage(!Message)}>
          {Message ? <MessageOn /> : <MessageOff />}
          </IconButton>
        </Tooltip>
        <Tooltip title={"Member"}>
          <IconButton onClick={() => setMember(!Member)}>
          {Member ? <MemberOn /> : <MemberOff />}
          </IconButton>
        </Tooltip>
        <Tooltip title={"Settings"}>
          <IconButton onClick={() => setSettings(!Settings)}>
          {Settings ? <SettingsOn /> : <SettingsOff />}
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
}
