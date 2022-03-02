import React from "react";
import styles from "../styles/MessageForm.module.css";
import plusField from "../public/assets/icons/plus-filled.svg";
import sticker from "../public/assets/icons/sticker.svg";
import smiley from "../public/assets/icons/smiley.svg";
import gift from "../public/assets/icons/gift.svg";
import gif from "../public/assets/icons/gif.svg";
import Image from "next/image";

const icons = [gift, gif, sticker, smiley];

export default function MessageForm() {
  return (
    <form className={styles.chatInputContainer}>
      <div className={styles.chatInputWrapper}>
        <div className={styles.svgContainer}>
          <Image
            height={25}
            width={25}
            src={plusField}
            className={styles.svg}  
          />
        </div>
        
        <input type="text" className={styles.chatInput} />

        {icons.map((icon) => (
          <div className={styles.svgContainer}>
            <Image width={25} height={25} className={styles.svg} src={icon} />
          </div>
        ))}
      </div>
    </form>
  );
}
