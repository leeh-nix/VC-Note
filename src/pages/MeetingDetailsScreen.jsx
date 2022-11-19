import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import useResponsiveSize from "../hooks/useResponsiveSize";
import CheckIcon from "@mui/icons-material/Check";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";

export default function MeetingDetailsScreen({
  onClickJoin,
  _handleOnCreateMeeting,
  participantName,
  setParticipantName,
  videoTrack,
  setVideoTrack,
  onClickStartMeeting,
  meetingType,
  setMeetingType,
  setMeetingMode,
}) {
  const [meetingId, setMeetingId] = useState("");
  const [meetingIdError, setMeetingIdError] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [iscreatedMeetingClicked, setIscreatedMeetingClicked] = useState(false);
  const [isJoinMeetingClicked, setIsJoinMeetingClicked] = useState(false);

  //   const padding = useResponsiveSize({
  //     xl: 6,
  //     lg: 6,
  //     md: 6,
  //     sm: 4,
  //     xs: 1.5,
  //   });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: "1 1 0%",
        width: "100%",
        // padding: padding,
      }}
    >
      {iscreatedMeetingClicked ? (
        <Box
          sx={{
            display: "flex",
            paddingTop: "0.75rem",
            paddingBottom: "0.75rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0.75rem",
            borderWidth: "1px",
            borderColor: "#9CA3AF",
            borderStyle: "solid",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#fff",
              lineHeight: "1.5rem",
            }}
          >
            {`Meeting code: ${meetingId}`}
          </Typography>
          <IconButton
            sx={{
              marginLeft: "0.5rem",
            }}
            onClick={() => {
              navigator.clipboard.writeText(meetingId);
              setIsCopied(true);
              setTimeout(() => {
                setIsCopied(false);
              }, 3000);
            }}
          >
            {isCopied ? (
              <CheckIcon
                sx={{
                  color: "#34D399",
                  width: "1.25rem",
                  height: "1.25rem",
                }}
              />
            ) : (
              <ContentPasteIcon
                sx={{
                  color: "#fff",
                  width: "1.25rem",
                  height: "1.25rem",
                }}
              />
            )}
          </IconButton>
        </Box>
      ) : isJoinMeetingClicked ? (
        <>
          <TextField
            label="Meeting ID"
            variant="outlined"
            fullWidth
            defaultValue={meetingId}
            onChange={(e) => {
              setMeetingId(e.target.value);
            }}
            sx={{
              textAlign: "center",
              borderRadius: "0.75rem",
              backgroundColor: "#2e2e2e",
            }}
          />
          {meetingIdError && (
            <Typography
              variant="body2"
              align="left"
              sx={{
                color: "#f44336",
                marginLeft: "0.25rem",
              }}
            >
              Please Enter a valid meeting ID.
            </Typography>
          )}
        </>
      ) : null}

      {/* --------------------------------------------------- */}
      <Box
        sx={{
          display: "flex",
          marginTop: "1rem",
          flexDirection: "column",
          width: "100%",
          ["@media (min-width: 768px)"]: {
            marginTop: 0,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            marginTop: "0.5rem",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Button
            variant="filled"
            onClick={async (e) => {
              // const meetingId = await _handleOnCreateMeeting();
              // setMeetingId(meetingId)
              setMeetingId("abc-def-ghi");
              setIscreatedMeetingClicked(true);
            }}
          >
            Create a meeting
          </Button>
          <Button
            variant="filled"
            onClick={() => {
              setIsJoinMeetingClicked(true);
            }}
          >
            Join a meeting
          </Button>
        </Box>
      </Box>
      {/* --------------------------------------------------- */}
    </Box>
  );
}
