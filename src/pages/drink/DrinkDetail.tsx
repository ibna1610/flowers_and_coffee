import React, { useState } from "react";
import {
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Grid,
  ToggleButtonGroup,
  ToggleButton,
  Box,
  Container,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PaymentIcon from "@mui/icons-material/Payment";
import { useAppSelector } from "../../stores/hooks";
import combo1 from "../../assets/combo1.png";
import combo2 from "../../assets/combo2.png";
import combo3 from "../../assets/combo3.png";
import combo4 from "../../assets/combo3.png";

interface SizeOption {
  value: string;
  label: string;
}

interface SweetnessOption {
  value: string;
  label: string;
}

interface IceOption {
  value: string;
  label: string;
}

interface ComboItem {
  id: number;
  name: string;
  image: string;
}

const DrinkDetailPage: React.FC = () => {
  const drinkItem = useAppSelector((state) => state.Drink.drinkDetail);
  // State variables
  const [size, setSize] = useState<string>("M");
  const [sweetness, setSweetness] = useState<string>("binhThuong");
  const [ice, setIce] = useState<string>("binhThuong");

  // Options
  const sizeOptions: SizeOption[] = [
    { value: "M", label: "M" },
    { value: "L", label: "L" },
  ];

  const sweetnessOptions: SweetnessOption[] = [
    { value: "it", label: "Ít" },
    { value: "binhThuong", label: "Bình thường" },
    { value: "nhieu", label: "Nhiều" },
  ];

  const iceOptions: IceOption[] = [
    { value: "it", label: "Ít" },
    { value: "binhThuong", label: "Bình thường" },
    { value: "nhieu", label: "Nhiều" },
  ];

  const comboItems: ComboItem[] = [
    { id: 1, name: "Combo 1", image: combo1 },
    { id: 2, name: "Combo 2", image: combo2 },
    { id: 3, name: "Combo 3", image: combo3 },
    { id: 4, name: "Combo 4", image: combo4 },
  ];

  // Event handlers
  const handleSizeChange = (
    event: React.MouseEvent<HTMLElement>,
    newSize: string
  ) => {
    if (newSize !== null) {
      setSize(newSize);
    }
  };

  const handleSweetnessChange = (
    event: React.MouseEvent<HTMLElement>,
    newSweetness: string
  ) => {
    if (newSweetness !== null) {
      setSweetness(newSweetness);
    }
  };

  const handleIceChange = (
    event: React.MouseEvent<HTMLElement>,
    newIce: string
  ) => {
    if (newIce !== null) {
      setIce(newIce);
    }
  };

  const addToCart = () => {
    console.log("Added to cart:", {
      product: "Bạc xỉu",
      price: 32000,
      size,
      sweetness,
      ice,
    });
    // Implement cart functionality here
  };

  const checkout = () => {
    console.log("Proceeding to checkout");
    // Implement checkout functionality here
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <Grid container spacing={3}>
          {/* Main product section */}
          <Grid size={{ xs: 12 }}>
            <Box sx={{ p: 3 }}>
              <Grid container spacing={10}>
                {/* Product image */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={drinkItem?.image}
                    alt="Bạc xỉu"
                    sx={{ borderRadius: 1, objectFit: "cover" }}
                  />
                </Grid>

                {/* Product details and options */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 400, mb: 2, fontSize: "3em" }}
                  >
                    {drinkItem?.title || ""}
                  </Typography>

                  <Typography
                    variant="h5"
                    component="div"
                    gutterBottom
                    sx={{ mt: 3, fontWeight: 500, mb: 2, fontSize: "3em" }}
                  >
                    {drinkItem?.price}
                  </Typography>

                  <Box sx={{ mb: 4, mt: 5 }}>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      sx={{ fontSize: "2em" }}
                    >
                      Chọn kích cỡ
                    </Typography>
                    <ToggleButtonGroup
                      value={size}
                      exclusive
                      onChange={handleSizeChange}
                      aria-label="size"
                      sx={{ mb: 2 }}
                    >
                      {sizeOptions.map((option) => (
                        <ToggleButton
                          key={option.value}
                          value={option.value}
                          sx={{
                            backgroundColor:
                              size === option.value ? "#f8d7d7" : "transparent",
                            borderColor: "#f8d7d7",
                            color: "black",
                            "&.Mui-selected": {
                              backgroundColor: "#f8d7d7",
                              color: "black",
                              "&:hover": {
                                backgroundColor: "#f3c3c3",
                              },
                            },
                            "&:hover": {
                              backgroundColor: "#f3c3c3",
                            },
                            py: 0.5,
                            px: 5,
                            fontSize: "1.2em",
                          }}
                        >
                          {option.label}
                        </ToggleButton>
                      ))}
                    </ToggleButtonGroup>

                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      sx={{ fontSize: "2em", mt: 3 }}
                    >
                      Ngọt
                    </Typography>
                    <ToggleButtonGroup
                      value={sweetness}
                      exclusive
                      onChange={handleSweetnessChange}
                      aria-label="sweetness"
                      sx={{ mb: 2 }}
                    >
                      {sweetnessOptions.map((option) => (
                        <ToggleButton
                          key={option.value}
                          value={option.value}
                          sx={{
                            backgroundColor:
                              sweetness === option.value
                                ? "#f8d7d7"
                                : "transparent",
                            borderColor: "#f8d7d7",
                            color: "black",
                            "&.Mui-selected": {
                              backgroundColor: "#f8d7d7",
                              color: "black",
                              "&:hover": {
                                backgroundColor: "#f3c3c3",
                              },
                            },
                            "&:hover": {
                              backgroundColor: "#f3c3c3",
                            },
                            py: 0.5,
                            px: 5,
                            fontSize: "1.2em",
                          }}
                        >
                          {option.label}
                        </ToggleButton>
                      ))}
                    </ToggleButtonGroup>

                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      sx={{ fontSize: "2em", mt: 3 }}
                    >
                      Đá
                    </Typography>
                    <ToggleButtonGroup
                      value={ice}
                      exclusive
                      onChange={handleIceChange}
                      aria-label="ice"
                      sx={{ mb: 3 }}
                    >
                      {iceOptions.map((option) => (
                        <ToggleButton
                          key={option.value}
                          value={option.value}
                          sx={{
                            backgroundColor:
                              ice === option.value ? "#f8d7d7" : "transparent",
                            borderColor: "#f8d7d7",
                            color: "black",
                            "&.Mui-selected": {
                              backgroundColor: "#f8d7d7",
                              color: "black",
                              "&:hover": {
                                backgroundColor: "#f3c3c3",
                              },
                            },
                            "&:hover": {
                              backgroundColor: "#f3c3c3",
                            },
                            py: 0.5,
                            px: 5,
                            fontSize: "1.2em",
                          }}
                        >
                          {option.label}
                        </ToggleButton>
                      ))}
                    </ToggleButtonGroup>
                  </Box>

                  <Box sx={{ display: "flex", gap: 5, mt: 8 }}>
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
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* "You may also like" section */}
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
              {comboItems.map((product) => (
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
        </Grid>
      </Box>
    </Container>
  );
};

export default DrinkDetailPage;
