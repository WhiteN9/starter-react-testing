import React, {useState} from "react";
import TimestampsDisplay from "./TimestampsDisplay";

function ClickTimes() {
  const [counts, setCounts] = useState([])
  
  const handleClick = (value) => {
    setCounts([...counts,value]);
  };
  return (
    <React.Fragment>
      <button onClick={() => handleClick(Date.now())}>Click Counter</button>
      <TimestampsDisplay timestamps={counts} />
    </React.Fragment>
    )
}

export default ClickTimes;
