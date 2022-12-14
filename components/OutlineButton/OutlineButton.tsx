import { MouseEventHandler } from "react";

import styles from "@styles/css/components/OutlineButton.module.css";

interface Props {
  label: string;
  outline?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const OutlineButton = ({ label, outline = true, onClick }: Props) => {
  const outlineStyle = outline ? "border-stroke1 border-solid border" : "";

  return (
    <button onClick={onClick} className={`${styles.btn} ${outlineStyle}`}>
      {label}
    </button>
  );
};
