import React from "react";

export default function LeavePage({ setIsMeetingLeft }) {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#1F2937",
        flexDirection: "column",
        flex: "1 1 0%",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1
        style={{
          color: "#ffffff",
          fontSize: "2.25rem",
          lineHeight: "2.5rem",
        }}
      >
        You left the meeting!
      </h1>
      <div style={{ marginTop: "3rem" }}>
        <button
          style={{
            paddingTop: "0.75rem",
            paddingBottom: "0.75rem",
            paddingLeft: "4rem",
            paddingRight: "4rem",
            color: "#ffffff",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            width: "100%",
            borderRadius: "0.5rem",
          }}
          onClick={() => {
            setIsMeetingLeft(false);
          }}
        >
          Rejoin the Meeting
        </button>
      </div>
    </div>
  );
}
