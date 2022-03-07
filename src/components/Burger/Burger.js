import { bool, func } from "prop-types";
import { StyledBurger } from "./Burger.styled";
import React, { useState, useEffect } from "react";
import Button from "../Button";

const Burger = ({ open, setOpen, color, bgColor }) => {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  return (
    <StyledBurger color={color} open={open} onClick={() => setOpen(!open)}>
      {screenSize.dynamicWidth > 766 ? (
        <Button
          text={open === true ? "CLOSE" : "MENU"}
          shadowColor={open === true ? "#191D1E" : color ? color : "#EB3581"}
          color={
            open === true ? "#fff" : color === "black" ? "#fff" : "#191D1E"
          }
          bgColor={open === true ? "#191D1E" : color ? color : "#EB3581"}
          width="8rem"
          padding="0.5rem"
        />
      ) : (
        <>
          <div />
          <div />
          <div />
        </>
      )}
    </StyledBurger>
  );
};
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Burger;
