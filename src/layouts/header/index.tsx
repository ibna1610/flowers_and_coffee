import {
  AppBar,
  Box,
  Toolbar,
  Button,
  InputBase,
  Container,
  Badge,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { headerHeight } from "../../stores/Constant";
import MenuItems from "../../routers/menus";
import { useAppSelector, useAppDispatch } from "../../stores/hooks";
import { setCurrentPage } from "../../stores/reducers/Customization";
import logo from "../../assets/logo.jpg";

// Search component
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 5,
  backgroundColor: alpha(theme.palette.common.white, 0),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.05),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  border: "1px solid #fff",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "70ch",
    },
    "&::placeholder": {
      color: "white",
      opacity: 0.7,
    },
  },
}));

interface NavLinkProps {
  isPage?: boolean;
}
const NavLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "isPage",
})<NavLinkProps>(({ theme, isPage }) => ({
  textDecoration: "none",
  padding: theme.spacing(1, 5),
  borderRadius: "10px 10px 0 0",
  color: isPage ? "#000" : "#fff",
  backgroundColor: isPage
    ? alpha(theme.palette.common.white, 1)
    : "transparent",
  "&:hover": {
    backgroundColor: isPage ? "" : alpha(theme.palette.common.white, 0.1),
  },
}));

// Auth links
const AuthLink = styled(Link)(({ theme }) => ({
  color: "white",
  textDecoration: "none",
  marginLeft: theme.spacing(2),
  fontSize: "0.875rem",
  "&:hover": {
    textDecoration: "underline",
  },
}));

// Cart button
const CartButton = styled(Button)(({ theme }) => ({
  color: "white",
  border: "1px solid white",
  borderRadius: 5,
  padding: theme.spacing(0.5, 2),
  textTransform: "none",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.1),
  },
}));

const Header = () => {
  const navigate = useNavigate();
  const cartItemCount = 0;
  const currentPage = useAppSelector(
    (state) => state.Customization.currentPage
  );
  const dispatch = useAppDispatch();

  return (
    <AppBar position="static" sx={{ bgcolor: "#9e655c", boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between", height: `${headerHeight}px` }}
        >
          <Box
            onClick={() => {
              navigate("/");
              dispatch(setCurrentPage(""));
            }}
            sx={{
              height: headerHeight,
              display: "flex",
              alignItems: "center",
              padding: "0",
            }}
          >
            <img
              src={logo}
              alt="Hope Blossoms"
              style={{
                height: "100%",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Search Bar */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Chúng tôi có thể giúp gì cho bạn............."
              inputProps={{ "aria-label": "search" }}
            />
            {/* <CartButton>SEARCH</CartButton> */}
          </Search>

          {/* Auth Links */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", mr: 3 }}>
              <AuthLink to="/auth/login">Đăng nhập</AuthLink>
              <AuthLink to="/auth/register">Đăng ký</AuthLink>
            </Box>

            {/* Cart Button */}
            <CartButton
              onClick={() => {
                navigate("/payment");
                dispatch(setCurrentPage(""));
              }}
              sx={{ marginTop: "10px" }}
              startIcon={
                <Badge badgeContent={cartItemCount} color="error">
                  <ShoppingCartIcon />
                </Badge>
              }
            >
              Giỏ hàng
            </CartButton>
          </Box>
        </Toolbar>

        {/* Navigation Menu */}
        <Box
          component="nav"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {MenuItems?.map((item) => (
            <NavLink
              key={item?.id}
              to={item?.url}
              isPage={currentPage === item?.id}
              onClick={() => dispatch(setCurrentPage(item?.id))}
            >
              <Typography sx={{ fontSize: "1.2rem", fontWeight: 400 }}>
                {item.title}
              </Typography>
            </NavLink>
          ))}
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
