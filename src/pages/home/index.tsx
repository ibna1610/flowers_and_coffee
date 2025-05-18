import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import bannerImage from "../../assets/banner_flower.png";
import flower1 from "../../assets/flower1.png";
import flower2 from "../../assets/flower2.png";
import flower3 from "../../assets/flower3.png";
import flower4 from "../../assets/flower4.png";
import drink1 from "../../assets/drink1.png";
import drink2 from "../../assets/drink2.png";
import drink3 from "../../assets/drink3.png";
import drink4 from "../../assets/drink4.png";
import combo1 from "../../assets/combo1.png";
import combo2 from "../../assets/combo2.png";
import combo3 from "../../assets/combo3.png";
import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";
import about3 from "../../assets/about3.jpg";
import about4 from "../../assets/about4.jpg";

const HomePage: React.FC = () => {
  // Image paths - replace with your actual image paths
  const flowerBouquets = [flower1, flower2, flower3, flower4];

  const drinks = [drink1, drink2, drink3, drink4];

  const combos = [
    { image: combo1, title: "Combo 1" },
    { image: combo2, title: "Combo 2" },
    { image: combo3, title: "Combo 3" },
  ];

  const storePhotos = [about1, about2, about3, about4];

  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Box
        sx={{
          position: "relative",
          height: 500,
          mb: 6,
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={bannerImage}
          alt="White tulips garden"
          sx={{
            width: "100%",
            height: 500,
            objectFit: "cover",
          }}
        />
        {/* <Typography
          variant="h2"
          component="h1"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
            fontFamily: '"Dancing Script", cursive',
            fontSize: "3.5rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            width: "100%",
          }}
        >
          Workshop
        </Typography> */}
      </Box>

      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Typography
          variant="h5"
          component="h2"
          align="center"
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "2rem",
            fontStyle: "italic",
            color: "#000",
            mb: 4,
          }}
        >
          Bộ sưu tập hoa tươi mỗi ngày
        </Typography>

        <Grid container spacing={2} sx={{ mb: 5, px: 20 }}>
          {flowerBouquets.map((image, index) => (
            <Grid size={{ xs: 6 }} key={`bouquet-${index}`}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "transparent",
                }}
              >
                <CardMedia
                  component="img"
                  image={image}
                  alt={`Flower bouquet ${index + 1}`}
                  sx={{ aspectRatio: "1/1", objectFit: "cover" }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="h5"
          component="h2"
          align="center"
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "2rem",
            fontStyle: "italic",
            color: "#000",
            mb: 3,
          }}
        >
          Đồ uống
        </Typography>

        <Grid container spacing={2} sx={{ mb: 5 }}>
          {drinks.map((image, index) => (
            <Grid size={{ xs: 3 }} key={`drink-${index}`}>
              <Card
                elevation={0}
                sx={{
                  backgroundColor: "transparent",
                }}
              >
                <CardMedia
                  component="img"
                  image={image}
                  alt={`Drink ${index + 1}`}
                  sx={{
                    aspectRatio: "1/1",
                    objectFit: "cover",
                    height: "100%",
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Combos Section */}
        <Typography
          variant="h5"
          component="h2"
          align="center"
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "2rem",
            fontStyle: "italic",
            color: "#000",
            mb: 3,
          }}
        >
          Có thể bạn thích
        </Typography>

        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ mb: 5, px: 20 }}
        >
          {combos.map((combo, index) => (
            <Grid size={{ xs: 4 }} key={`combo-${index}`}>
              <Card
                elevation={0}
                sx={{
                  backgroundColor: "transparent",
                  textAlign: "center",
                }}
              >
                <CardMedia
                  component="img"
                  image={combo.image}
                  alt={combo.title}
                  sx={{ aspectRatio: "1/1", objectFit: "cover" }}
                />
                <CardContent sx={{ p: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                    {combo.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Store Photos */}
        <Typography
          variant="h5"
          component="h2"
          // align="center"
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "2rem",
            fontStyle: "italic",
            color: "#000",
            mb: 3,
          }}
        >
          Không gian quán
        </Typography>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          {storePhotos.map((image, index) => (
            <Grid size={{ xs: 3 }} key={`store-${index}`}>
              <Card
                elevation={0}
                sx={{
                  backgroundColor: "transparent",
                }}
              >
                <CardMedia
                  component="img"
                  image={image}
                  alt={`Store interior ${index + 1}`}
                  sx={{
                    aspectRatio: "1/1",
                    objectFit: "cover",
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default HomePage;
