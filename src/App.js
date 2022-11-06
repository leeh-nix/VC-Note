import "./App.css";
import VideoGrid from "./Components/VideoGrid";
import RightSidebar from "./Components/RightSidebar";
import LeftSidebar from "./Components/LeftSidebar/LeftSidebar";
import PermanentDrawerLeft from "./Components/PermanentDrawerLeft";

function App() {
  return (
    <div
    // style={{ display: "flex" }}
    >
      <PermanentDrawerLeft />
      <VideoGrid />
      {/* <RightSidebar /> */}
    </div>
  );
}

export default App;
