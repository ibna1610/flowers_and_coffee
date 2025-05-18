import { Box, Container, Typography, Divider, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import logo from "../../assets/logo.jpg";

const TikTokIcon = () => (
  <Box
    component="svg"
    sx={{
      width: 23,
      height: 23,
      fill: "currentColor",
    }}
    viewBox="0 0 24 24"
  >
    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </Box>
);

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#9e655c", color: "white", pt: 6, pb: 2 }}>
      <Container maxWidth="lg">
        {/* Logo */}
        <Box sx={{ mb: 2 }}>
          <img
            src={logo}
            alt="Hope Blossoms"
            style={{
              height: "156px",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          <Box sx={{ flex: "1 1 50%" }}>
            <Box
              sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              {/* Description Text */}
              <Typography variant="body2" sx={{ mb: 4, maxWidth: 450 }}>
                Đây là một tiệm hoa kết hợp Coffee địa điểm lý tưởng xả stress
                với phương châm trồng hoa không chỉ để đẹp mà còn để chữa lành
                tâm hồn. Hope Blossoms - Hơn cả một tiệm hoa, đó là nơi lan tỏa
                yêu thương và những điều tốt đẹp.
              </Typography>

              {/* Social Media */}
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                  THEO DÕI CHÚNG TÔI
                </Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <IconButton
                    color="inherit"
                    aria-label="Instagram"
                    component="a"
                    href="#"
                  >
                    <InstagramIcon />
                  </IconButton>
                  <Typography
                    variant="body2"
                    sx={{ display: "flex", alignItems: "center", mr: 2 }}
                  >
                    Youtube
                  </Typography>

                  <IconButton
                    color="inherit"
                    aria-label="TikTok"
                    component="a"
                    href="#"
                  >
                    <TikTokIcon />
                  </IconButton>
                  <Typography
                    variant="body2"
                    sx={{ display: "flex", alignItems: "center", mr: 2 }}
                  >
                    Tiktok
                  </Typography>

                  <IconButton
                    color="inherit"
                    aria-label="Facebook"
                    component="a"
                    href="#"
                  >
                    <FacebookIcon />
                  </IconButton>
                  <Typography
                    variant="body2"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    Facebook
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ flex: "1 1 50%" }}>
            <Box
              sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontWeight: "bold",
                  textAlign: { xs: "left", md: "center" },
                }}
              >
                CHI NHÁNH HỒ CHÍ MINH
              </Typography>
              <Box
                sx={{ mt: 1, mb: 2, mx: { xs: 0, md: "auto" }, width: "25%" }}
              >
                <Divider sx={{ borderColor: "white", borderWidth: 2 }} />
              </Box>

              {/* Address */}
              <Box sx={{ display: "flex", mb: 2, alignItems: "flex-start" }}>
                <LocationOnIcon sx={{ mr: 1, mt: 0.5 }} />
                <Box>
                  <Typography variant="body2">
                    Địa chỉ: 92 Phố Khương Trung, Phường Khương Trung, Quận
                    Thanh Xuân, Thành Phố Hà Nội
                  </Typography>
                </Box>
              </Box>

              {/* Warehouse */}
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <HomeIcon sx={{ mr: 1, mt: 0.5 }} />
                <Box>
                  <Typography variant="body2">
                    Kho hàng: 92 Phố Khương Trung, Phường Khương Trung, Quận
                    Thanh Xuân, Thành Phố Hà Nội
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Container maxWidth="md">
          <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 1)" }} />
          <Typography variant="body2" sx={{ textAlign: "center", mt: 2 }}>
            Việc sử dụng trang web này cho thấy bạn tuân thủ chính sách quyền
            riêng tư, điều khoản và điều kiện của chúng tôi
          </Typography>
        </Container>
      </Container>
    </Box>
  );
};

export default Footer;
