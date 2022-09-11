import { MouseEventHandler } from "react";

import styles from "@styles/css/components/IconOutlineButton.module.css";

interface Props {
  icon: any;
  outline?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const IconOutlineButton = ({
  icon,
  outline = false,
  onClick,
}: Props) => {
  const outlineStyle = outline ? "border-stroke1 border-solid border" : "";

  return (
    <button onClick={onClick} className={`${styles.btn} ${outlineStyle}`}>
      {icon}
    </button>
  );
};
