import React, { useEffect, useMemo, useRef } from "react";
import { useMeeting, useParticipant } from "@videosdk.live/react-sdk";
import useResponsiveSize from "../hooks/useResponsiveSize";
import { Box, Typography, useTheme } from "@mui/material";
import ReactPlayer from "react-player";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import MicOffIcon from "@mui/icons-material/MicOff";
import { nameTructed } from "../utils/helper";

export default function PresenterView({ height }) {
  const theme = useTheme();
  const mMeeting = useMeeting();
  const presenterId = mMeeting.presenterId;

  const padding = useResponsiveSize({
    xs: 4,
    sm: 4,
    md: 26,
    lg: 52,
    xl: 24,
  });

  const { micOn, isLocal, screenShareStream, screenShareAudioStream, screenShareOn, displayName } = useParticipant(presenterId);

  const videoPlayer = useRef();
  const mediaStream = useMemo(() => {
    if (screenShareOn) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(screenShareStream.track);
      return mediaStream;
    }
  }, [screenShareStream, screenShareOn]);

  const audioPlayer = useRef();

  useEffect(() => {
    if (!isLocal && audioPlayer.current && screenShareOn && screenShareAudioStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(screenShareAudioStream.track);

      audioPlayer.current.srcObject = mediaStream;
      audioPlayer.current.play().catch((err) => {
        if (err.message === "play() failed because the user didn't interact with the document first. https://goo.gl/xX8pDD") {
          console.error("audio" + err.message);
        }
      });
    } else {
      audioPlayer.current.srcObject = null;
    }
  }, [screenShareAudioStream, screenShareOn, isLocal]);

  return (
    <Box
      sx={{
        height: height - padding,
        width: "100%",
        position: "relative",
        overflow: "hidden",
        borderRadius: theme.spacing("1"),
        margin: theme.spacing("1"),
      }}
    >
      <audio autoPlay playsInline controls={false} ref={audioPlayer} />
      <Box
        sx={{
          height: "100%",
          width: "100%",
          position: "relative",
        }}
      >
        <ReactPlayer
          ref={videoPlayer}
          playsinline
          playIcon={<></>}
          pip={false}
          light={false}
          controls={false}
          muted={true}
          playing={true}
          url={mediaStream}
          height={"100%"}
          width={"100%"}
          style={{
            filter: isLocal ? "blur(1rem)" : undefined,
          }}
          onError={(err) => {
            console.log(err, "Presenter video error");
          }}
        />
        <Box
          sx={{
            position: "relative",
            bottom: theme.spacing("1"),
            left: theme.spacing("1"),
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 200ms",
            transitionTimingFunction: "linear",
            padding: theme.spacing("1"),
          }}
        >
          {!micOn && <MicOffIcon fontSize="small" color="primary" />}
          <Typography variant="subtitle2">{isLocal ? `You are presenting` : `${nameTructed(displayName, 15)} is presenting`}</Typography>
        </Box>
        {isLocal ? (
          <Box
            p={5}
            sx={{
              borderRadius: theme.spacing("2"),
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <ScreenShareIcon
              sx={{
                color: "#fff",
                height: theme.spacing("6"),
                width: theme.spacing("6"),
              }}
            />
            <Box mt={2}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                }}
              >
                You are presenting to everyone
              </Typography>
            </Box>
            <Box mt={4}>
              <Button
                variant="contained"
                color="primary"
                onClick={(e) => {
                  e.stopPropagation();
                  mMeeting.toggleScreenShare();
                }}
              >
                Stop presenting
              </Button>
            </Box>
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
}
