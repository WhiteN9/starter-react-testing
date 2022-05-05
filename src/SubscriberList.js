import SubscribeView from "./SubscriberView";

function SubscriberList({ subscribers, deleteSubscriber }) {
  return (
    <>
      <h2>Subscribers</h2>
      <ul>
        {subscribers.map((subscriber, index) => (
          <SubscribeView
            deleteSubscriber={() => deleteSubscriber(index)}
            key={index}
            subscriber={subscriber}
          />
        ))}
      </ul>
    </>
  );
}

export default SubscriberList;
