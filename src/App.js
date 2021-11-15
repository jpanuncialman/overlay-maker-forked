import "./styles.css";
import { general } from "./config.js";
import ContentArea from "./ContentArea";
import CharacterArea from "./CharacterArea";
import BottomArea from "./BottomArea";
import ChatArea from "./ChatArea";

const { style } = general;

console.log("style", style);

export default function App() {
  return (
    <div className="App" style={style}>
      <div className="left-area">
        <ContentArea />
        <BottomArea />
      </div>
      <div className="right-area">
        <ChatArea />
        <CharacterArea />
      </div>
    </div>
  );
}
