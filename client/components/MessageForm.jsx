import React, { useContext } from "react";
import { DiscordContext } from "../context/context";
import styles from "../styles/MessageForm.module.css";
import plusField from "../public/assets/icons/plus-filled.svg";
import sticker from "../public/assets/icons/sticker.svg";
import smiley from "../public/assets/icons/smiley.svg";
import gift from "../public/assets/icons/gift.svg";
import gif from "../public/assets/icons/gif.svg";
import Image from "next/image";

const icons = [gift, gif, sticker, smiley];

export default function MessageForm() {
  const {
    messageText,
    setMessageText,
    placeholder,
    gun,
    roomName,
    currentAccount,
    currentUser,
  } = useContext(DiscordContext);

  const sendMessage = (event) => {
    event.preventDefault();

    if (messageText.trim() === "") return;

    const messagesRef = gun.get(roomName);

    const newMessage = {
      sender: currentUser.name,
      avatar: currentUser.avatar
        ? currentUser.avatar
        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU",
      content: messageText.trim(),
      createdAt: Date().substring(4, 11),
      messageId: Date().now(),
    };

    messagesRef.set(newMessage);
    setMessageText("");
  };

  return (
    <form
      className={styles.chatInputContainer}
      onSubmit={(event) => sendMessage(event)}
    >
      <div className={styles.chatInputWrapper}>
        <div className={styles.svgContainer}>
          <Image
            height={25}
            width={25}
            src={plusField}
            className={styles.svg}
          />
        </div>

        <input
          type="text"
          className={styles.chatInput}
          value={messageText}
          disabled={currentAccount.name}
          onInput={(e) => setMessageText(e.target.value)}
          placeholder={placeholder}
        />

        {icons.map((icon, index) => (
          <div className={styles.svgContainer} key={index}>
            <Image width={25} height={25} className={styles.svg} src={icon} />
          </div>
        ))}
      </div>
    </form>
  );
}
