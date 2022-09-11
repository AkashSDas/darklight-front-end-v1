import BagIcon from "../../public/icons/backpack.svg";
import PenIcon from "../../public/icons/pen.svg";
import LampIcon from "../../public/icons/table-lamp.svg";
import TeachIcon from "../../public/icons/training.svg";

export const MenuDropdown = () => {
  const items = [
    { icon: <BagIcon />, label: "Courses" },
    { icon: <TeachIcon />, label: "Teach" },
    { icon: <PenIcon />, label: "Blog" },
    { icon: <LampIcon />, label: "About Us" },
  ];

  return (
    <ul className="border border-stroke1 border-solid rounded-xl flex flex-col w-[240px] p-2 shadow-blue-sm absolute right-0">
      {items.map((item) => (
        <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#ECECEC]">
          <span>{item.icon}</span>
          <span className="text-d-body flex-1">{item.label}</span>
        </li>
      ))}
    </ul>
  );
};
