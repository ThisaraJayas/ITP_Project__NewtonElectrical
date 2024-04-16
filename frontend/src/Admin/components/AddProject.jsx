

import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
 import "../adminStyles/UpdateUser.css";
import { ThemeProvider, createTheme } from "@mui/material";
import axios from "axios";
import validator from 'validator'

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default function AddProject() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [cost, setCost] = useState("");
  const [image, setImage] = useState("");

  
  


  const handleAddProject = async (e) => {
    e.preventDefault();

    if (description.length > 500) {
      alert('Description must be less than or equal to 500 characters.');
      return; 
    }
    if(!validator.isNumeric(cost)){
      alert('Cost must be numbers');
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("status", status);
    formData.append("description", description);
    formData.append("duration", duration);
    formData.append("cost", cost);
    formData.append("image", image);

    const result = await axios.post(
      "http://localhost:3000/project/projects",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);
    handleClose();
  };
  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
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
          style={{ width: "200px", maxHeight: "30px" }}
          className="roleBtn"
          onClick={handleClickOpen}
        >
          Add Project
        </Button>
      </ThemeProvider>

      <Dialog open={open} onClose={handleClose}>
        <div className="formContent">
          <form onSubmit={handleAddProject}>
            <DialogContent>
              <div className="title">
                <h2>Add Project</h2>
              </div>

              <div className="projectDetails">
                <div className="inputBox">
                  <span className="details">Title</span>
                  <input
                    type="text"
                    placeholder="Enter project title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="inputBox">
                  <span className="details">Status</span>
                  <RadioGroup
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    row
                  >
                    <FormControlLabel
                      value="Ongoing"
                      control={<Radio />}
                      label="Ongoing"
                    />
                    <FormControlLabel
                      value="Previous"
                      control={<Radio />}
                      label="Previous"
                    />
                  </RadioGroup>
                </div>
                <div className="inputBox">
                  <span className="details">Description</span>
                   <input
                    type="text"
                    placeholder="Enter project description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="inputBox">
                  <span className="details">Duration</span>
                  <input
                    type="text"
                    placeholder="Enter project duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  />
                </div>
                <div className="inputBox">
                  <span className="details">Cost</span>
                  <input
                    type="text"
                    placeholder="Enter project cost"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                  />
                </div>
                <input type="file" accept="image/*" onChange={onInputChange}></input>
              </div>
            </DialogContent>
            <DialogActions style={{ marginBottom: "10%", width:"500px" }}>
              <Button
                variant="contained"
                style={{ width: "20%", maxHeight: "50px" }}
                type="submit"
              >
                Add
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