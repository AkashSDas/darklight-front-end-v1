import { MouseEventHandler } from "react";

import styles from "@styles/css/components/OutlineButton.module.css";

interface Props {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const OutlineButton = ({ label, onClick }: Props) => (
  <button onClick={onClick} className={styles.btn}>
    {label}
  </button>
);
