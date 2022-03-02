import { useContext } from "react";
import { DiscordContext } from "../context/context";

import inbox from "../public/assets/icons/inbox.svg";
import phone from "../public/assets/icons/phone.svg";
import help from "../public/assets/icons/help.svg";
import pin from "../public/assets/icons/pin.svg";
import video from "../public/assets/icons/video.svg";

import at from "../public/assets/icons/at.svg";
import personPlus from "../public/assets/icons/person-plus.svg";

import ethLogo from "../public/assets/eth.png";
import Image from "next/image";

import styles from "../styles/ChatHeader.module.css";

const dummyAccount = "0xE03ea0325ac1FFe9F7E4987C346688a66AdF087b";

const leftIcons = [phone, video, pin, personPlus];
const rightIcons = [inbox, help];

export default function ChatHeader() {
  const { roomName, currentAccount, connectWallet } =
    useContext(DiscordContext);

  return (
    <div className={styles.chatHeader}>
      <div className={styles.roomNameContainer}>
        <Image
          height={20}
          width={20}
          src={at}
          className={styles.svg}
          alt="Icon"
        />
        <h3 className={styles.title}>
          {roomName}
          <div className={`${styles.chartHeaderStatus}`}>
            <i className="online" />
          </div>
        </h3>
      </div>
      {currentAccount ? (
        <div className={styles.connectedWallet}>
          <Image src={ethLogo} height={20} width={15} alt="ethLogo" />
          <span className={styles.separator}>{"|"}</span>
          {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
        </div>
      ) : (
        <div className={styles.connectWallet} onClick={() => connectWallet()}>
          Connect Wallet
        </div>
      )}

      <div className={styles.headerIconsContainer}>
        {leftIcons.map((icon) => (
          <div className={styles.headerItem}>
            <Image height={25} width={25} src={icon} className={styles.svg} />
          </div>
        ))}
      </div>
      <input
        type="search"
        placeholder="Search"
        style={{ maxWidth: "200px", marginRight: "8px" }}
      />

      <div className={styles.headerIconsContainer}>
        {rightIcons.map((icon) => (
          <div className={styles.headerItem}>
            <Image height={25} width={25} src={icon} className={styles.svg} />
          </div>
        ))}
      </div>
    </div>
  );
}
