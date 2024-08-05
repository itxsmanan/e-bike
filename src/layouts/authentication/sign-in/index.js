import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import logo from "assets/images/logo-ct.png";

function Basic() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });

  const handleSignIn = () => {
    // Reset error messages
    setError({ email: "", password: "" });

    if (email === "admin@admin.com" && password === "12345") {
      localStorage.setItem("emailData", email);
      localStorage.setItem("passwordData", password);
      console.log("Data stored in localStorage");
      navigate("/dashboard"); // Use navigate for redirection
    } else {
      // Set error messages
      handleClick();
    }
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDBox>
            <img src={logo} width="50%" />
          </MDBox>
          <MDTypography variant="h4" fontWeight="medium" color="white">
            Sign in
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
              />
            </MDBox>

            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={handleSignIn}>
                Sign in
              </MDButton>
            </MDBox>
            <div>
              <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert
                  onClose={handleClose}
                  severity="error"
                  variant="filled"
                  sx={{ width: "100%" }}
                >
                  Invalid Email & Password
                </Alert>
              </Snackbar>
            </div>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
