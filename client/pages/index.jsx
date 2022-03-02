import styles from "../styles/Home.module.css";
import Sidebar from "../components/Sider";
import ConversationList from "../components/ConversationList";
import ChatView from "../components/ChatView";
export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.main}>
        <ConversationList />
        <ChatView />
      </div>
    </div>
  );
}
