import React, { useState } from "react";

function DogForm() {
  const [dogName, setDogName] = useState("");
  const [dogBreed, setDogBreed] = useState("");
  const [dogAge, setDogAge] = useState("");

  const handleDogName = (evt) => setDogName(evt.target.value);
  const handleDogBreed = (evt) => setDogBreed(evt.target.value);
  const handleDogAge = (evt) => setDogAge(evt.target.value);

  console.log(dogName);
  console.log(dogBreed);
  console.log(dogAge);

  const handleSubmitButton = (evt) => {
    evt.preventDefault();
    console.log("submitted", dogName, dogBreed, dogAge);
    setDogName("")
    setDogBreed("")
    setDogAge("")
  };

  return (
    <fieldset>
      <form onSubmit={handleSubmitButton}>
        <legend> Dog Form</legend>
        <label htmlFor="dogName">Name: </label>
        <input
          id="dogName"
          type="text"
          name="name"
          onChange={handleDogName}
          value={dogName}
        ></input>
        <label htmlFor="dogBreed">Breed: </label>
        <input
          id="dogBreed"
          type="text"
          name="breed"
          onChange={handleDogBreed}
          value={dogBreed}
        ></input>
        <label htmlFor="dogAge">Age: </label>
        <input
          id="dogAge"
          type="text"
          name="age"
          onChange={handleDogAge}
          value={dogAge}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </fieldset>
  );
}

export default DogForm;
