import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ThemeProvider, createTheme } from "@mui/material";

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
export default function DeleteUser() {
    const [open, setOpen] = React.useState(false);

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
                    variant="contained" color="secondary"
                    style={{ marginLeft:"10px", width: "100%", maxHeight: "30px" }}
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
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  </React.Fragment>
  )
}
