import { Grid } from "@mui/material/";
import VideoCard from "./VideoCard";

export default function VideoGrid(props) {
  return (
    <div
      style={{
        flexGrow: 1,
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {[...Array(6)].map((_, index) => (
        // <VideoCard
        //   name="Kuro"
        //   src="https://cdn.discordapp.com/attachments/941558138602156062/1039808845897273354/006YqTs3gy1h6os9pk6c6j31xg132b1w.jpg"
        // />
        <div
          style={{
            height: "46%",
            width: "31%",
            border: "1px solid black",
            borderRadius: "15px",
            margin: "10px",
            backgroundColor: "darkgrey",
          }}
        ></div>
      ))}
    </div>
  );
}
