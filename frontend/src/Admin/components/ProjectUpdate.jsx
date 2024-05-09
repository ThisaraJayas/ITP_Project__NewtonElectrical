import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
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

export default function ProjectUpdate({ projectId }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [cost, setCost] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://itp-project-newton-api.vercel.app/project/projects/${projectId}`
        );
        console.log("API Response:", response.data); // Log the response data
        const projectData = response.data;
        setTitle(response.data.project.title);
        setStatus(projectData.project.status);
        setDescription(projectData.project.description);
        setDuration(projectData.project.duration);
        setCost(projectData.project.cost);
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };

    console.log(title)

    fetchData(); // Call fetchData when component mounts or projectId changes
  }, [projectId]); // Dependency array ensures useEffect runs when projectId changes

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://itp-project-newton-api.vercel.app/project/projects/${projectId}`, {
        title,
        status,
        description,
        duration,
        cost,
      });
      console.log("Project updated successfully!");
      handleClose();
    } catch (err) {
      console.error("Error updating project:", err);
    }
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
          Update
        </Button>
      </ThemeProvider>

      <Dialog open={open} onClose={handleClose}>
        <div className="formContent">
          <form onSubmit={handleUpdate}>
            <DialogContent>
              <div className="title">
                <h2>Update Project</h2>
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
              </div>
            </DialogContent>
            <DialogActions style={{ marginBottom: "3%", width:"500px" }}>
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
