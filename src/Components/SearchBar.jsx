import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [SearchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (SearchTerm) {
      navigate(`/search/${SearchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
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
        value={SearchTerm}
        onChange={(e) => {
          console.log(e.target.value);
          setSearchTerm(e.target.value);
        }}
      />
      <IconButton>
        <SearchIcon></SearchIcon>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
