import React from "react";
import Image from "next/image";
import Style from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={Style.sidebar}>
      <div className={Style["sidebar-image-container"]}>
        {}
        <Image src="/logo.png" alt="Logo" width={150} height={150} className={Style["sidebar-image"]} />
      </div>
      {}
      <a href="/" className={Style["sidebar-link"]}>Home</a>
      <a href="/about" className={Style["sidebar-link"]}>About Us</a>
      <a href="/research" className={Style["sidebar-link"]}>Our Research</a>
      <a href="/help" className={Style["sidebar-link"]}>How to Help</a>
      <a href="/contact" className={Style["sidebar-link"]}>Contact Us</a>
      {/* More links as needed */}
    </div>
  );
};

export default Sidebar;
