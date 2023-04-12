import React from "react";
import { useSelector } from "react-redux";
import MenuItems from "./MenuItems";

const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="px-16 mr-16 shadow-2xl">
      <MenuItems />
    </div>
  );
};

export default Sidebar;
