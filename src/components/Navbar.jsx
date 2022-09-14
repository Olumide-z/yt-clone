import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#8758FF",
      top: 0,
      justifyContent: "space-between",
      zIndex: '100'
    }}
  >

   <Link to='/' style={{ display: 'flex', alignItems: 'center'}}>
      <Typography variant='h5' sx={{ color: 'white'}}>YT</Typography>
    </Link> 

    <SearchBar />
  </Stack>
);

export default Navbar;
