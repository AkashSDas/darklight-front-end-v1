import { MouseEventHandler } from "react";

import styles from "@styles/css/components/SuccessButton.module.css";

interface Props {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const SuccessButton = ({ label, onClick }: Props) => (
  <button onClick={onClick} className={styles.btn}>
    {label}
  </button>
);
