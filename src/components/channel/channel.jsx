import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { ApiService } from "../../service/api.service";
import { ChannelCard, Loader, Videos } from "../";

const Channel = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const dataChannelDetail = await ApiService.fetching(
          `channels?part=snippet&id=${id}`
        );
        setChannelDetail(dataChannelDetail.items[0]);
        const dataVideo = await ApiService.fetching(
          `search?channelId=${id}&part=snippet%2Cid&order=date`
        );
        setVideos(dataVideo.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  if (!channelDetail) return <Loader />;

  return (
    <Box minHeight={"95vh"}>
      <Box>
        <Box
          width={"100%"}
          height={"200px"}
          zIndex={10}
          sx={{
            backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
            backgroundSize: "cover",
          }}
        />
        <ChannelCard video={channelDetail} marginTop={"-100px"} />
      </Box>
      <Container maxWidth={"90%"}>
        <Videos videos={videos} />
      </Container>
    </Box>
  );
};

export default Channel;
