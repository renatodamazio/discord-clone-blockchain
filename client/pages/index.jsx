import styles from "../styles/Home.module.css";
import Sidebar from "../components/Sider";
import ConversationList from "../components/ConversationList";
import ChatView from "../components/ChatView";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Discord Clone</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <meta name="description" content="Discord clone React, gunjs, Vercel, Next Js, CSS, web3.0, metamask" />
        <meta name="author" content="Renato Damázio" />
      </Head> 
      <Sidebar />
      <div className={styles.main}>
        <ConversationList />
        <ChatView />
      </div>
    </div>
  );
}
