import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #E3E3E3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        type="text"
        placeholder="search..."
        className="search-bar"
        value=""
        onChange={() => {}}
      />
      <IconButton>
        <SearchIcon></SearchIcon>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
