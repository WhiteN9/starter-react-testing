import { useState } from "react";
import DeleteLast from "./DeleteLast";

//Object as state
function CoinTossCounter() {
  const [counts, setCounts] = useState({ H: 0, T: 0 });
  const handleClick = (value) => {
    setCounts({
      ...counts,
      [value]: counts[value] + 1,
    });
  };

  return (
    <section>
      <div>
        <button onClick={() => handleClick("H")}>Heads</button>
        <button onClick={() => handleClick("T")}>Tails</button>
      </div>
      <ul>
        <li>Heads: {counts["H"]}</li>
        <li>Tails: {counts["T"]}</li>
      </ul>
      <DeleteLast counts={counts} setCounts={setCounts} last={face} />
    </section>
  );
}

// Array as state
function CoinTossCounter2() {
  const [results, setResults] = useState([]);

  const handleClick = (value) => {
    console.log(results);
    setResults([...results, value]);
  };

  const lis = results.map((result, index) => {
    return <li key={`toss-${index}`}>{result === "H" ? "Heads" : "Tails"}</li>;
  });
  return (
    <section>
      <div>
        <button onClick={() => handleClick("H")}>Heads</button>
        <button onClick={() => handleClick("T")}>Tails</button>
      </div>
      <ul>{lis}</ul>
      <DeleteLast results={results} setResults={setResults} />
    </section>
  );
}

export default CoinTossCounter2;
