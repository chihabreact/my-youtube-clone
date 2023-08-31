import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { demoChannelTitle, demoProfilePicture } from "../Utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    // *!  the card
    <Box
      sx={{
        width: { sm: "358px", md: "320px" },
        height: "326px",
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: marginTop,
        zIndex: 10,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            width: { xs: "100%", sm: "358px", md: "320px" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            textAlign: "center",
            padding: 0,
          }}
        >
          {/* *! the profile picture of the youtube channel  */}
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title || demoChannelTitle}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          ></CardMedia>
          {/* *? name of the channel */}
          <CardContent>
            <Typography variant="h6">
              {channelDetail?.snippet?.title}
              <CheckCircle
                fontSize="14"
                sx={{ ml: "5px", color: "grey" }}
              ></CheckCircle>
            </Typography>
            {channelDetail?.statistics?.subscriberCount && (
              <Typography>
                {parseInt(
                  channelDetail?.statistics?.subscriberCount
                ).toLocaleString()}{" "}
                subscribers
              </Typography>
            )}
          </CardContent>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
