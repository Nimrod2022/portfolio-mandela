import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";

const Sidebar = () => {
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
        className="sotashi font-medium hamburger-menu"
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
          <div style={{ transform: "rotate(45deg)" }} />
        ) : (
          <>
            <div
              style={{
                height: "3px",
                width: "24px",
                background: "#55E5A4",
                marginBottom: "4px",
              }}
            />
            <div
              style={{
                height: "3px",
                width: "24px",
                background: "#55E5A4",
                marginBottom: "4px",
              }}
            />
            <div
              style={{ height: "3px", width: "24px", background: "#55E5A4" }}
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
            padding: "2.5em 1.5em 0",
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
        <a
          id="about"
          className="nav__link font-semibold text-md text-[#55E5A4]"
          href="/about"
          onClick={handleLinkClick}
        >
          About
        </a>
        <a
          id="projects"
          className="nav__link mt-5 font-semibold text-md text-[#55E5A4]"
          href="/projects"
          onClick={handleLinkClick}
        >
          Projects
        </a>
        <a
          id="contact"
          className="nav__link font-semibold text-md mt-5"
          href="/contact"
          onClick={handleLinkClick}
        >
          Contact
        </a>
       
      </Menu>
    </>
  );
};

export default Sidebar;
