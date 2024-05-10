import { Link } from "react-scroll";
import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";

const Sidebar = ({darkMode}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="sotashi font-medium  hamburger-menu"
        onClick={handleMenuToggle}
        style={{
          position: "fixed",
          top: "36px",
          right: "30px",
          height: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          zIndex: "999",
        }}
      >
        {isOpen ? (
          <div style={{ transform:  "rotate(45deg)"}} />
        ) : (
          <>
            <div
              style={{
                height: "3px",
                width: "24px",
                background: darkMode ? "#55E5A4": "#000000",
                marginBottom: "4px",
              }}
            />
            <div
              style={{
                height: "3px",
                width: "24px",
                background: darkMode ? "#55E5A4": "#000000",
                marginBottom: "4px",
              }}
            />
            <div
              style={{ height: "3px", width: "24px", background: darkMode ? "#55E5A4": "#000000", }}
            />
          </>
        )}
      </div>
      <Menu
        isOpen={isOpen}
        onStateChange={(state) => setIsOpen(state.isOpen)}
        styles={{
          bmBurgerButton: { display: "none" },
          bmCrossButton: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "20px",
            height: "20px",
            top: "36px",
            right: "30px",
          },
          bmCross: {
            background: "#55E5A4",
            height: "2px",
            width: "20px",
          },
          bmMenuWrap: {
            position: "fixed",
            width: "100%",
            top: 0,
            zIndex: 1000,
          },
          bmMenu: {
            background: "rgba(0, 0, 0, 0.7)",
            // padding: "2.5em 1.5em 0",
            fontSize: "1.15em",
            textAlign: "center",
            width: "100vw",
          },
          bmItemList: { color: "#ffffff", padding: "0.8em" },
          bmOverlay: { background: "rgba(0, 0, 0, 0.5)" },
        }}
      >
        <div className="bm-cross-button" onClick={handleMenuToggle}>
          <div className="bm-cross" />
        </div>
        <Link
          to="/about"
          className="font-semibold text-md text-[#55E5A4]"
          onClick={handleLinkClick}
          spy={true}
          smooth={true}
          duration={1000}
        >
          About
        </Link>
        <Link
          to="/projects"
          className="mt-5 font-semibold text-md text-[#55E5A4]"
          onClick={handleLinkClick}
          spy={true}
          smooth={true}
          duration={1000}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="font-semibold text-md mt-5"
          onClick={handleLinkClick}
          spy={true}
          smooth={true}
          duration={1000}
        >
          Contact
        </Link>
      </Menu>
    </>
  );
};

export default Sidebar;


