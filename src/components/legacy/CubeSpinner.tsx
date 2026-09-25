import { FaPython, FaCss3, FaJsSquare, FaReact } from "react-icons/fa";
import { SiDjango, SiNextdotjs } from "react-icons/si";
import styles from "./CubeSpinner.module.css";

export default function CubeSpinner() {
  return (
    <div className={styles.wrap}>
      <div className={styles.cubespinner}>
        <div className={styles.face1}>
          <FaPython color="#003cff" />
        </div>
        <div className={styles.face5}>
          <FaJsSquare color="#EFD81D" />
        </div>
        <div className={styles.face4}>
          <FaReact color="#5ED4F4" />
        </div>
        <div className={styles.face6}>
          <SiNextdotjs color="#000000" />
        </div>
        <div className={styles.face2}>
          <SiDjango color="#00db2c" />
        </div>
        <div className={styles.face3}>
          <FaCss3 color="#28A4D9" />
        </div>
      </div>
    </div>
  );
}
