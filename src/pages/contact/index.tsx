import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Paper,
  //   InputLabel,
  //   FormControl,
  //   Select,
  //   MenuItem,
  //   SelectChangeEvent,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //   const handleSelectChange = (e: SelectChangeEvent) => {
  //     setFormData((prev) => ({
  //       ...prev,
  //       service: e.target.value,
  //     }));
  //   };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Add actual submission logic here
  };

  return (
    <Container maxWidth="xl" sx={{ my: 5 }}>
      <Paper
        elevation={0}
        sx={{
          my: 5,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          bgcolor: "#9D655BCC",
          borderRadius: 2,
          overflow: "hidden",
          py: 5,
          px: 10,
        }}
      >
        <Box
          sx={{
            p: 4,
            color: "white",
            width: { xs: "100%", md: "40%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="body1">
            Bạn có thể liên hệ với chúng tôi bằng bất cứ
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Kênh nào mà bạn có thể trao đổi
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <LocationOnIcon sx={{ mr: 1 }} />
            <Typography variant="body2">
              92 Phố Khương Trung, Phường Khương Trung, Thành HCM
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <EmailIcon sx={{ mr: 1 }} />
            <Typography variant="body2">admin@fpt.vn</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
            <PhoneIcon sx={{ mr: 1 }} />
            <Typography variant="body2">0988111131</Typography>
          </Box>

          {/* Contact buttons */}
          <Box
            sx={{
              mb: 2,
              px: 4,
              py: 1,
              bgcolor: "#E8A295",
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              textTransform: "none",
              borderRadius: 5,
              //   "&:hover": {
              //     bgcolor: "#d3a296",
              //   },
            }}
          >
            <Box>
              <Typography variant="body2">Nhắn tin qua</Typography>
              <Typography variant="body2" sx={{ fontWeight: 550 }}>
                Zalo Official
              </Typography>
            </Box>
            <WhatsAppIcon sx={{ fontSize: 45 }} />
          </Box>

          <Box
            sx={{
              mb: 2,
              px: 4,
              py: 1,
              bgcolor: "#E8A295",
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              textTransform: "none",
              borderRadius: 5,
              //   "&:hover": {
              //     bgcolor: "#d3a296",
              //   },
            }}
          >
            <Box>
              <Typography variant="body2">Gọi ngay Hotline</Typography>
              <Typography variant="body2" sx={{ fontWeight: 550 }}>
                123456789
              </Typography>
            </Box>
            <HeadsetMicIcon sx={{ fontSize: 43 }} />
          </Box>
        </Box>

        <Box
          sx={{
            ml: 20,
            p: 4,
            bgcolor: "white",
            width: { xs: "100%", md: "45%" },
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" align="center" sx={{ fontWeight: "bold" }}>
            Yêu cầu tư vấn ngay
          </Typography>
          <Typography variant="body2" align="center" sx={{ mb: 4 }}>
            Chúng tôi gọi lại ngay sau 1 - 3 phút
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Họ và tên của bạn"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="standard"
              margin="normal"
              size="small"
            />

            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              variant="standard"
              margin="normal"
              size="small"
            />

            <TextField
              fullWidth
              label="Số điện thoại"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              variant="standard"
              margin="normal"
              size="small"
            />

            {/* <FormControl fullWidth margin="normal" size="small">
              <InputLabel>Vui lòng chọn dịch vụ mà quan tâm</InputLabel>
              <Select
                value={formData.service}
                label="Vui lòng chọn dịch vụ mà quan tâm"
                onChange={handleSelectChange}
                name="service"
              >
                <MenuItem value="service1">Dịch vụ 1</MenuItem>
                <MenuItem value="service2">Dịch vụ 2</MenuItem>
                <MenuItem value="service3">Dịch vụ 3</MenuItem>
              </Select>
            </FormControl> */}
            <TextField
              fullWidth
              label="Vui lòng chọn dịch vụ mà quan tâm"
              name="service"
              value={formData.service}
              onChange={handleChange}
              variant="standard"
              margin="normal"
              size="small"
            />

            <TextField
              fullWidth
              label="Yêu cầu cụ thể (nếu có)"
              name="message"
              value={formData.message}
              onChange={handleChange}
              variant="standard"
              margin="normal"
              multiline
              rows={4}
              size="small"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                py: 1,
                bgcolor: "#E8A295",
                color: "#000",
                textTransform: "none",
                // "&:hover": {
                //   bgcolor: "#d3a296",
                // },
              }}
            >
              Gửi ngay cho chúng tôi
            </Button>
          </form>
        </Box>
      </Paper>
    </Container>
  );
};

export default ContactForm;
