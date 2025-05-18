import { Box, Typography, Container, Grid } from "@mui/material";
import blog1 from "../../assets/blog1.png";
import blog5 from "../../assets/blog5.png";
import blog6 from "../../assets/blog6.png";

const BlogPostDetail: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
      <Box
        sx={{
          position: "relative",
          height: 500,
          mb: 4,
          borderRadius: 1,
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={blog1}
          alt="White roses in bloom"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1.5rem", md: "2rem" },
          color: "#333",
          mb: 2,
        }}
      >
        Hoa Hồng Xanh – Bí Ẩn Hay Sự Thật?
      </Typography>

      <Grid container rowSpacing={8} sx={{ mt: 3, mb: 3 }}>
        <Grid size={{ xs: 12, md: 6 }} sx={{ pr: 10 }}>
          <Typography
            variant="body1"
            paragraph
            sx={{ mb: 2, fontSize: "0.95rem", lineHeight: 1.6 }}
          >
            Những nhà khoa học đã tạo ra hoa hồng xanh bằng cách thay đổi đặc
            tính di truyền thông qua công nghệ di truyền. Tìm hiểu cho thấy
            huyền tích phát triển từ những hoa cắt xanh mà thực chất chỉ được
            nhuộm màu xanh nghệ thuật hóa.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ mb: 2, fontSize: "0.95rem", lineHeight: 1.6 }}
          >
            Không chỉ nổi bật với vẻ đẹp mê mị, hoa hướng dương còn chứa đựng
            giá trị sinh lý độc đáo, từ giai đoạn nảy nở đến quay theo ánh sáng
            đến giai đoạn trưởng thành định hướng cố định. Từ mỹ thuật đến khoa
            học, loài hoa này đã trở thành một đối tượng nghiên cứu của nhiều
            ngành nghệ thuật và văn hóa.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src={blog5}
            alt="Flowers silhouette at sunset"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 1,
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src={blog6}
            alt="Field of white tulips"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 1,
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ pl: 10 }}>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}
          >
            Một bông hoa lan đốc đảo từng được giao dịch với mức giá lên tới hơn
            200.000 USD, minh chứng cho sự quý hiếm và giá trị nghệ thuật cao
            của nó. Đây là minh chứng cho sự giao thoa giữa khoa học trồng hoa
            và thị trường nghệ thuật đương đại.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPostDetail;
