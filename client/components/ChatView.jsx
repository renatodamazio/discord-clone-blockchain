import React, { useEffect, useState } from "react";
import styles from "../styles/ChatView.module.css";
import ChatHeader from "./ChatHeader";
import MessageForm from "./MessageForm";
import { useContext } from "react";
import { DiscordContext } from "../context/context";
import MessageCard from "./MessageCard";
import userPictureDefault from "../public/images/user.png";

export default function ChatView() {
  const { state } = useContext(DiscordContext);
  const [messages, setMessages] = useState([]);

  const messagesArray = () => {
    return state.messages.filter((value, index) => {
      const _value = JSON.stringify(value);

      return (
        index ===
        state.messages.findIndex((obj) => {
          return JSON.stringify(obj) === _value;
        })
      );
    });
  };

  useEffect(() => {
    const requireMessages = messagesArray();
    setMessages(requireMessages);
  }, [state])
  return (
    <div className={styles.chatView}>
      <ChatHeader />
      <div className={styles.messageContainer}>
        {messages.map((message, index) => (
          <MessageCard
            key={index}
            avatar={typeof message.avatar === "string" ? message.avatar : userPictureDefault}
            sender={message.sender}
            timestamp={message.createdAt}
            content={message.content}
          />
        ))}
      </div>

      <MessageForm />
    </div>
  );
}
