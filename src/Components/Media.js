import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Contexts/AuthProvider";
import MediaCard from "./MediaCard";

const Media = () => {
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  console.log(messages);
  // message API call

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/messageCollection`)
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  return (
    <div>
      {messages.map((message) => (
        <MediaCard key={message._id} message={message}></MediaCard>
      ))}
    </div>
  );
};

export default Media;
