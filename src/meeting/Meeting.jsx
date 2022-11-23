import React, { useEffect } from "react";
import { MeetingProvider } from "@videosdk.live/react-sdk";
import config from "../config";
import MeetingContainer from "./MeetingContainer";
import { useNavigate, useParams } from "react-router-dom";
import { validateMeeting } from "../api";

export default function Meeting({
  meetingId,
  setMeetingId,
  micEnabled,
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
  const { slug } = useParams();
  const _meetingId = meetingId !== "" ? meetingId : slug;
  const navigate = useNavigate();

  useEffect(() => {
    async function checkMeetingId() {
      const valid = await validateMeeting({
        roomId: _meetingId,
      });
      if (valid) {
        setMeetingId(_meetingId);
        setMeetingStarted(true);
      } else {
        console.log(_meetingId);
        navigate("/404");
      }
    }
    checkMeetingId();
  }, []);

  return (
    <MeetingProvider
      config={{
        meetingId: _meetingId,
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
          alert("Meeting Left");
        }}
        setIsMeetingLeft={setIsMeetingLeft}
        selectedMic={selectedMic}
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
