import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/ConversationList.module.css";
import friends from "../public/assets/icons/friends.svg";
import nitro from "../public/assets/icons/nitro.svg";

export default function ConversationList() {
  return (
    <div className={styles.conversations}>
      <div className={styles.conversationListTop}>
        <input type="search" placeholder="Find or start a conversation" />
      </div>
      <div className={styles.conversationContainer}>
        <div className={styles.elementsContainer}>
          <div className={styles.svgContainer}>
            <Image
              height={25}
              width={25}
              src={friends}
              className={styles.svg}
              alt="friends"
            />
          </div>
          <p>Friends</p>
        </div>

        <div className={styles.elementsContainer}>
          <div className={styles.svgContainer}>
            <Image
              height={25}
              width={25}
              src={nitro}
              className={styles.svg}
              alt="nitro"
            />
          </div>
          <p>Nitro</p>
        </div>
      </div>
    </div>
  );
}
