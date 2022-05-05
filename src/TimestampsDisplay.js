import React from "react";

function TimestampsDisplay(props) {
  const { timestamps } = props;
  console.log(timestamps);
  return (
    <ol>
      {timestamps.map((ts, i) => {
        console.log(new Date(ts).toLocaleString());
        return <li key={i}>{new Date(ts).toLocaleString()}</li>
          })}
    </ol>
  );
}

export default TimestampsDisplay;
