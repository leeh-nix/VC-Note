import { Box, Typography, useTheme } from "@mui/material";
import MicOffIcon from "@mui/icons-material/MicOff";
import { useMeeting, useParticipant } from "@videosdk.live/react-sdk";
import React, { useEffect, useMemo, useRef } from "react";
import { nameTructed } from "../utils/helper";
import ReactPlayer from "react-player";

function ParticipantView({ participantId }) {
  const { displayName, webcamStream, micStream, webcamOn, micOn, isLocal } = useParticipant(participantId);
  const micRef = useRef(null);
  const mMeeting = useMeeting();
  const isPresenting = mMeeting.isPresenting;

  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);
        micRef.current.srcObject = mediaStream;
        micRef.current.play().catch((error) => {
          console.error("videoElem.current.play() failed", error);
        });
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  const webcamMediaStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);

  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#374151",
        width: "100%",
        height: "100%",
        borderRadius: "0.5rem",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#00000066",
          transition: "all 200ms",
          transitionTimingFunction: "linear",
          display: "flex",
          position: "absolute",
          bottom: "0.5rem",
          left: "0.5rem",
          padding: "0.5rem",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "0.375rem",
        }}
      >
        {!micOn && <MicOffIcon fontSize="small" color="primary" />}
        <Typography
          variant="body2"
          sx={{
            color: "#fff",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
          }}
        >
          {isPresenting ? (isLocal ? `You are presenting` : `${nameTructed(displayName, 15)} is presenting`) : isLocal ? "You" : nameTructed(displayName, 26)}
        </Typography>
      </Box>
      <audio ref={micRef} autoPlay muted={isLocal} />
      {webcamOn ? (
        <ReactPlayer
          playsinline
          playIcon={<></>}
          pip={false}
          light={false}
          muted={true}
          playing={true}
          url={webcamMediaStream}
          height={"100%"}
          width={"100%"}
          onError={(error) => {
            console.log(error, "Participant video error");
          }}
        />
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              backgroundColor: "#1F2937",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "9999px",
              height: "52px",
              width: "52px",
              ["@media (min-width: 1536px)"]: {
                height: "5.75rem",
                width: "5.75rem",
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#fff",
                fontSize: "1.5rem",
                lineHeight: "2rem",
              }}
            >
              {String(displayName).charAt(0).toUpperCase()}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export function ParticipantsView({ isPresenting, sideBarMode }) {
  const theme = useTheme();
  const mMeeting = useMeeting();
  const participants = isPresenting ? [...mMeeting?.participants.keys()].slice(0, 6) : [...mMeeting?.participants.keys()];

  const isXStoSM = theme.breakpoints.between("xs", "sm");
  const isMobile = window.matchMedia("only screen and (max-width: 768px)");

  const perRow =
    isMobile || isPresenting
      ? participants.length < 4
        ? 1
        : participants.length < 9
        ? 2
        : 3
      : participants.length < 5
      ? 2
      : participants.length < 7
      ? 3
      : participants.length < 9
      ? 4
      : participants.length < 10
      ? 3
      : participants.length < 11
      ? 4
      : 4;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isXStoSM ? "column" : "row",
        flexGrow: 1,
        margin: 12,
        justifyContent: "center",
        alignItems: "center",
        ["@media (min-width: 768px)"]: {
          paddingTop: participants.length < 2 && !sideBarMode && !isPresenting ? "0.5rem" : participants.length < 4 && !sideBarMode && !isPresenting ? "2.5rem" : "inherit",
          paddingBottom: participants.length < 2 && !sideBarMode && !isPresenting ? "0.5rem" : participants.length < 4 && !sideBarMode && !isPresenting ? "2.5rem" : "inherit",
          paddingLeft:
            participants.length < 2 && !sideBarMode && !isPresenting
              ? "4rem"
              : participants.length < 4 && !sideBarMode && !isPresenting
              ? "4rem"
              : participants.length > 4 && !sideBarMode && !isPresenting
              ? "3.5rem"
              : "0",
          paddingRight:
            participants.length < 2 && !sideBarMode && !isPresenting
              ? "4rem"
              : participants.length < 4 && !sideBarMode && !isPresenting
              ? "4rem"
              : participants.length > 4 && !sideBarMode && !isPresenting
              ? "3.5rem"
              : "0",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        }}
      >
        {Array.from({ length: Math.ceil(participants.length / perRow) }, (_, i) => {
          return (
            <Box
              key={`participant-${i}`}
              sx={{
                display: "flex",
                flex: "1 1 0%",
                justifyContent: isPresenting ? (participants.length === 1 ? "flex-start" : "center") : "center",
                alignItems: isPresenting ? (participants.length === 1 ? "flex-start" : "center") : "center",
              }}
            >
              {participants.slice(i * perRow, (i + 1) * perRow).map((participantId) => {
                return (
                  <Box
                    key={`participant_${participantId}`}
                    sx={{
                      display: "flex",
                      flex: "1 1 0%",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      overflow: "hidden",
                      padding: "0.25rem",
                      textOverflow: "clip",
                      ["@media (min-width: 768px)"]: {
                        width: isPresenting ? (participants.length === 1 ? "11rem" : participants.length === 2 ? "11rem" : "11rem") : "100%",
                        height: isPresenting ? (participants.length === 1 ? "12rem" : "100%") : "100%",
                        maxWidth: participants.length === 1 ? "80rem" : "32rem",
                      },

                      ["@media (min-width: 1280px)"]: {
                        width: isPresenting ? (participants.length === 1 ? "13rem" : participants.length === 2 ? "14rem" : "14rem") : "100%",
                        height: isPresenting ? (participants.length === 1 ? "12rem" : "100%") : "100%",
                        maxWidth: participants.length === 1 ? "92.5rem" : "42rem",
                      },
                    }}
                  >
                    <ParticipantView participantId={participantId} />
                  </Box>
                );
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
