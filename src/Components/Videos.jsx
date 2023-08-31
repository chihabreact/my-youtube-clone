import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, direction }) => {
  console.log("from videos");
  console.log(videos);
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      gap={2}
      justifyContent="start"
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}></VideoCard>}
          {item.id.channelId && (
            <ChannelCard channelDetail={item} marginTop="0" />
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
