import React from 'react'
import styles from "../styles/ChatView.module.css";
import ChatHeader from './ChatHeader';
import MessageForm from './MessageForm';

export default function ChatView() {
  return (
    <div className={styles.chatView}>
      <ChatHeader />
        <div className={styles.messageContainer}>
            
        </div>

        <MessageForm />
    </div>
  )
}
