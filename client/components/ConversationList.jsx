import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/ConversationList.module.css";
import friends from "../public/assets/icons/friends.svg";
import nitro from "../public/assets/icons/nitro.svg";
import DmCard from "./DmCard";
import avatar1 from "../public/assets/avatar-1.png";
import avatar2 from "../public/assets/avatar-2.png";
import avatar3 from "../public/assets/avatar-3.png";
import avatar4 from "../public/assets/avatar-4.png";

const dummyDms = [
  {
    id: 1,
    name: "Renato",
    avatar: avatar1,
  },
  {
    id: 2,
    name: "Amanda",
    avatar: avatar2,
  },
  {
    id: 3,
    name: "João",
    avatar: avatar3,
  },
  {
    id: 4,
    name: "Fernanda",
    avatar: avatar4,
  },
];

export default function ConversationList() {
  const [dms, setDms] = useState(dummyDms);

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
        <div className={styles.dmTitle}>DIRECT MESSAGES</div>
        {dms.map((dm) => (
          <DmCard
            key={dm.id}
            name={dm.name}
            id={dm.id}
            status="online"
            avatar={
              dm.avatar ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFI"
            }
          />
        ))}
      </div>
    </div>
  );
}
