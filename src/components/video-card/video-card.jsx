import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { colors } from "../../constants/colors";
import moment from "moment";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "360px", md: "320px" },
        boxShadow: "none",
        borderRadius: "6px",
      }}
    >
      <Link to={`/video/${video?.id?.videoId}`}>
        <CardMedia
          image={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.title}
          sx={{
            width: { xs: "100%", sm: "360px", md: "320px" },
            height: "180px",
          }}
        />
      </Link>
      <CardContent
        sx={{
          background: colors.primary,
          height: "200px",
          position: "relative",
        }}
      >
        <Link to={`/video/${video?.id?.videoId}`}>
          <Typography my={"5px"} sx={{ opacity: "0.4" }}>
            {moment(video?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {video?.snippet?.title.slice(0, 50)}
          </Typography>
          <Typography variant="subtitle2" sx={{ opacity: "0.6" }}>
            {video?.snippet?.description.slice(0, 70)}
          </Typography>
        </Link>
        <Link to={`/channel/${video?.snippet?.channelId}`}>
          <Stack
            direction={"row"}
            position={"absolute"}
            bottom={"10px"}
            gap={"5px"}
            sx={{ alignItems: "center" }}
          >
            <Avatar
              src={video?.snippet?.thumbnails?.default?.url}
              sx={{ width: 30, height: 30, mr: "5px" }}
            />
            <Typography
              variant="subtitle2"
              color="gray"
              display={"flex"}
              alignItems={"center"}
              gap={"5px"}
            >
              {video?.snippet?.channelTitle}
              <CheckCircle sx={{ width: 15, height: 15 }} />
            </Typography>
          </Stack>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
