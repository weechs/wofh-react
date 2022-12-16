import React from "react";
import Snowfall from "react-snowfall";

export default function Snow() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: 0,
          zIndex: "1",
          background: "var(--color-xmasbg)"
        }}
      >
        <Snowfall snowflakeCount={500} />
      </div>
    </>
  );
}
