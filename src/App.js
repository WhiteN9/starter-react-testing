import React, { useState } from "react";
import Subscribe from "./Subscribe.js";
import Header from "./Header";
import SubscriberForm from "./SubscriberForm";
import SubscriberList from "./SubscriberList";
import Content from "./Content";
import CoinTossCounter from "./CoinTossCounter";
import WelcomeBack from "./WelcomeBack";
import CountButton, { IncrementButtons } from "./IncrementButtons";
import Greeting from "./Greeting";
import ClickTimes from "./ClickTimes";
import DogForm from "./DogForm";
import Footer from "./Footer";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);

  const [fontSize, setFontSize] = useState(12);
  const fontSizeIncrease = () => setFontSize(fontSize + 2);

  const [subscribers, setSubscribers] = useState([]);

  const createSubscriber = (newSubscriber) =>
    setSubscribers((currentSubscribers) => [
      ...currentSubscribers,
      newSubscriber,
    ]);

  const deleteSubscriber = (indexToDelete) =>
    setSubscribers((currentSubscribers) =>
      currentSubscribers.filter((_, index) => index !== indexToDelete)
    );

  return (
    <>
      <Subscribe />
      <Header
        loggedIn={loggedIn}
        handleLoggedInClick={toggleLoggedIn}
        handleFontSizeIncrease={fontSizeIncrease}
      />
      <SubscriberForm createSubscriber={createSubscriber} />
      <SubscriberList
        subscribers={subscribers}
        deleteSubscriber={deleteSubscriber}
      />
      <Content loggedIn={loggedIn} text="CONTENT" fontStyle={fontSize} />
      <CoinTossCounter />
      <WelcomeBack name="Joe" />
      <WelcomeBack name="Anna" />
      <WelcomeBack />
      <IncrementButtons />
      <Greeting name={"Avantha"} greeting={"good morning"} />
      <Greeting name={"Samara"} greeting={"good afternoon"} />
      <Greeting name={"Houston"} greeting={"good evening"} />
      <CountButton />
      <ClickTimes />
      <DogForm />
      <Footer />
    </>
  );
}

export default App;
