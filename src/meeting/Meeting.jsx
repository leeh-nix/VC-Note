import React from "react";
import { MeetingProvider } from "@videosdk.live/react-sdk";
import config from "../config";
import MeetingContainer from "./MeetingContainer";
import { useNavigate } from "react-router-dom";

export default function Meeting({
  meetingId,
  setMeetingId,
  micEnabled,
  setMicOn,
  setWebcamOn,
  webcamEnabled,
  participantName,
  setMeetingStarted,
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
}) {
  const navigate = useNavigate();
  return (
    <MeetingProvider
      config={{
        meetingId: meetingId,
        multiStream: false,
        micEnabled: micEnabled,
        webcamEnabled: webcamEnabled,
        name: participantName ? participantName : "Test user",
      }}
      token={config.API_KEY}
      reinitialiseMeetingOnConfigChange={true}
      joinWithoutUserInteraction={true}
    >
      <MeetingContainer
        onMeetingLeave={() => {
          setMeetingId("");
          setWebcamOn(false);
          setMicOn(false);
          window.close()
          // navigate("/");
        }}
        setIsMeetingLeft={setIsMeetingLeft}
        selectedMic={selectedMic}
        setMicOn={setMicOn}
        setWebcamOn={setWebcamOn}
        selectedWebcam={selectedWebcam}
        selectWebcamDeviceId={selectWebcamDeviceId}
        setSelectWebcamDeviceId={setSelectWebcamDeviceId}
        selectMicDeviceId={selectMicDeviceId}
        setSelectMicDeviceId={setSelectMicDeviceId}
        useRaisedHandParticipants={useRaisedHandParticipants}
        raisedHandsParticipants={raisedHandsParticipants}
        micEnabled={micEnabled}
        webcamEnabled={webcamEnabled}
      />
    </MeetingProvider>
  );
}
