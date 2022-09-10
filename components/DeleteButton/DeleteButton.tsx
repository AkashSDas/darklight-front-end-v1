import { MouseEventHandler } from "react";

import styles from "@styles/css/components/DeleteButton.module.css";

interface Props {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const DeleteButton = ({ label, onClick }: Props) => (
  <button onClick={onClick} className={styles.btn}>
    {label}
  </button>
);
