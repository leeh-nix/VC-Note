import { useEffect, useRef, useState } from "react";
import "./App.css";
import JoiningPage from "./pages/JoiningPage";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MeetingWrapper from "./meeting/MeetingWrapper";
import NotFound from "./pages/NotFound";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [meetingId, setMeetingId] = useState("");
  const [isloggedIn, setIsloggedIn] = useState(false);
  const [isHost, setIsHost] = useState(false);
  const [hostID, setHostID] = useState(null);
  const [participantName, setParticipantName] = useState("");
  const [micOn, setMicOn] = useState(false);
  const [webcamOn, setWebcamOn] = useState(true);
  const [selectedMic, setSelectedMic] = useState({ id: null });
  const [selectedWebcam, setSelectedWebcam] = useState({ id: null });
  const [selectWebcamDeviceId, setSelectWebcamDeviceId] = useState(selectedWebcam.id);
  // const [meetingType, setMeetingType] = useState(meetingTypes.MEETING);
  // const [meetingMode, setMeetingMode] = useState(Constants.modes.CONFERENCE);
  const [selectMicDeviceId, setSelectMicDeviceId] = useState(selectedMic.id);
  const [isMeetingStarted, setMeetingStarted] = useState(false);
  const [isMeetingLeft, setIsMeetingLeft] = useState(false);
  const [raisedHandsParticipants, setRaisedHandsParticipants] = useState([]);

  const useRaisedHandParticipants = () => {
    const raisedHandsParticipantsRef = useRef();

    const participantRaisedHand = (participantId) => {
      const raisedHandsParticipants = [...raisedHandsParticipantsRef.current];
      const newItem = { participantId, raisedHandOn: new Date().getTime() };
      const participantFound = raisedHandsParticipants.findIndex(({ participantId: pID }) => pID === participantId);

      if (participantFound === -1) {
        raisedHandsParticipants.push(newItem);
      } else {
        raisedHandsParticipants[participantFound] = newItem;
      }

      setRaisedHandsParticipants(raisedHandsParticipants);
    };

    useEffect(() => {
      raisedHandsParticipantsRef.current = raisedHandsParticipants;
    }, [raisedHandsParticipants]);

    const _handleRemoveOld = () => {
      const raisedHandsParticipants = [...raisedHandsParticipantsRef.current];
      const now = new Date().getTime();
      const persisted = raisedHandsParticipants.filter(({ raisedHandOn }) => {
        return parseInt(raisedHandOn) + 15000 > parseInt(now);
      });

      if (raisedHandsParticipants.length !== persisted.length) {
        setRaisedHandsParticipants(persisted);
      }
    };

    useEffect(() => {
      const interval = setInterval(_handleRemoveOld, 1000);

      return () => {
        clearInterval(interval);
      };
    }, []);
  };

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsloggedIn(true);
      setParticipantName(user.displayName);
    }
  });

  return (
    <Router>
      <Routes>
        <Route
          path="/meeting/:slug"
          element={
            <MeetingWrapper
              isHost={isHost}
              participantName={participantName}
              setParticipantName={setParticipantName}
              setMeetingId={setMeetingId}
              setMicOn={setMicOn}
              micEnabled={micOn}
              webcamEnabled={webcamOn}
              setSelectedMic={setSelectedMic}
              setSelectedWebcam={setSelectedWebcam}
              setWebcamOn={setWebcamOn}
              isMeetingStarted={isMeetingStarted}
              setIsMeetingLeft={setIsMeetingLeft}
              isMeetingLeft={isMeetingLeft}
              isloggedIn={isloggedIn}
              meetingId={meetingId}
              setMeetingStarted={setMeetingStarted}
              selectedMic={selectedMic}
              selectedWebcam={selectedWebcam}
              selectWebcamDeviceId={selectWebcamDeviceId}
              setSelectWebcamDeviceId={setSelectWebcamDeviceId}
              selectMicDeviceId={selectMicDeviceId}
              setSelectMicDeviceId={setSelectMicDeviceId}
              useRaisedHandParticipants={useRaisedHandParticipants}
              raisedHandsParticipants={raisedHandsParticipants}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Landing setMeetingId={setMeetingId} isloggedIn={isloggedIn} setIsloggedIn={setIsloggedIn} setIsHost={setIsHost} />} />
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
        <Route path="/login" element={<Login setParticipantName={setParticipantName} />} />
        <Route path="/signup" element={<Signup setParticipantName={setParticipantName} />} />
      </Routes>
    </Router>
  );
}

export default App;
