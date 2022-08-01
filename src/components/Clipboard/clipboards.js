import React from "react";
import Clipboard from "./clipboard";
import styles from "./clipboards.module.css";

export default function () {
  const [clipboardCount, setClipboardCount] = React.useState(3);
  const handleClickboardCount = (count) => setClipboardCount(count);

  return (
    <div className={styles.clip}>
      <h2>Clipboards App</h2>
      <button onClick={() => handleClickboardCount(clipboardCount + 1)}>
        + clipboard
      </button>
      <button onClick={() => handleClickboardCount(clipboardCount - 1)}>
        - clipboard
      </button>
      <ul className="clipboards">
        {[...Array(clipboardCount)].map((clip, i) => (
          <li key={`clipboard-${i}`}>
            <Clipboard />
          </li>
        ))}
      </ul>
    </div>
  );
}
