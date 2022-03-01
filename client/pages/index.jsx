import styles from "../styles/Home.module.css";
import Sidebar from "../components/Sider";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.main}></div>
    </div>
  );
}
