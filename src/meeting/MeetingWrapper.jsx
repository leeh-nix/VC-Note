import React, { useEffect, useState } from "react";
import JoiningPage from "../pages/JoiningPage";
import Meeting from "../meeting/Meeting";
import { validateMeeting } from "../api";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import LeavePage from "../pages/LeavePage";

export default function MeetingWrapper({
  isloggedIn,
  meetingId,
  setMeetingId,
  isHost,
  participantName,
  setSelectedMic,
  setSelectedWebcam,
  micEnabled,
  webcamEnabled,
  isMeetingLeft,
  isMeetingStarted,
  setWebcamOn,
  setMicOn,
  meetingMode,
  setMeetingStarted,
  setIsMeetingLeft,
  selectedMic,
  selectedWebcam,
  selectWebcamDeviceId,
  setSelectWebcamDeviceId,
  selectMicDeviceId,
  setSelectMicDeviceId,
  useRaisedHandParticipants,
  raisedHandsParticipants,
}) {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const _meetingId = meetingId !== "" ? meetingId : slug;
  const [meetingReady, setMeetingReady] = useState(false);
  const [isJoiningPage, setIsJoiningPage] = useState(isHost ? false : true);

  useEffect(() => {
    if (!isloggedIn) {
      enqueueSnackbar("Please login before proceeding.", { variant: "error", autoHideDuration: "2500", preventDuplicate: "true" });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }, []);

  useEffect(() => {
    async function checkMeetingId() {
      const valid = await validateMeeting({
        roomId: _meetingId,
      });
      if (valid) {
        setMeetingId(_meetingId);
        setMeetingStarted(true);
      } else {
        navigate("/404");
      }
    }
    checkMeetingId();
  });

  useEffect(() => {
    if (meetingReady) {
      setIsJoiningPage(false);
    }
  }, [meetingReady]);

  return (
    <div className="meeting_wrapper">
      {isJoiningPage ? (
        <JoiningPage
          isloggedIn={isloggedIn}
          meetingId={meetingId}
          setMeetingId={setMeetingId}
          setSelectedMic={setSelectedMic}
          setSelectedWebcam={setSelectedWebcam}
          micEnabled={micEnabled}
          webcamEnabled={webcamEnabled}
          setWebcamOn={setWebcamOn}
          setMicOn={setMicOn}
          setMeetingReady={setMeetingReady}
          meetingMode={meetingMode}
          setMeetingStarted={setMeetingStarted}
        />
      ) : isMeetingStarted ? (
        <Meeting
          isloggedIn={isloggedIn}
          meetingId={meetingId}
          setMeetingId={setMeetingId}
          micEnabled={micEnabled}
          webcamEnabled={webcamEnabled}
          participantName={participantName}
          setMeetingStarted={setMeetingStarted}
          setIsMeetingLeft={setIsMeetingLeft}
          selectedMic={selectedMic}
          selectedWebcam={selectedWebcam}
          setMicOn={setMicOn}
          setWebcamOn={setWebcamOn}
          selectWebcamDeviceId={selectWebcamDeviceId}
          setSelectWebcamDeviceId={setSelectWebcamDeviceId}
          selectMicDeviceId={selectMicDeviceId}
          setSelectMicDeviceId={setSelectMicDeviceId}
          useRaisedHandParticipants={useRaisedHandParticipants}
          raisedHandsParticipants={raisedHandsParticipants}
        />
      ) : isMeetingLeft ? (
        <LeavePage setIsMeetingLeft={setIsMeetingLeft} />
      ) : (
        <></>
      )}
    </div>
  );
}
