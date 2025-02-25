"use client";
import { useEffect, useMemo, useState } from "react";
import "./ThemeSwitcher.css";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

const ThemeSwitcher = ({ darkClassName = "dark" }) => {
  const prefersDarkMode = useMemo(() => {
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches;
    console.log("Prefers dark mode:", prefersDark);
    return prefersDark;
  }, []);

  // State to hold the selected theme
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);
  console.log("Initial dark mode state:", isDarkMode);

  // Apply the selected theme (dark or light) when the component mounts
  useEffect(() => {
    console.log("Applying theme on mount");
    applyTheme();
  }, []);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    console.log("Toggling theme");
    setIsDarkMode(!isDarkMode);
    applyTheme(!isDarkMode);
  };

  // Apply the selected theme by adding/removing a class to the body element
  const applyTheme = (darkMode) => {
    if (darkMode === undefined) darkMode = isDarkMode;
    console.log("Applying theme:", darkMode);
    if (darkMode) {
      document.body.classList.add(darkClassName);
      console.log("Added class:", darkClassName);
    } else {
      document.body.classList.remove(darkClassName);
      console.log("Removed class:", darkClassName);
    }
  };

  return (
    <div>
      <button data-testid="themeSwitcherButton" className="btn" onClick={toggleTheme}>
        <Image src={require("/public/sun_icon.png")} alt="Picture of the author" />
      </button>
    </div>
  );
};

ThemeSwitcher.propTypes = {
  darkClassName: PropTypes.string,
};

ThemeSwitcher.defaultProps = {
  darkClassName: "dark",
};

export default ThemeSwitcher;
