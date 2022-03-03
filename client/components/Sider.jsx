import styles from "../styles/Sidebar.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import RoomAvatar from "../components/RoomAvatar";

const Sidebar = () => {
  const router = useRouter();
  const [channels, setChannels] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/getchannels`
      );
      const data = await response.json();
      setChannels(data);

      router.push(`?channel=${data[0]?.roomId}&name=${data[0]?.roomName}`);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      {channels.map((channel) => (
        <RoomAvatar
          key={channel.id}
          id={channel.id}
          avatar={channel.avatar}
          name={channel.roomName}
        />
      ))}
    </div>
  );
};

export default Sidebar;
