import React, { useState } from "react";

function RSVPForm() {
  const initialRSVPForm = {
    name: "",
    age: "",
    newmember: false,
    comment: "",
  };

  const [rsvpform, setRSVPForm] = useState({ ...initialRSVPForm });

  const handleInputChange = (evt) => {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setRSVPForm({
      ...rsvpform,
      [evt.target.name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(
      rsvpform.name,
      rsvpform.age,
      rsvpform.newmember,
      rsvpform.comment
    );
    setRSVPForm({ ...initialRSVPForm });
  };
//   console.log(rsvpform);
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="personName">Name:</label>
      <input
        id="personName"
        type="text"
        name="name"
        value={rsvpform.name}
        onChange={handleInputChange}
      ></input>
      <label htmlFor="personAge">Age: </label>
      <select id="personAge" type="" name="age" onChange={handleInputChange}>
        <option value="Prefer not to say">Prefer not to say</option>
        <option value="0-19">0-19</option>
        <option value="20-39">20-39</option>
        <option value="40-59">40-59</option>
        <option value="60+">60+</option>
      </select>
      <label htmlFor="newMember">New Member:</label>
      <input
        id="newMember"
        type="checkbox"
        name="newmember"
        onChange={handleInputChange}
        checked={rsvpform.newmember}
      ></input>
      <label htmlFor="personComment">Comment:</label>
      <input
        id="personComment"
        type="text"
        name="comment"
        value={rsvpform.comment}
        onChange={handleInputChange}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RSVPForm;
