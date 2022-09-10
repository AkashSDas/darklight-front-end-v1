import { MouseEventHandler } from "react";

import styles from "@styles/css/components/PrimaryButton.module.css";

interface Props {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const PrimaryButton = ({ label, onClick }: Props) => (
  <button onClick={onClick} className={styles.btn}>
    {label}
  </button>
);
