import { useOutsideAlerter } from "hooks/useOutsideAlerter";
import { useRef } from "react";

/**
 * Component that alerts if you click outside of it
 */
export const OutsideAlerter = (props: {
  onOutsideClick: Function;
  children: any;
}) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.onOutsideClick);

  return <div ref={wrapperRef}>{props.children}</div>;
};
