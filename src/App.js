import "./App.css";
import VideoGrid from "./Components/VideoGrid";
import RightSidebar from "./Components/RightSidebar";
import LeftSidebar from "./Components/LeftSidebar/LeftSidebar";

function App() {
  return (
    <div
    // style={{ display: "flex" }}
    >
      <LeftSidebar />
      <VideoGrid />
      {/* <RightSidebar /> */}
    </div>
  );
}

export default App;
