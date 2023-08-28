import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../Utils/constants";
import { SearchBar } from "./index";

const NavBar = () => (
  <Stack
    direction="row"
    alignItems="center"
    paddingX={4}
    paddingY={2}
    sx={{
      position: "sticky",
      background: "#000",
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar></SearchBar>
  </Stack>
);

export default NavBar;
