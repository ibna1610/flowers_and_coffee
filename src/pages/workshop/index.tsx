import { Box, Typography, Button, Container, Grid } from "@mui/material";
import bannerWorkshop from "../../assets/banner_flower.png";
import workshop1 from "../../assets/workshop1.png";
import "../styles/FontStyle.scss";

const WorkshopPage = () => {
  // Workshop ticket data
  const tickets = [
    {
      id: 1,
      type: "Vé đơn",
      price: "300.000đ",
      image: workshop1,
    },
    {
      id: 2,
      type: "Vé đôi",
      price: "550.000đ",
      image: workshop1,
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box
        sx={{
          position: "relative",
          height: 500,
          mb: 10,
          overflow: "hidden",
          width: "100%",
          borderRadius: 1,
        }}
      >
        <Box
          component="img"
          src={bannerWorkshop}
          alt="Banner of flower field"
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
          }}
        >
          Workshop
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 10 }}>
        {tickets.map((ticket) => (
          <Box
            key={ticket.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 20,
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: 600,
                  height: 400,
                  bgcolor: "#a77a6f",
                  borderRadius: 1,
                  boxShadow: 3,
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: "50%",
                    right: -50,
                    width: 110,
                    height: 80,
                    borderRadius: "50%",
                    transform: "translateY(-50%)",
                    backgroundColor: "white",
                    zIndex: 1,
                  },
                }}
              >
                <Box
                  component="img"
                  src={ticket.image}
                  alt={`Flower workshop ${ticket.type}`}
                  sx={{
                    position: "absolute",
                    top: 20,
                    left: 20,
                    width: "calc(100% - 100px)",
                    height: "calc(100% - 40px)",
                    objectFit: "cover",
                    borderRadius: 1,
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  pl: 8,
                  flexGrow: 1,
                }}
              >
                <Typography
                  variant="h5"
                  component="h2"
                  fontWeight="bold"
                  sx={{ mb: 2 }}
                >
                  {ticket.type}
                </Typography>

                <Grid container spacing={2} alignItems="center" sx={{ mb: 3 }}>
                  <Grid size={{ xs: 3 }}>
                    <Typography variant="h6" fontWeight="bold">
                      Giá
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 4 }}>
                    <Typography variant="h6">{ticket.price}</Typography>
                  </Grid>
                  <Grid size={{ xs: 7 }}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#e8a79c",
                        "&:hover": { backgroundColor: "#d79488" },
                        color: "white",
                        py: 1.5,
                        px: 4,
                        width: "100%",
                        borderRadius: 1,
                        textTransform: "none",
                        fontSize: "1.1rem",
                      }}
                    >
                      Mua Ngay
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        ))}
      </Container>
    </Container>
  );
};

export default WorkshopPage;
