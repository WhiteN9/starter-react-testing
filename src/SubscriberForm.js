import { useState } from "react";

function SubscriberForm({ createSubscriber }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (evt) => setName(evt.target.value);
  const handleEmailChange = (evt) => setEmail(evt.target.value);

  console.log("Current value of name:", name);
  console.log("Current value of email:", email);

  const handleSubmit = (ent) => {
    ent.preventDefault();
    console.log("Submitted", name, email);
    createSubscriber({name,email});
    setName("");
    setEmail("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="realname">
        Enter Your Name:
        <input
          id="realname"
          type="text"
          name="name"
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label htmlFor="emailaddress">
        Your Email:
        <input
          id="emailaddress"
          type="email"
          name="email"
          onChange={handleEmailChange}
          value={email}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SubscriberForm;
