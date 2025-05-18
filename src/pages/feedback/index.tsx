import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Avatar,
  Rating,
  Button,
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Paper,
  IconButton,
  CardMedia,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LanguageIcon from "@mui/icons-material/Language";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import bannerFeedback from "../../assets/banner_feedback.jpg";

const FeedbackPage = () => {
  const [comment, setComment] = useState("");

  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien arcu, cursus id porta sit amet, dictum eu dictum magna. Ut vitae et sit amet sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu dictum magna.",
    },
    {
      id: 2,
      name: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien arcu, cursus id porta sit amet, dictum eu dictum magna. Ut vitae et sit amet sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu dictum magna.",
    },
    {
      id: 3,
      name: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien arcu, cursus id porta sit amet, dictum eu dictum magna. Ut vitae et sit amet sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu dictum magna.",
    },
  ];

  // Sample review data
  const reviews = [
    {
      id: 1,
      name: "LOREM IPSUM DOLOR SIT AMET",
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien arcu, cursus id porta sit amet, dictum eu dictum magna. Ut vitae et sit amet sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu dictum magna.",
    },
    {
      id: 2,
      name: "LOREM IPSUM DOLOR SIT AMET",
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien arcu, cursus id porta sit amet, dictum eu dictum magna. Ut vitae et sit amet sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu dictum magna.",
    },
  ];

  // Sample comments
  const comments = [
    {
      id: 1,
      name: "Phạm Ngọc Anh",
      comment: "Rất chi tiết trong điều này đây đã thông tin cho người đọc",
    },
    {
      id: 2,
      name: "Trần Hiếu Anh",
      comment: "Rất chi tiết trong điều này đây đã thông tin cho người đọc",
    },
    {
      id: 3,
      name: "Phạm Ngọc Anh",
      comment: "Rất chi tiết trong điều này đây đã thông tin cho người đọc",
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box
        sx={{
          position: "relative",
          height: "500px",
          mb: 4,
          overflow: "hidden",
          borderRadius: 1,
        }}
      >
        <CardMedia
          component="img"
          height="500px"
          image={bannerFeedback}
          alt="Banner of drinks"
          sx={{
            objectFit: "cover",
            width: "100%",
          }}
        />
        {/* <Typography
          variant="h3"
          component="h1"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontFamily: "cursive",
            fontWeight: "light",
            textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
          }}
        >
          Đồ uống
        </Typography> */}
      </Box>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Main Title */}
        <Typography
          variant="h4"
          component="h1"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: "bold" }}
        >
          Feedback
        </Typography>

        {/* Testimonials */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {testimonials.map((testimonial) => (
            <Grid size={{ xs: 12, md: 4 }} key={testimonial.id}>
              <Box sx={{ textAlign: "center" }}>
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    bgcolor: "#E0E0E0",
                    mx: "auto",
                    mb: 2,
                  }}
                />
                <Typography
                  variant="subtitle1"
                  component="h3"
                  fontWeight="bold"
                  gutterBottom
                >
                  {testimonial.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                  sx={{ px: 2 }}
                >
                  {testimonial.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Divider */}
        <Box sx={{ my: 4, textAlign: "center" }}>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ fontStyle: "italic" }}
          >
            Sed ut perspiciatis unde omnis iste natus
          </Typography>
        </Box>

        {/* Reviews */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {reviews.map((review) => (
            <Grid size={{ xs: 12, md: 6 }} key={review.id}>
              <Box sx={{ display: "flex", mb: 3 }}>
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    bgcolor: "#E0E0E0",
                    mr: 2,
                  }}
                />
                <Box>
                  <Typography
                    variant="subtitle2"
                    component="h3"
                    fontWeight="bold"
                  >
                    {review.name}
                  </Typography>
                  <Rating
                    value={review.rating}
                    readOnly
                    size="small"
                    sx={{ mb: 1 }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {review.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Social Login Buttons */}
        <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
          <Button
            variant="contained"
            startIcon={<FacebookIcon />}
            fullWidth
            sx={{
              bgcolor: "black",
              color: "white",
              "&:hover": { bgcolor: "#333" },
              textTransform: "none",
              borderRadius: 0,
            }}
          >
            Đăng nhập Facebook
          </Button>
          <Button
            variant="contained"
            startIcon={<GoogleIcon />}
            fullWidth
            sx={{
              bgcolor: "black",
              color: "white",
              "&:hover": { bgcolor: "#333" },
              textTransform: "none",
              borderRadius: 0,
            }}
          >
            Đăng nhập Google
          </Button>
          <Button
            variant="contained"
            startIcon={<LanguageIcon />}
            fullWidth
            sx={{
              bgcolor: "#999",
              color: "white",
              "&:hover": { bgcolor: "#777" },
              textTransform: "none",
              borderRadius: 0,
            }}
          >
            Vô danh
          </Button>
        </Box>

        {/* Comments Section */}
        <Paper variant="outlined" sx={{ mb: 4 }}>
          <List sx={{ bgcolor: "background.paper" }}>
            {comments.map((item, index) => (
              <React.Fragment key={item.id}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      sx={{ bgcolor: "#E0E0E0", width: 32, height: 32 }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.name}
                    secondary={item.comment}
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      variant: "body2",
                    }}
                    secondaryTypographyProps={{ variant: "body2" }}
                  />
                </ListItem>
                {index < comments.length - 1 && (
                  <Divider variant="inset" component="li" />
                )}
              </React.Fragment>
            ))}
          </List>
        </Paper>

        {/* Comment Form */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Để lại bình luận của bạn tại đây
          </Typography>
          <TextField
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            sx={{ mb: 2, bgcolor: "background.paper" }}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton size="small">
              <ThumbUpAltOutlinedIcon fontSize="small" />
            </IconButton>
            <Typography variant="body2">0</Typography>
            <Typography variant="body2" sx={{ mx: 1 }}>
              |
            </Typography>
            <TextField placeholder="Họ và tên" size="small" sx={{ mr: 1 }} />
            <TextField placeholder="Email" size="small" sx={{ mr: 1 }} />
            <Button
              variant="contained"
              size="small"
              sx={{
                bgcolor: "#333",
                color: "white",
                "&:hover": { bgcolor: "#555" },
                textTransform: "none",
              }}
            >
              Gửi thông tin
            </Button>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default FeedbackPage;
