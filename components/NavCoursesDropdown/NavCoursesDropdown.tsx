import { useState } from "react";

import { skills } from "@lib/skills";

import BusinessIcon from "../../public/icons/business-bag.svg";
import ChartIcon from "../../public/icons/chart.svg";
import HealthIcon from "../../public/icons/heart.svg";
import StockMarketIcon from "../../public/icons/money-bag.svg";
import PenIcon from "../../public/icons/pen.svg";
import ThunderIcon from "../../public/icons/thunder.svg";

const items = [
  {
    icon: <ChartIcon />,
    label: "Data Science",
    badge: { label: "NEW", color: "text-blue-700", bg: "bg-blue-100" },
  },
  { icon: <ThunderIcon />, label: "Deep Learning" },
  {
    icon: <PenIcon />,
    label: "UI/UX Designing",
    badge: { label: "PRO", color: "text-green-700", bg: "bg-green-100" },
  },
  { icon: <StockMarketIcon />, label: "Stock Market" },
  { icon: <BusinessIcon />, label: "Business" },
  { icon: <HealthIcon />, label: "Health" },
];

export const NavCoursesDropdown = () => {
  const [category, setCategory] = useState(null);

  return (
    <div
      className="border border-stroke1 border-solid rounded-xl absolute hidden group-hover:flex gap-4 p-2 h-[80vh] max-h-[600px] shadow-blue-sm"
      onMouseLeave={() => setCategory(null)}
    >
      <ul className="w-[240px] rounded-lg bg-[#f8f8f8] overflow-y-scroll h-full">
        {items.map((item) => (
          <li
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#ECECEC]"
            onMouseEnter={() => setCategory(item.label)}
          >
            <span>{item.icon}</span>
            <span className="text-d-body flex-1">{item.label}</span>
            {item.badge && (
              <span
                className={`rounded-full text-[12px] font-medium tracking-[1px] px-[6px] py-[2px] ${item.badge.bg} ${item.badge.color}`}
              >
                {item.badge.label}
              </span>
            )}
          </li>
        ))}
      </ul>

      {category && (
        <div className="w-[500px]">
          <h4 className="h4 text-text-grey">Popular Skills in {category}</h4>
          <div className="flex gap-2 flex-wrap mt-[12px]">
            {skills[category].map((skill: string) => (
              <span className="bg-[#EBEBED] hover:bg-[#e1e0e0] rounded-[4px] py-[2px] px-[6px] text-[14px] text-text-grey cursor-pointer">
                {skill}
              </span>
            ))}
          </div>

          <hr className="bg-[#EBEBED] my-6" />

          <h4 className="h4 text-text-grey">Trending Courses</h4>

          <div className="flex flex-col gap-4 my-[12px]">
            <div className="flex gap-2">
              <img
                src="https://images.unsplash.com/photo-1662763998542-d374336f18d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80"
                alt="Course card"
                className="w-[120px] h-[70px] rounded-[6px] bg-[#EBEBED]"
              />

              <div className="overflow-hidden">
                <h2 className="body text-text-grey font-bold leading-4 mb-1 truncate">
                  Machine Learning for Beginners and Machine Learning for
                  Beginners and Machine Learning for Beginners and
                </h2>
                <p className="caption text-text-light-grey truncate">
                  Learn everything from start to end with this course Learn
                  everything from start to end with this course Learn everything
                  from start to end with this course
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <img
                src="https://images.unsplash.com/photo-1662763998542-d374336f18d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80"
                alt="Course card"
                className="w-[120px] h-[70px] rounded-[6px] bg-[#EBEBED]"
              />

              <div className="overflow-hidden">
                <h2 className="body text-text-grey font-bold leading-4 mb-1 truncate">
                  Machine Learning for Beginners and Machine Learning for
                  Beginners and Machine Learning for Beginners and
                </h2>
                <p className="caption text-text-light-grey truncate">
                  Learn everything from start to end with this course Learn
                  everything from start to end with this course Learn everything
                  from start to end with this course
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
