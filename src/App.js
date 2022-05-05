import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import WelcomeBack from "./WelcomeBack";
import Greeting from "./Greeting";
import CountButton, { IncrementButtons } from "./IncrementButtons";
import Footer from "./Footer";
import Subscribe from "./Subscribe.js";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);

  const [fontSize, setFontSize] = useState(12);
  const fontSizeIncrease = () => setFontSize(fontSize+2);

  return (
    <>
      <Subscribe />
      <Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} handleFontSizeIncrease={fontSizeIncrease} />
      <Content loggedIn={loggedIn} text="CONTENT" fontStyle={fontSize}/>
      <WelcomeBack name="Joe" />
      <WelcomeBack name="Anna" />
      <WelcomeBack />
      <IncrementButtons />
      <Greeting name={"Avantha"} greeting={"good morning"} />
      <Greeting name={"Samara"} greeting={"good afternoon"} />
      <Greeting name={"Houston"} greeting={"good evening"} />
      <CountButton />
      <Footer />
    </>
  );
}

export default App;
