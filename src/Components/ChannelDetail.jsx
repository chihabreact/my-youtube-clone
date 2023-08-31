import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { FetchFromAPI } from "../Utils/fetchFromApi";
import ChannelCard from "./ChannelCard";

const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    return () => {
      FetchFromAPI(`channels?part="snippet&id=${id}`).then((data) =>
        setchannelDetail(data?.items[0])
      );

      FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
        (data) => setVideos(data?.items)
      );
    };
  }, [id]);

  return (
    <Box height="95vh" justifyContent="center" alignItems="center">
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
          zIndex: 10,
          height: "300px",
        }}
      ></div>
      <ChannelCard channelDetail={channelDetail}></ChannelCard>
    </Box>
  );
};

export default ChannelDetail;
