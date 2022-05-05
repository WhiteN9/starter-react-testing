//Object as state
function DeleteLast({ counts, setCounts, last }) {
  const handleDeleteLast = () => {
    if (last) {
      setCounts({
        ...counts,
        [last]: counts[last] - 1,
      });
    }
  };
  return <button onClick={handleDeleteLast}>Delete Last</button>;
}

//Array as state
function DeleteLast2({ results, setResults }) {
//   const handleDeleteLast = () => {
//     const last = results[results.length - 1];
//     const list = results.slice(0, -1);
//     setResults(list);
//   };

  const handleDeleteLast = () => {
    const filteredList = results.filter(
      (result, index) => index !== results.length - 1
    );
    setResults(filteredList);
  };
  return <button onClick={handleDeleteLast}>Delete Last</button>;
}

export default DeleteLast;
