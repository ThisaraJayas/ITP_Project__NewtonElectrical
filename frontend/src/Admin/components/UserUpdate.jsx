import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import "../adminStyles/UpdateUser.css";
import { ThemeProvider, createTheme } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";

const theme = createTheme({
    typography: {
        button: {
            textTransform: "none",
        },
    },
});

export default function UserUpdate({ userId }) {
    const [open, setOpen] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [gender, setGender] = useState("");
    const [userType, setUserType] = useState("Customer");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/user/user/${userId}`
                );
                setFirstName(response.data.user.firstName);
                setLastName(response.data.user.lastName);
                setEmail(response.data.user.email);
                setMobileNumber(response.data.user.mobileNumber);
                setGender(response.data.user.gender);
                setUserType(response.data.user.userType);
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };
        fetchData();
    }, [userId]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/user/user/${userId}`, {
                userType: userType,
            }).then(resul=>{console.log(resul),window.location.reload()})
        } catch (err) {
            console.error("Error updating ", err);
        }
        handleClose();
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Button
                    variant="contained"
                    style={{ width: "100%", maxHeight: "30px" }}
                    className="roleBtn"
                    onClick={handleClickOpen}
                >
                    Change Role
                </Button>
            </ThemeProvider>

            <Dialog open={open} onClose={handleClose}>
                <div className="formContent">
                    <form onSubmit={handleUpdate}>
                        <DialogContent>
                            <div className="title">
                                <h2>Update Role</h2>
                            </div>

                            <div className="userDetails">
                                <div className="inputBox">
                                    <span className="details">First Name</span>
                                    <input
                                        type="text"
                                        placeholder="Enter your first name"
                                        value={firstName}
                                        disabled
                                    />
                                </div>
                                <div className="inputBox">
                                    <span className="details">Last Name</span>
                                    <input
                                        type="text"
                                        placeholder="Enter your last name"
                                        value={lastName}
                                        disabled
                                    />
                                </div>
                                <div className="inputBox">
                                    <span className="details">Email</span>
                                    <input
                                        type="text"
                                        placeholder="Enter your email"
                                        value={email}
                                        disabled
                                    />
                                </div>
                                <div className="inputBox">
                                    <span className="details">Phone Number</span>
                                    <input
                                        type="text"
                                        placeholder="Enter your number"
                                        value={mobileNumber}
                                        disabled
                                    />
                                </div>
                                <div className="inputBox">
                                    <span className="details">Gender</span>
                                    <input
                                        type="text"
                                        placeholder="Enter your password"
                                        value={gender}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="roleDetails">
                                <input
                                    type="radio"
                                    name="role"
                                    id="dot1"
                                    value="Customer"
                                    checked={userType === "Customer"}
                                    onChange={(e) => setUserType(e.target.value)}
                                />
                                <input
                                    type="radio"
                                    name="role"
                                    id="dot2"
                                    value="Admin"
                                    checked={userType === "Admin"}
                                    onChange={() => setUserType("Admin")}
                                />
                                <span className="roleTitle">User Role</span>
                                <div className="category">
                                    <label htmlFor="dot1">
                                        <span className="dot One"></span>
                                        <span className="gender">Customer</span>
                                    </label>
                                    <label htmlFor="dot2">
                                        <span className="dot Two"></span>
                                        <span className="gender">Admin</span>
                                    </label>
                                </div>
                            </div>
                        </DialogContent>
                        <DialogActions style={{ marginBottom: "3%" }}>
                            <Button
                                variant="contained"
                                style={{ width: "20%", maxHeight: "50px" }}
                                type="submit"
                            >
                                Update
                            </Button>
                            <Button
                                style={{ width: "15%", maxHeight: "40px" }}
                                onClick={handleClose}
                            >
                                Cancel
                            </Button>
                        </DialogActions>
                    </form>
                </div>
            </Dialog>
        </React.Fragment>
    );
}
