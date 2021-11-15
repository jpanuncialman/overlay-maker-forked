import "./styles.css";
import { contentArea } from "./config.js";

const { style } = contentArea;

export default function ContentArea() {
  return (
    <div className="content-area">
      <div className="canvas" style={style} />
    </div>
  );
}
