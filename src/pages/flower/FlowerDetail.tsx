import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { useAppSelector } from "../../stores/hooks";
import combo1 from "../../assets/combo1.png";
import combo2 from "../../assets/combo2.png";
import combo3 from "../../assets/combo3.png";
import combo4 from "../../assets/combo3.png";

// Mock data for recommended products
const recommendedProducts = [
  { id: 1, name: "Combo 1", image: combo1 },
  { id: 2, name: "Combo 2", image: combo2 },
  { id: 3, name: "Combo 3", image: combo3 },
  { id: 4, name: "Combo 4", image: combo4 },
];
const FlowerDetailPage = () => {
  const floweItem = useAppSelector((state) => state.Flower.flowerDetail);
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 10,
          my: 4,
          bgcolor: "white",
          borderRadius: 2,
          p: { xs: 2, md: 3 },
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        {/* Product Image */}
        <Box sx={{ flex: "1 1 50%", maxWidth: "100%" }}>
          <img
            src={floweItem?.image}
            alt="Hoa Cúc"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Box>

        {/* Product Information */}
        <Box sx={{ flex: "1 1 50%" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 400, mb: 2, fontSize: "3em" }}
          >
            {floweItem?.title || ""}
          </Typography>

          <Typography variant="h6" sx={{ mb: 1, fontWeight: 500, mt: 8 }}>
            Mô Tả:
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Tông Màu Chủ Đạo:</strong> Trắng Và Vàng Nhẹ - Tạo Cảm Giác
            Tinh Khiết, Thanh Lịch Và Ấm Áp.
          </Typography>

          <Typography variant="h6" sx={{ mb: 1, fontWeight: 500 }}>
            Loại Hoa Chính:
          </Typography>

          <List dense>
            <ListItem>
              <ListItemIcon sx={{ minWidth: "24px" }}>
                <CircleIcon sx={{ fontSize: "8px" }} />
              </ListItemIcon>
              <ListItemText primary="Hoa Cúc Đồng Tiền Trắng (Gerbera): Là Loại Hoa Nổi Bật Nhất Trong Bó Biểu Tượng Cho Sự Nghị Thứ, Thuần Khiết Và Niềm Vui" />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: "24px" }}>
                <CircleIcon sx={{ fontSize: "8px" }} />
              </ListItemIcon>
              <ListItemText primary="Hoa Hồng Vàng: Mang Ý Nghĩa Của Tình Bạn, Sự Ấm Áp Và Hạnh Phúc" />
            </ListItem>
          </List>

          <Typography variant="h6" sx={{ mb: 1, fontWeight: 500 }}>
            Hoa Phụ:
          </Typography>

          <List dense>
            <ListItem>
              <ListItemIcon sx={{ minWidth: "24px" }}>
                <CircleIcon sx={{ fontSize: "8px" }} />
              </ListItemIcon>
              <ListItemText primary="Baby Hoa Nhỏ Màu Trắng Xen Kẽ" />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: "24px" }}>
                <CircleIcon sx={{ fontSize: "8px" }} />
              </ListItemIcon>
              <ListItemText primary="Lá Xanh Nhẹ Làm Điểm Nhấn Tự Nhiên" />
            </ListItem>
          </List>

          <Typography variant="h6" sx={{ mb: 1, fontWeight: 500 }}>
            Giấy Gói:
          </Typography>

          <List dense>
            <ListItem>
              <ListItemIcon sx={{ minWidth: "24px" }}>
                <CircleIcon sx={{ fontSize: "8px" }} />
              </ListItemIcon>
              <ListItemText primary="Dùng Giấy Trắng Kem Và Voan Trong Suốt, Tạo Cảm Giác Sang Trọng" />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: "24px" }}>
                <CircleIcon sx={{ fontSize: "8px" }} />
              </ListItemIcon>
              <ListItemText primary="Thắt Nơ Bằng Ruy Băng Màu Vàng Nhạt, Hòa Hợp Với Tổng Thể" />
            </ListItem>
          </List>

          {/* Price */}
          <Box sx={{ display: "flex", alignItems: "center", mt: 5, mb: 2 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, fontSize: "3em" }}>
              {floweItem?.price}
            </Typography>
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: "flex", gap: 5, mt: 7 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#F0A5A5",
                color: "white",
                "&:hover": { bgcolor: "#E88A8A" },
                px: 4,
                py: 1,
                fontSize: "1.2em",
              }}
            >
              Thanh toán
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#F0A5A5",
                color: "#F0A5A5",
                "&:hover": { borderColor: "#E88A8A", color: "#E88A8A" },
                px: 4,
                py: 1,
                fontSize: "1.2em",
              }}
            >
              Thêm vào giỏ hàng
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Recommended Products Section */}
      <Box sx={{ mb: 6, mt: 15 }}>
        <Typography
          variant="h5"
          component="h2"
          align="center"
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "2.5rem",
            fontStyle: "italic",
            color: "#000",
            mb: 3,
          }}
        >
          Có thể bạn thích
        </Typography>

        <Grid container spacing={5}>
          {recommendedProducts.map((product) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "none",
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{ borderRadius: 2, aspectRatio: "1/1" }}
                />
                <CardContent sx={{ flexGrow: 1, p: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 400, fontSize: "1.6em" }}
                    align="center"
                  >
                    {product.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default FlowerDetailPage;
