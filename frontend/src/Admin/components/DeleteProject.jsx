import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ThemeProvider, createTheme } from "@mui/material";
import axios from 'axios';

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
  palette: {
    secondary: {
      main: "#B00020", // Specify the main color
    },
  },
});
export default function DeleteProject({projectId}) {
  const [open, setOpen] = React.useState(false);

  const handleDelete = async (e) => {
    e.preventDefault()
    try {
      axios.delete(`http://localhost:3000/project/projects/${projectId}`)
        .then(res => { console.log(res), window.location.reload() })
        .catch(err => console.log(err))
    } catch (error) {
      console.error("Error Deleting ", error);
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(projectId)

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained" color="secondary"
          style={{ marginLeft: "10px", width: "100%", maxHeight: "30px" }}
          className="roleBtn"
          onClick={handleClickOpen}
        >
          Delete 
        </Button>
      </ThemeProvider>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form onSubmit={handleDelete}>
          <DialogTitle id="alert-dialog-title">
            {"User Deletion Confirmation"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Project ID {projectId} Deleting this project will permanently remove all associated
              data and access rights from the system.
              Are you absolutely certain you want to proceed with this action?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button type='submit'  autoFocus>
              Agree
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  )
}
