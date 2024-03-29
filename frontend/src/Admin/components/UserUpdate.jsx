import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import '../adminStyles/UpdateUser.css'
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({      
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});

export default function UserUpdate() {
    const [open, setOpen] = useState(false);
    const [userDetails, setUserDetails]=useState()

    useEffect(()=>{
        
    })



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
        <ThemeProvider theme={theme}>
        <Button variant="contained" style={{width: '100%', maxHeight: '30px'}} className='roleBtn' onClick={handleClickOpen}>
                Change Role
        </Button>
        </ThemeProvider>
      
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <div className='formContent'>
            <form>
        <DialogContent>
          <DialogContentText>
           
          </DialogContentText>
        <div className='title'>
            <h2>Update Role</h2>
        </div>
        
                <div className='userDetails'>
                    <div className='inputBox'>
                        <span className='details'>First Name</span>
                        <input type='text' placeholder='Enter your first name' required/>
                    </div>
                    <div className='inputBox'>
                        <span className='details'>Last Name</span>
                        <input type='text' placeholder='Enter your last name' required/>
                    </div>
                    <div className='inputBox'>
                        <span className='details'>Email</span>
                        <input type='text' placeholder='Enter your email' required/>
                    </div>
                    <div className='inputBox'>
                        <span className='details'>Phone Number</span>
                        <input type='text' placeholder='Enter your number' required/>
                    </div>
                    <div className='inputBox'>
                        <span className='details'>Gender</span>
                        <input type='text' placeholder='Enter your password' required/>
                    </div>
                </div>
                <div className='genderDetails'>
                    <input type='radio' name='gender' id='dot1'/>
                    <input type='radio' name='gender' id='dot2'/>
                    <span className='genderTitle'>User Role</span>
                    <div className='category'>
                        <label for='dot1'>
                            <span className='dot One'></span>
                            <span className='gender'>Customer</span>
                        </label>
                        <label for='dot2'>
                            <span className='dot Two'></span>
                            <span className='gender'>Admin</span>
                        </label>
                    </div>
                </div>
                

        </DialogContent>
        <DialogActions style={{marginBottom:'3%'}}>
          <Button variant="contained" style={{width: '20%', maxHeight: '50px'}} type="submit">Update</Button>
          <Button style={{width: '15%', maxHeight: '40px'}}  onClick={handleClose}>Cancel</Button>
        </DialogActions>
        </form>
        </div>
      </Dialog>
      
    </React.Fragment>
  )
}
