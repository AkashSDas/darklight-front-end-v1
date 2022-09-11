import Link from "next/link";

import { IconOutlineButton } from "@components/IconOutlineButton";
import { NavCoursesDropdown } from "@components/NavCoursesDropdown";
import { OutlineButton } from "@components/OutlineButton";
import { PrimaryButton } from "@components/PrimaryButton";
import styles from "@styles/css/components/OutlineButton.module.css";

import ArrowDrownIcon from "../../public/icons/arrowdown.svg";
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
  <ul className="flex items-center gap-4">
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

const RightSection = () => (
  <ul className="flex items-center gap-4">
    <li>
      <IconOutlineButton icon={<SearchIcon />} />
    </li>
    <li>
      <OutlineButton label="Login" outline={false} />
    </li>
    <li>
      <PrimaryButton label="Get Started" />
    </li>
  </ul>
);
