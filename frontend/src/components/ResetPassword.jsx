import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Paper from "@mui/material/Paper";
import "../styles/resetpassword.css";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import PasswordValidator from "password-validator";

const passwordSchema = new PasswordValidator();
passwordSchema
  .is()
  .min(8)
  .is()
  .max(100)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits()
  .has()
  .not()
  .spaces();
export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();
  const { id, token } = useParams();
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");
  console.log(password);

  const handleAlert = (message, severity) => {
    setAlertMessage(message);
    setAlertSeverity(severity);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordSchema.validate(password)) {
      handleAlert(
        "Password must have updercase, lowercase and digits",
        "error"
      );
      return;
    }
    if (password === newPassword) {
      try {
        const response = await axios.post(
          `https://itp-project-newton-api.vercel.app/auth/resetPassword/${id}/${token}`,
          {
            password,
          }
        );

        if (response.status === 200) {
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Password doent match");
      handleAlert("Password doent match", "error");
    }
  };

  return (
    <div className="forgotpassContainer">
      <Paper
        sx={{ width: "50%", maxWidth: "none", boxShadow: 16 }}
        className="forgotpasswordPaper"
      >
        <h2>Enter New Password</h2>
        {alertMessage && (
          <Stack sx={{ width: "100%", marginBottom: "10px" }} spacing={2}>
            <Alert variant="filled" severity={alertSeverity}>
              {alertMessage}
            </Alert>
          </Stack>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your new password"
            className="passwordInput"
          />
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Confirm your new password"
            className="passwordInput"
          />
          <input type="submit" value="Update" className="submitButton" />
        </form>
      </Paper>
    </div>
  );
}
