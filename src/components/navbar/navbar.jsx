import { Box, Stack } from "@mui/material";
import { colors } from "../../constants/colors";
import { Link } from "react-router-dom";
import { SearchBar } from "../";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: colors.primary,
      }}
    >
      <Link to={"/"}>
        <img src={"/logo.png"} alt="" height={40} />
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  );
};

export default Navbar;
