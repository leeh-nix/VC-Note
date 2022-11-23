import { Box } from "@mui/material";
import { createCameraVideoTrack, useMeeting, usePubSub } from "@videosdk.live/react-sdk";
import { useSnackbar } from "notistack";
import React, { createRef, useRef, useState, useEffect } from "react";
import { ParticipantsView } from "../components/ParticipantView";
import useResponsiveSize from "../hooks/useResponsiveSize";
import PresenterView from "../components/PresenterView";

export default function MeetingContainer({
  onMeetingLeave,
  setIsMeetingLeft,
  selectedMic,
  selectedWebcam,
  selectWebcamDeviceId,
  setSelectWebcamDeviceId,
  selectMicDeviceId,
  setSelectMicDeviceId,
  useRaisedHandParticipants,
  raisedHandsParticipants,
  micEnabled,
  webcamEnabled,
}) {
  const bottomBarHeight = 60;

  const [containerHeight, setContainerHeight] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [sideBarMode, setSideBarMode] = useState(null);
  const [localParticipantAllowedJoin, setLocalParticipantAllowedJoin] = useState(null);

  const mMeetingRef = useRef();
  const containerRef = createRef();
  const containerHeightRef = useRef();
  const containerWidthRef = useRef();

  const { enqueueSnackbar } = useSnackbar;

  useEffect(() => {
    containerHeightRef.current = containerHeight;
    containerWidthRef.current = containerWidth;
  }, [containerHeight, containerWidth]);

  const sideBarContainerWidth = useResponsiveSize({
    xl: 400,
    lg: 360,
    md: 320,
    sm: 280,
    xs: 240,
  });

  useEffect(() => {
    const boundingRect = containerRef.current.getBoundingClientRect();
    const { width, height } = boundingRect;

    if (height !== containerHeightRef.current) {
      setContainerHeight(height);
    }
    if (width !== containerWidthRef.current) {
      setContainerWidth(width);
    }
  }, [containerRef]);

  // const { participantRaisedHand } = useRaisedHandParticipants();

  const _handleMeetingLeft = () => {
    setIsMeetingLeft(true);
  };

  function onParticipantJoined(participant) {
    participant && participant.setQuality("high");
  }

  function onEntryResponded(participantId, name) {
    if (mMeetingRef.current?.localParticipant?.id === participantId) {
      if (name === "allowed") {
        setLocalParticipantAllowedJoin(true);
      } else {
        setLocalParticipantAllowedJoin(false);
        setTimeout(() => {
          _handleMeetingLeft();
        }, 3000);
      }
    }
  }

  async function onMeetingJoined() {
    const { changeWebcam, changeMic, muteMic, disableWebcam } = mMeetingRef.current;
    if (webcamEnabled && selectedWebcam.id) {
      disableWebcam();
      setTimeout(async (resolve) => {
        const track = await createCameraVideoTrack({
          optimizationMode: "motion",
          encoderConfig: "h720p_w1280p",
          facingMode: "environment",
          cameraId: selectedWebcam.id,
          multiStream: false,
        });
        changeWebcam(track);
        resolve();
      }, 500);
    }

    if (micEnabled && selectedMic.id) {
      await new Promise((resolve) => {
        muteMic();
        setTimeout(() => {
          changeMic(selectedMic.id);
          resolve();
        }, 500);
      });
    }
  }

  function onMeetingLeft() {
    onMeetingLeave();
  }

  const mMeeting = useMeeting({
    onParticipantJoined,
    onEntryResponded,
    onMeetingJoined,
    onMeetingLeft,
  });

  const isPresenting = mMeeting.presenterId ? true : false;

  useEffect(() => {
    mMeetingRef.current = mMeeting;
  }, [mMeeting]);

  usePubSub("RAISE_HAND", {
    onMessageReceived: (data) => {
      const localParticipantId = mMeeting?.localParticipant?.id;
      const { senderId, senderName } = data;
      const isLocal = senderId === localParticipantId;
      new Audio(`https://static.videosdk.live/prebuilt/notification.mp3`).play();
      enqueueSnackbar(`${isLocal ? "You" : nameTructed(senderName, 15)} raised hand 🖐🏼`);
      participantRaisedHand(senderId);
    },
  });

  usePubSub("CHAT", {
    onMessageReceived: (data) => {
      const localParticipantId = mMeeting?.localParticipant?.id;
      const { senderId, senderName, message } = data;
      const isLocal = senderId === localParticipantId;
      if (!isLocal) {
        new Audio(`https://static.videosdk.live/prebuilt/notification.mp3`).play();
        enqueueSnackbar(trimSnackBarText(`${nameTructed(senderName, 15)} says: ${message}`));
      }
    },
  });

  const isMobile = window.matchMedia("only screen and (max-width: 768px)");

  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      {typeof localParticipantAllowedJoin === "boolean" ? (
        localParticipantAllowedJoin ? (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flex: "1 1 0%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flex: "1 1 0%",
                }}
              >
                {isPresenting ? <PresenterView height={containerHeight - bottomBarHeight} /> : null}
                {isPresenting && isMobile ? null : <ParticipantsView isPresenting={isPresenting} />}
              </Box>
            </Box>
          </>
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
    </Box>
  );
}
