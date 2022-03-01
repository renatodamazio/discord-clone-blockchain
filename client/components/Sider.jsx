import styles from "../styles/Sidebar.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

import avatar1 from "../public/assets/avatar-1.png";
import avatar2 from "../public/assets/avatar-2.png";
import avatar3 from "../public/assets/avatar-3.png";
import avatar4 from "../public/assets/avatar-4.png";

import RoomAvatar from "../components/RoomAvatar";

const dummyChannels = [
  {
    id: 1,
    name: "general",
    avatar: avatar1,
  },
  {
    id: 2,
    name: "random",
    avatar: avatar2,
  },
  {
    id: 3,
    name: "chill",
    avatar: avatar3,
  },
  {
    id: 4,
    name: "buildspace",
    avatar: avatar4,
  },
];

const Sidebar = () => {
  const router = useRouter();
  const [channels, setChannels] = useState(dummyChannels);

  return (
    <div className={styles.wrapper}>
      {channels.map((channel) => (
        <RoomAvatar
          key={channel.id}
          id={channel.id}
          avatar={channel.avatar}
          name={channel.name}
        />
      ))}
    </div>
  );
};

export default Sidebar;
