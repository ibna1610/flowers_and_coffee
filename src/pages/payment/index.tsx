import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  MenuItem,
  styled,
  FormControl,
  Select,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import payment from "../../assets/payment.png";
import gPay from "../../assets/gPay.png";
import PayPal from "../../assets/PayPal.png";

const PaymentButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#E8A295",
  color: "white",
  padding: theme.spacing(1.8),
  "&:hover": {
    backgroundColor: "#D8897A",
  },
}));

const LegalText = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  color: theme.palette.text.secondary,
  textAlign: "center",
  marginTop: theme.spacing(2),
}));

const StyledLink = styled("a")(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const PaymentForm: React.FC = () => {
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardName: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    country: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
  ) => {
    const { name, value } = e.target;
    setCardInfo({
      ...cardInfo,
      [name as string]: value,
    });
  };

  type InputChangeEvent =
    | React.ChangeEvent<HTMLInputElement>
    | SelectChangeEvent;

  const handleSelectChange = (e: InputChangeEvent) => {
    const { name, value } = e.target;
    setCardInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Payment info submitted:", cardInfo);
  };

  // Generate month options
  const months = Array.from({ length: 12 }, (_, i) => {
    const month = i + 1;
    return {
      value: month.toString().padStart(2, "0"),
      label: month.toString().padStart(2, "0"),
    };
  });

  // Generate year options (current year + 10 years)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 11 }, (_, i) => {
    const year = currentYear + i;
    return {
      value: year.toString().slice(-2),
      label: year.toString().slice(-2),
    };
  });

  return (
    <Container
      maxWidth="md"
      sx={{
        my: 5,
        backgroundColor: "#FAF1F1",
        py: 5,
        borderRadius: 1,
      }}
    >
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
            Pay with card
          </Typography>

          <Box mb={2}>
            <Typography variant="caption" display="block" gutterBottom>
              Card number
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="cardNumber"
              value={cardInfo.cardNumber}
              onChange={handleChange}
              placeholder=""
              InputProps={{
                endAdornment: (
                  <Box
                    component="img"
                    src={payment}
                    alt="payment"
                    sx={{
                      height: "2em",
                      width: "auto",
                      objectFit: "contain",
                      borderLeft: "2px solid #e0e0e0",
                      paddingLeft: 1,
                    }}
                  />
                ),
              }}
              sx={{ bgcolor: "white" }}
            />
          </Box>

          <Box mb={2}>
            <Typography variant="caption" display="block" gutterBottom>
              Name on card
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="cardName"
              value={cardInfo.cardName}
              onChange={handleChange}
              placeholder=""
              sx={{ bgcolor: "white" }}
            />
          </Box>

          <Grid container spacing={3} mb={2}>
            <Grid size={{ xs: 8 }}>
              <Typography variant="caption" display="block" gutterBottom>
                Expiration date
              </Typography>
              <Grid container spacing={3}>
                <Grid size={{ xs: 6 }}>
                  <FormControl
                    fullWidth
                    variant="outlined"
                    sx={{ bgcolor: "white" }}
                  >
                    <Select
                      value={cardInfo.expiryMonth}
                      onChange={handleSelectChange}
                      name="expiryMonth"
                      displayEmpty
                      renderValue={(value) => (value ? value : "--")}
                    >
                      {months.map((month) => (
                        <MenuItem key={month.value} value={month.value}>
                          {month.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <FormControl
                    fullWidth
                    variant="outlined"
                    sx={{ bgcolor: "white" }}
                  >
                    <Select
                      value={cardInfo.expiryYear}
                      onChange={handleSelectChange}
                      name="expiryYear"
                      displayEmpty
                      renderValue={(value) => (value ? value : "--")}
                    >
                      {years.map((year) => (
                        <MenuItem key={year.value} value={year.value}>
                          {year.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ xs: 4 }}>
              <Typography variant="caption" display="block" gutterBottom>
                CVC
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                name="cvv"
                value={cardInfo.cvv}
                onChange={handleChange}
                placeholder=""
                sx={{ bgcolor: "white" }}
              />
            </Grid>
          </Grid>

          <Box mb={3}>
            <Typography variant="caption" display="block" gutterBottom>
              Country
            </Typography>
            <TextField
              select
              variant="outlined"
              fullWidth
              name="country"
              value={cardInfo.country}
              onChange={handleChange}
              sx={{ bgcolor: "white" }}
            >
              <MenuItem value="US">United States</MenuItem>
              <MenuItem value="CA">Canada</MenuItem>
              <MenuItem value="GB">United Kingdom</MenuItem>
              <MenuItem value="AU">Australia</MenuItem>
              <MenuItem value="FR">France</MenuItem>
              <MenuItem value="DE">Germany</MenuItem>
              {/* Add more countries as needed */}
            </TextField>
          </Box>

          <PaymentButton
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            disableElevation
          >
            Complete Purchase
          </PaymentButton>

          <LegalText>
            By completing purchase, you are agreeing to our{" "}
            <StyledLink href="#terms">Terms of Service</StyledLink> and{" "}
            <StyledLink href="#privacy">Privacy Policy</StyledLink>
          </LegalText>

          <Box
            mt={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              sx={{
                backgroundColor: "#F1F7F8",
                width: 170,
                height: 42,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={PayPal}
                alt="PayPal"
                sx={{
                  width: 100,
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box
              sx={{
                backgroundColor: "#F1F7F8",
                ml: 2,
                width: 170,
                height: 42,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={gPay}
                alt="G Pay"
                sx={{
                  width: 75,
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        </form>
      </Container>
    </Container>
  );
};

export default PaymentForm;
