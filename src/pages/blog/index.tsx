import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
  Grid,
  Divider,
} from "@mui/material";
import bannerBlog from "../../assets/banner_blog.png";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import blog4 from "../../assets/blog4.png";
import blog5 from "../../assets/blog5.png";
import blog6 from "../../assets/blog6.png";
import "../styles/FontStyle.scss";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const BlogPage: React.FC = () => {
  const navigate = useNavigate();
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Hoa Hồng Xanh - Bí Ẩn Hay Sự Thật?",
      description:
        "Tìm hiểu thêm về những câu chuyện và thần thoại sau màu xanh kỳ diệu của loài hoa.",
      imageUrl: blog1,
    },
    {
      id: 2,
      title: "Hoa Hướng Dương - Không Phải Lúc Nào Cũng Quay Theo Mặt Trời",
      description:
        "Bạn sẽ ngạc nhiên khi tìm ra sự thật thú vị này về loài hoa đại diện cho sự rực rỡ này!",
      imageUrl: blog2,
    },
    {
      id: 3,
      title: "Loài Hoa Đắt Nhất Thế Giới Là Gì?",
      description:
        "Khám phá những loài hoa hiếm nhất thế giới và giá trị đặc biệt của các loài hoa đó!",
      imageUrl: blog3,
    },
    {
      id: 4,
      title: "Hoa Sung - Biểu Tượng Của Việt Nam",
      description:
        "Việt Nam là một trong những nơi có nhiều loài hoa sen đẹp nhất trên thế giới.",
      imageUrl: blog4,
    },
    {
      id: 5,
      title: "Tại Sao Hoa Cẩm Tú Cầu Đổi Màu?",
      description:
        "Có thể bạn đã ngạc nhiên khi thấy hoa đổi màu theo thời gian, đây là lý do thú vị!",
      imageUrl: blog5,
    },
    {
      id: 6,
      title: "Loài Hoa Dễ Nhầm Nhất Thế Giới",
      description:
        "Hoa tulip và hoa lily có điểm gì giống nhau? Bạn có thể phân biệt được không?",
      imageUrl: blog6,
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 8 }}>
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
          src={bannerBlog}
          alt="White roses in bloom"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Typography
          variant="h2"
          component="h1"
          className="workshop-title"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            width: "100%",
          }}
        >
          Blog
        </Typography>
      </Box>

      <Divider sx={{ mb: 4, backgroundColor: "#9D655B", height: 1 }} />

      <Container maxWidth="lg" sx={{ mt: 10 }}>
        {blogPosts.map((post) => (
          <Box
            key={post.id}
            sx={{ mb: 5 }}
            onClick={() => navigate("/blog/detail")}
          >
            <Grid container spacing={2}>
              <Grid size={{ xs: 16, sm: 6 }}>
                <Card elevation={0}>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={post.imageUrl}
                    alt={post.title}
                    sx={{ borderRadius: 1 }}
                  />
                </Card>
              </Grid>
              <Grid size={{ xs: 2, sm: 1 }}></Grid>
              <Grid size={{ xs: 6, sm: 5 }}>
                <Typography
                  variant="h6"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontWeight: "medium",
                    fontSize: "1.1rem",
                    color: "#333",
                  }}
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "0.9rem" }}
                >
                  {post.description}
                </Typography>
              </Grid>
            </Grid>
            <Divider
              sx={{
                mt: 5,
                width: "65%",
                backgroundColor: "#9D655B",
                height: 1,
              }}
            />
          </Box>
        ))}
      </Container>
    </Container>
  );
};

export default BlogPage;
