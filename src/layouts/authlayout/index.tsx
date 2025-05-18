import { styled, alpha } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import { lazy } from "react";
import Loadable from "../../components/Loadable";
const Footer = Loadable(lazy(() => import("../footer")));

interface MainProps {
  open?: boolean;
}

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<MainProps>(({ theme }) => ({
  width: "100%",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  overflowY: "auto",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  flex: "1 1 auto",
  zIndex: 1,
  backgroundColor: alpha(theme.palette.common.white, 1),
}));

const Authlayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#E5E5E5",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <CssBaseline />
      <Main
        sx={{
          px: 3,
          pt: 2,
          flex: 1,
        }}
      >
        <Outlet />
      </Main>
      <Footer />
    </Box>
  );
};

export default Authlayout;
