import { MouseEventHandler } from "react";

import styles from "@styles/css/components/SmallButton.module.css";

interface Props {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const SmallButton = ({ label, onClick }: Props) => (
  <button onClick={onClick} className={styles.btn}>
    {label}
  </button>
);
