import "./styles.css";
import { bottomArea } from "./config.js";

const { style, content } = bottomArea;

const textMarkup = content.map((zone) => {
  return (
    <div className="bottom-text-section" style={zone.style}>
      {zone.content.map((section) => {
        return <div style={section.style}> {section.text} </div>;
      })}
    </div>
  );
});

export default function BottomArea() {
  return (
    <div className="bottom-area">
      <div className="text-box bottom-box" style={style}>
        {textMarkup}
      </div>
    </div>
  );
}
