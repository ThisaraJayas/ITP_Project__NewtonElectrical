import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ThemeProvider, createTheme } from "@mui/material";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default function UpdateJob({ jobId }) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [salary, setSalary] = React.useState("");
  const [requirements, setRequirements] = React.useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/job/${jobId}`);
      setTitle(response.data.title);
      setDepartment(response.data.department);
      setDescription(response.data.description);
      setLocation(response.data.location);
      setSalary(response.data.salary);
      setRequirements(response.data.requirements);
    } catch (error) {
      console.error('Error fetching job details:', error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/job/${jobId}`, {
        title,
        department,
        description,
        location,
        salary,
        requirements
      }).then(res => { console.log(res), window.location.reload() });
    } catch (error) {
      console.error('Error updating job:', error);
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
          Update
        </Button>
      </ThemeProvider>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleUpdate}>
          <DialogTitle>Update Job</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {/* Add job update form fields here */}
            </DialogContentText>
            {/* Example job update form fields */}
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="Department" />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
            <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="Salary" />
            <input type="text" value={requirements} onChange={(e) => setRequirements(e.target.value)} placeholder="Requirements" />
          </DialogContent>
          <DialogActions>
            <Button type="submit">Update</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}
