import React from "react";
import { Button, Stack } from "@mui/material";
import { categories } from "../Utils/constants";
import { useState } from "react";

const SideBar = ({ categorySelected, setcategorySelected }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          onClick={() => {
            setcategorySelected(category.name);
          }}
          key={category.name}
          className={"category-btn"}
          style={{
            background: category.name === categorySelected && "#FC1503",
            color: "white",
          }}
        >
          <span
            style={{
              color: category.name === categorySelected ? "white" : "#FC1503",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === categorySelected ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
