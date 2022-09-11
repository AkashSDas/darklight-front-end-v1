import { useOutsideAlerter } from "hooks/useOutsideAlerter";
import Link from "next/link";
import { useRef, useState } from "react";

import { IconOutlineButton } from "@components/IconOutlineButton";
import { MenuDropdown } from "@components/MenuDropdown";
import { NavCoursesDropdown } from "@components/NavCoursesDropdown";
import { OutlineButton } from "@components/OutlineButton";
import { OutsideAlerter } from "@components/OutsideAlerter";
import { PrimaryButton } from "@components/PrimaryButton";
import iconBtnStyles from "@styles/css/components/IconOutlineButton.module.css";
import styles from "@styles/css/components/OutlineButton.module.css";

import ArrowDrownIcon from "../../public/icons/arrowdown.svg";
import MenuIcon from "../../public/icons/menu.svg";
import SearchIcon from "../../public/icons/search.svg";
import LogoMoonIcon from "../../public/logo-moon.svg";
import LogoTextIcon from "../../public/logo-text.svg";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between gap-3 mx-16 my-2">
      <LeftSection />
      <CenterSection />
      <RightSection />
    </nav>
  );
};

const CenterSection = () => (
  <ul className="hidden desk:flex items-center gap-4 ">
    <li className="relative group">
      <button className={`${styles.btn} flex items-center gap-1`}>
        <span>Courses</span>
        <span>
          <ArrowDrownIcon />
        </span>
      </button>

      <NavCoursesDropdown />
    </li>
    <li>
      <OutlineButton label="Teach" outline={false} />
    </li>
    <li>
      <OutlineButton label="Blog" outline={false} />
    </li>
    <li>
      <OutlineButton label="About Us" outline={false} />
    </li>
  </ul>
);

const LeftSection = () => (
  <Link href="/">
    <span className="flex items-center gap-2 cursor-pointer">
      <LogoMoonIcon />
      <LogoTextIcon />
    </span>
  </Link>
);

const RightSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setIsOpen(false));

  return (
    <ul className="flex items-center gap-4">
      <li>
        <IconOutlineButton icon={<SearchIcon />} />
      </li>
      <li ref={wrapperRef} className="relative">
        <button
          className={`${iconBtnStyles.btn}`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <MenuIcon />
        </button>

        {isOpen && <MenuDropdown />}
      </li>
      <li>
        <OutlineButton label="Login" outline={false} />
      </li>
      <li>
        <PrimaryButton label="Get Started" />
      </li>
    </ul>
  );
};
