import { useState } from "react";
import "./App.css";
import JoiningPage from "./pages/JoiningPage";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [meetingId, setMeetingId] = useState("");
  const [participantName, setParticipantName] = useState("");
  const [micOn, setMicOn] = useState(false);
  const [webcamOn, setWebcamOn] = useState(false);
  const [selectedMic, setSelectedMic] = useState({ id: null });
  const [selectedWebcam, setSelectedWebcam] = useState({ id: null });
  const [selectWebcamDeviceId, setSelectWebcamDeviceId] = useState(selectedWebcam.id);
  // const [meetingType, setMeetingType] = useState(meetingTypes.MEETING);
  // const [meetingMode, setMeetingMode] = useState(Constants.modes.CONFERENCE);
  const [selectMicDeviceId, setSelectMicDeviceId] = useState(selectedMic.id);
  const [isMeetingStarted, setMeetingStarted] = useState(false);
  const [isMeetingLeft, setIsMeetingLeft] = useState(false);
  const [raisedHandsParticipants, setRaisedHandsParticipants] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing setMeetingId={setMeetingId}/>} />
        <Route
          path="/join"
          element={
            <JoiningPage
              participantName={participantName}
              setParticipantName={setParticipantName}
              setMeetingId={setMeetingId}
              setMicOn={setMicOn}
              micEnabled={micOn}
              webcamEnabled={webcamOn}
              setSelectedMic={setSelectedMic}
              setSelectedWebcam={setSelectedWebcam}
              setWebcamOn={setWebcamOn}
              // onClickStartMeeting={() => {
              //   setMeetingStarted(true);
              // }}
              startMeeting={isMeetingStarted}
              setIsMeetingLeft={setIsMeetingLeft}
              // meetingType={meetingType}
              // setMeetingType={setMeetingType}
              // meetingMode={meetingMode}
              // setMeetingMode={setMeetingMode}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
