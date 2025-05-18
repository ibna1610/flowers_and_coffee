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
import bannerImage from "../../assets/banner_drink.png";
import drink1 from "../../assets/drink1.png";
import drink2 from "../../assets/drink2.png";
import drink3 from "../../assets/drink3.png";
import drink4 from "../../assets/drink4.png";
import "../styles/FontStyle.scss";
import { useAppDispatch } from "../../stores/hooks";
import { setDrinkDetail } from "../../stores/reducers/Drink";

const DrinkShopPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // Sample drink data
  const drinkItems = [
    {
      id: 1,
      image: drink1,
      title: "Bạc xỉu",
      price: "50.000đ",
    },
    {
      id: 2,
      image: drink2,
      title: "Bạc xỉu",
      price: "50.000đ",
    },
    {
      id: 3,
      image: drink3,
      title: "Bạc xỉu",
      price: "50.000đ",
    },
    {
      id: 4,
      image: drink4,
      title: "Bạc xỉu",
      price: "50.000đ",
    },
  ];

  const handleClickDrink = (index: number) => {
    dispatch(setDrinkDetail(drinkItems[index % 4]));
    navigate("/drink/detail");
  };

  const displaydrinks = Array(5).fill(drinkItems).flat();

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
          alt="Banner of drinks"
          sx={{
            objectFit: "cover",
            width: "100%",
          }}
        />
        <Typography
          variant="h3"
          component="h1"
          className="workshop-title"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Đồ uống
        </Typography>
      </Box>
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Grid container spacing={4}>
          {displaydrinks.map((drink, index) => (
            <Grid size={{ xs: 6, sm: 3 }} key={`${drink.id}-${index}`}>
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
                  image={drink.image}
                  alt={drink.title}
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
                    {drink.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#fff"
                    sx={{ mb: 1, fontSize: "0.75rem" }}
                  >
                    giá: {drink.price}
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
                    onClick={() => handleClickDrink(index)}
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

export default DrinkShopPage;
