import { useState } from "react";
import DeleteLast from "./DeleteLast";

//Object as state
function CoinTossCounter() {
  const [results, setResults] = useState([]);
  const [counts, setCounts] = useState({ H: 0, T: 0 });

  const handleClick2 = (value) => {
    setResults([...results, value]);
    setCounts({
      ...counts,
      [value]: counts[value] + 1,
    });
  };

  const handleClick = (value) => setResults([...results, value]);

  const lis = results.map((result, index) => (
    <li key={`toss-${index}`}>{result === "H" ? "Heads" : "Tails"}</li>
  ));

  const handleDeleteLast = () => {
    const last = results[results.length - 1];
    const list = results.slice(0, -1);
    console.log("last",last)
    console.log("list",list)

    setResults(list);
    if (last) {
      setCounts({
        ...counts,
        [last]: counts[last] - 1,
      });
    }
  };
  return (
    <section>
      <div>
        <button onClick={() => handleClick2("H")}>Heads</button>
        <button onClick={() => handleClick2("T")}>Tails</button>
      </div>
      <ul>{lis}</ul>
      <ul>
        <li>Heads: {counts["H"]}</li>
        <li>Tails: {counts["T"]}</li>
      </ul>
      <button onClick={handleDeleteLast}>Delete Last</button>
    </section>
  );
}

export default CoinTossCounter;
