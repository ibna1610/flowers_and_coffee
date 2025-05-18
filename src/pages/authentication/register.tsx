import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Container,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Divider,
  Box,
  Tabs,
  Tab,
  FormControl,
  OutlinedInput,
  InputLabel,
  IconButton,
  InputAdornment,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const BlackTab = styled(Tab)({
  color: "black !important",
  fontWeight: "normal",
  opacity: "1 !important",
  "&.Mui-selected": {
    color: "black !important",
    fontWeight: "bold",
  },
});

const Regiter = () => {
  const [value, setValue] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfimPassword, setShowConfimPassword] = useState(false);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log("newValue", newValue);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleClickShowConfimPassword = () =>
    setShowConfimPassword((show) => !show);

  const handleMouseDownConfimPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpConfimPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Container maxWidth="xs" sx={{ textAlign: "center", my: 10 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          fontWeight="bold"
          sx={{ mb: 2 }}
        >
          ĐĂNG KÝ
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "black",
              },
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <BlackTab label="Số điện thoại" />
            <BlackTab label="Email" />
          </Tabs>
        </Box>

        <TextField
          fullWidth
          label="Họ và tên"
          variant="outlined"
          margin="normal"
          size="small"
          sx={{
            mt: 3,
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
            },
          }}
        />

        <Box sx={{ mt: -1, width: "100%" }}>
          {value === 0 ? (
            <TextField
              fullWidth
              label="Số điện thoại"
              variant="outlined"
              margin="normal"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                },
              }}
            />
          ) : (
            <TextField
              fullWidth
              label="Email của bạn"
              variant="outlined"
              margin="normal"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                },
              }}
            />
          )}
        </Box>
        <FormControl
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
            },
            mt: 1,
          }}
          variant="outlined"
          size="small"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Mật khẩu
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Mật khẩu"
          />
        </FormControl>

        <FormControl
          sx={{
            width: "100%",
            mt: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
            },
          }}
          variant="outlined"
          size="small"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Xác nhận mật khẩu
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showConfimPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showConfimPassword
                      ? "hide the password"
                      : "display the password"
                  }
                  onClick={handleClickShowConfimPassword}
                  onMouseDown={handleMouseDownConfimPassword}
                  onMouseUp={handleMouseUpConfimPassword}
                  edge="end"
                >
                  {showConfimPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Xác nhận mật khẩu"
          />
        </FormControl>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="small"
          sx={{
            mt: 2,
            mb: 2,
            py: 1,
            backgroundColor: "#D9D9D9",
            color: "black",
            borderRadius: "20px",
            "&:hover": {
              backgroundColor: "#d5d5d5",
            },
          }}
        >
          ĐĂNG ký
        </Button>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" size="small" />}
            label={<Typography variant="body2">Ghi nhớ mật khẩu</Typography>}
          />
          <Typography
            variant="body2"
            component="a"
            href="#"
            sx={{ textDecoration: "none" }}
          >
            Quên mật khẩu?
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
          <Divider sx={{ flexGrow: 1 }} />
          <Typography variant="body2" sx={{ mx: 2 }}>
            HOẶC
          </Typography>
          <Divider sx={{ flexGrow: 1 }} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 1 }}>
          <IconButton
            sx={{ border: "1px solid rgb(0, 0, 0)", borderRadius: "50%" }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            sx={{ border: "1px solid rgb(0, 0, 0)", borderRadius: "50%" }}
          >
            <GoogleIcon />
          </IconButton>
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body1" component="span" color="text.secondary">
            Bạn đã có tài khoản?{" "}
          </Typography>
          <Typography
            variant="body1"
            component="a"
            href="/auth/login"
            sx={{
              fontWeight: "bold",
              textDecoration: "none",
              color: "black",
            }}
          >
            Đăng nhập
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Regiter;
