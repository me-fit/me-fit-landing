import styles from "./Spinner.module.scss";

interface SpinnerProps {
  width?: string;
  height?: string;
}

/**
 * Copied from https://codepen.io/gaffareljeremie/pen/abGxbe
 */
function Spinner({ width = "32px", height = "32px" }: SpinnerProps) {
  return (
    <svg
      className={styles.spinner}
      width={width}
      height={height}
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className={styles.circle}
        fill="none"
        stroke-width="6"
        stroke-linecap="round"
        cx="33"
        cy="33"
        r="30"
      ></circle>
    </svg>
  );
}

export default Spinner;
