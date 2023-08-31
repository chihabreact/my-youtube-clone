import { BorderRight } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { FetchFromAPI } from "../Utils/fetchFromApi";
import { Videos, SideBar } from "./";

const Feed = () => {
  const [categorySelected, setcategorySelected] = useState("New");
  const [vid, setVid] = useState([]);

  useEffect(() => {
    // setVid(null);

    FetchFromAPI(`search?part=snippet&q=${categorySelected}`).then(
      (data) => (setVid(data.items), console.log(data.items))
    );
  }, [categorySelected]);
  console.log("the vid :");
  console.log(vid);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          categorySelected={categorySelected}
          setcategorySelected={setcategorySelected}
        ></SideBar>
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          chihab's 2023 media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          style={{ color: "white" }}
        >
          {categorySelected} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
        <Videos videos={vid}></Videos>
      </Box>
    </Stack>
  );
};

export default Feed;
