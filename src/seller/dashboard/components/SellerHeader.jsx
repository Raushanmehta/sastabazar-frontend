import {
  Box,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";

/* Sidebar width */
const SIDEBAR_WIDTH = 300;

/* Search Bar */
const Search = styled("div")({
  borderRadius: 8,
  backgroundColor: "#f5f5f5",
  border: "1px solid #e0e0e0",
  width: 450,
  height: 40,
  display: "flex",
  alignItems: "center",
  marginLeft: 10,
});

const SearchIconWrapper = styled("div")({
  padding: "0 10px",
  color: "#888",
});

const StyledInputBase = styled(InputBase)({
  width: "100%",
});

/* Header */
const SellerHeader = ({ toggleSidebar }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: 64,
        borderBottom: "1px solid #e0e0e0",
        backgroundColor: "#fff",
      }}
    >
      {/* LOGO AREA (Same as Sidebar Width) */}
      <Box
        sx={{
          width: SIDEBAR_WIDTH,
          px: 3,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            position: "absolute",
            left: "5%",

          }}
        >
          Seller
        </Typography>
      </Box>

      {/* Divider (Sidebar Line Match) */}
      <Divider orientation="vertical" flexItem />

      {/* Burger + Search */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          px: 2,
          flex: 1,
        }}
      >
        {/* Burger */}
        <IconButton onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>

        {/* Search */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon fontSize="small" />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Ctrl + K" />
        </Search>
      </Box>

      {/* Right Side */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          pr: 2,
        }}
      >
        <IconButton>
          <GitHubIcon />
        </IconButton>

        <IconButton>
          <Badge badgeContent={2} color="primary">
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            backgroundColor: "#f5f5f5",
            px: 1.5,
            py: 0.5,
            borderRadius: 2,
          }}
        >
          <Avatar
            src="https://i.pravatar.cc/300"
            sx={{ width: 32, height: 32 }}
          />
          <Typography variant="body2">John Doe</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SellerHeader;
