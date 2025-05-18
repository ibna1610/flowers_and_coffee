import { Box, Typography, Container, Grid, Button } from "@mui/material";
import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";
import about3 from "../../assets/about3.jpg";
import about4 from "../../assets/about4.jpg";
import "../styles/FontStyle.scss";

const AboutPage = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box
        sx={{
          textAlign: "center",
          mb: 4,
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" component="h1" className="about-title">
          Xin Chào.
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mb: 15, alignItems: "center" }}>
        <Grid size={{ xs: 17, md: 7 }}>
          <Box
            component="img"
            src={about1}
            alt="Coffee shop interior"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              // maxHeight: 400,
            }}
          />
        </Grid>
        <Grid size={{ xs: 1, md: 1 }}></Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Box sx={{ pl: { md: 10 } }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
                mb: 3,
              }}
            >
              Về Chúng Tôi
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Text về phong cách kinh doanh của chúng tôi
            </Typography>
            <Typography
              variant="body2"
              paragraph
              sx={{ mb: 3, lineHeight: 1.7 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
              ultrices dui. Cras et elit pellentesque, mattis erat sit amet,
              elementum libero. Aenean sodales mattis semper. Vivamus faucibus
              mi a gravida volutpat. Nullam in ligula in orci malesuada
              vestibulum. Aenean sollicitudin lectus eu sem tincidunt, at rutrum
              lacus tempus.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={4}
        sx={{
          mb: 15,
          flexDirection: { xs: "column-reverse", md: "row" },
          position: "relative",
        }}
      >
        <Grid size={{ xs: 8, md: 4 }}>
          <Box>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
                mb: 3,
                textAlign: "center",
                pt: 2,
              }}
            >
              Về Chúng Tôi
            </Typography>
            <Typography
              variant="body2"
              paragraph
              sx={{ mb: 3, lineHeight: 1.7, textAlign: "center" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
              ultrices dui. Cras et elit pellentesque, mattis erat sit amet,
              elementum libero. Aenean sodales mattis semper. Vivamus faucibus
              mi a gravida volutpat. Nullam in ligula in orci malesuada
              vestibulum. Aenean sollicitudin lectus eu sem tincidunt, at rutrum
              lacus tempus.
            </Typography>
          </Box>
          <Box
            component="img"
            src={about3}
            alt="Coffee shop seating area"
            sx={{
              width: "55%",
              height: "100%",
              objectFit: "cover",
              // maxHeight: 400,
              position: "absolute",
              mt: 5,
            }}
          />
        </Grid>
        <Grid size={{ xs: 1, md: 1 }}></Grid>
        <Grid size={{ xs: 15, md: 7 }}>
          <Box
            component="img"
            src={about2}
            alt="Coffee shop seating area"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              // maxHeight: 400,
            }}
          />
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 10, mt: 40 }}>
        <Button
          variant="outlined"
          sx={{
            border: "2px solid black",
            borderColor: "black",
            color: "black",
            minWidth: 80,
            fontWeight: "600",
          }}
        >
          2025
        </Button>
      </Box>

      <Grid container spacing={4} sx={{ mb: 10, alignItems: "center" }}>
        <Grid size={{ xs: 14, md: 7 }}>
          <Box
            component="img"
            src={about4}
            alt="Coffee shop with view"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              // maxHeight: 400,
              borderRadius: 1,
            }}
          />
        </Grid>
        <Grid size={{ xs: 10, md: 5 }}>
          <Box sx={{ pl: { md: 4 }, pr: { md: 4 } }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
                mb: 3,
              }}
            >
              TIỆM COFFE HÓA CỦA CHÚNG TÔI
            </Typography>
            <Typography
              variant="body2"
              paragraph
              sx={{ mb: 3, lineHeight: 1.7 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
              ultrices dui. Cras et elit pellentesque, mattis erat sit amet,
              elementum libero. Aenean sodales mattis semper. Vivamus faucibus
              mi a gravida volutpat. Nullam in ligula in orci malesuada
              vestibulum. Aenean sollicitudin lectus eu sem tincidunt, at rutrum
              lacus tempus. Vivamus faucibus mi a gravida volutpat. Nullam in
              ligula in orci malesuada vestibulum. Aenean sollicitudin lectus eu
              sem tincidunt, at rutrum lacus tempus. Cras et elit pellentesque,
              mattis erat sit amet, elementum libero. Aenean sodales mattis
              semper. Vivamus faucibus mi a gravida volutpat. Nullam in ligula
              in orci malesuada vestibulum.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
