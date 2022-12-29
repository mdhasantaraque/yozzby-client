import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import CardSectionCard from "./CardSectionCard";

const CardSection = () => {
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  console.log(messages);
  // message API call

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/messageCollection`)
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  const threeMessages = messages.slice(0, 3);
  return (
    <div>
      {threeMessages.map((message) => (
        <CardSectionCard key={message._id} message={message}></CardSectionCard>
      ))}
    </div>
  );
};

export default CardSection;
