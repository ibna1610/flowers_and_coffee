import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Container,
  Pagination,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import bannerImage from "../../assets/banner_flower.png";
import flower1 from "../../assets/flower1.png";
import flower2 from "../../assets/flower2.png";
import flower3 from "../../assets/flower3.png";
import flower4 from "../../assets/flower4.png";
import "../styles/FontStyle.scss";
import { useAppDispatch } from "../../stores/hooks";
import { setFlowerDetail } from "../../stores/reducers/Flower";

const FlowerShopPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // Sample flower data
  const flowerItems = [
    {
      id: 1,
      image: flower1,
      title: "Hoa cúc",
      price: "300.000đ",
    },
    {
      id: 2,
      image: flower2,
      title: "Hoa hồng",
      price: "320.000đ",
    },
    {
      id: 3,
      image: flower3,
      title: "Hoa ly",
      price: "400.000đ",
    },
    {
      id: 4,
      image: flower4,
      title: "Hoa lý",
      price: "350.000đ",
    },
  ];

  // Create a repeated array for display purposes (5 rows of 4 items)
  const displayFlowers = Array(5).fill(flowerItems).flat();

  const handleClickFlower = (index: number) => {
    dispatch(setFlowerDetail(flowerItems[index % 4]));
    navigate("/flower/detail");
  };

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
          image={bannerImage}
          alt="Banner of flowers"
          sx={{
            objectFit: "cover",
            width: "100%",
          }}
        />
        <Typography
          variant="h1"
          component="h1"
          className="workshop-title"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Hoa
        </Typography>
      </Box>
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Grid container spacing={4}>
          {displayFlowers.map((flower, index) => (
            <Grid size={{ xs: 6, sm: 3 }} key={`${flower.id}-${index}`}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="100%"
                  image={flower.image}
                  alt={flower.title}
                />
                <CardContent
                  sx={{
                    p: 1,
                    pb: 0,
                    backgroundColor: "#9e655c",
                    color: "#fff",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    component="div"
                    fontWeight="bold"
                    sx={{ mb: 0 }}
                  >
                    {flower.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#fff"
                    sx={{ mb: 1, fontSize: "0.75rem" }}
                  >
                    giá: {flower.price}
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    p: 1,
                    pt: 0,
                    mt: "auto",
                    backgroundColor: "#9e655c",
                  }}
                >
                  <Button
                    onClick={() => handleClickFlower(index)}
                    fullWidth
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: "#E8A295",
                      "&:hover": { backgroundColor: "#c6948c" },
                      textTransform: "none",
                      borderRadius: 1,
                      py: 1,
                    }}
                  >
                    Mua Ngay
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Pagination
            count={12}
            variant="outlined"
            shape="rounded"
            defaultPage={8}
            siblingCount={1}
            size="small"
          />
        </Box>
      </Container>
    </Container>
  );
};

export default FlowerShopPage;
