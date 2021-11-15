import "./styles.css";
import { chatArea } from "./config.js";

const { style, content } = chatArea;

export default function ChatArea() {
  return (
    <div className="chat-area">
      <div className="text-box chat-box" style={style}>
        {content}
      </div>
    </div>
  );
}
