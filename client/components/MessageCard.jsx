import React from "react";
import styles from "../styles/MessageCard.module.css";
import Image from "next/image";

export default function MessageCard({ sender, avatar, timestamp, content }) {
  return (
    <div className={styles.messageCard}>
      <div className={styles.messageAvatarContainer}>
        <Image
          height={40}
          width={40}
          src={avatar}
          className={styles.messageAvatar}
          alt={sender}
        />
      </div>

      <div>
        <div className={styles.messageDetails}>
          <p className={styles.sender}>{sender}</p>
          <small className={styles.timestamp}>{timestamp}</small>
        </div>
        <p className={styles.messageText}>{content}</p>
      </div>
    </div>
  );
}
