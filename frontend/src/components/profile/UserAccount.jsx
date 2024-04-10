import React, { useContext, useEffect, useRef, useState } from 'react'
import Paper from '@mui/material/Paper';
import '../../styles/userAccount.css'
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import { app } from '../../firebase';

export default function UserAccount() {
    const {userData, setUserData} = useContext(UserContext)
    const [firstName, setFirstName] = useState(userData.firstName)
    const [lastName, setLastName] = useState(userData.lastName)
    const [mobileNumber, setMobileNumber] = useState(userData.mobileNumber)
    const [email, setEmail] = useState(userData.email)
    const [address, setAddress] = useState(userData.address)
    const [gender, setGender] = useState(userData.gender)
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [location, setLocation] = useState(userData.district)
    const navigate = useNavigate()
    //profile image upload ----start
    const [file, setFile] = useState(undefined);
    const fileRef = useRef(null);

    useEffect(()=>{
        if(file){
            handleProfilePicUpload(file)
        }
    },[file])
    

    let uploadComplete = false
    const handleProfilePicUpload = (file) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, `avatars/${fileName}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                if(progress === 100 && !uploadComplete){
                    notifySuccess('Profile Upload Successfull')
                    uploadComplete=true
                }else if(progress < 100 && uploadComplete){
                    notifyError('Profile Upload UnSuccessfull')
                    uploadComplete = false
                }
            },(error) => {
                notifyError(error)
            },
            async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                setUserData({ ...userData, avatar: downloadURL });
            }
        );
    };

    const notifySuccess = (message) => toast.success(message,{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

    const notifyError = (message) => toast.error(message,{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    })

    const userId = userData.userId;

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/user/user/${userId}`, {
                firstName: firstName,
                lastName: lastName,
                email: email,
                mobileNumber:mobileNumber,
                address:address,
                gender: gender,
                district: location,
                avatar: userData.avatar
            }).then(response=>{
                setUserData(response.data.user)
                console.log(response.data.user);
                notifySuccess('Updated Successfull')
            });
        } catch (error) {
            console.log(error);
            notifyError('Updated UnSuccessfull')
        }
    };

    const handlePassword = async (e) => {
        e.preventDefault();
        try {
            if (oldPassword === userData.password) {
                if (newPassword === confirmNewPassword) {
                    if (newPassword.trim() !== '') {
                        const response = await axios.put(`http://localhost:3000/user/user/${userId}`, {
                            password: confirmNewPassword,
                        });
                        setUserData(response.data.user);
                        console.log('Password updated successfully');
                        notifySuccess('Password updated successfully')
                    } else {
                        console.log('New password cannot be blank');
                        notifyError('New password cannot be blank')
                    }
                } else {
                    console.log('Password confirmation does not match');
                    notifyError('Password does not match')
                }
            } else {
                console.log('Current password is invalid');
                notifyError('Current password is invalid')
            }
        } catch (error) {
            console.log('An error occurred while updating password:', error);
        }
    };


    return (
        <div className='sm:ml-12 '>
            <div className='title'>
                My Profile
            </div>
            <Paper sx={{ width: '100%', maxWidth: 'none',boxShadow: 3 }} className='accountContainer'>
                <div className='formContent'>
                    <form onSubmit={updateUser}>
                    <input type="file" ref={fileRef} onChange={(e) => setFile(e.target.files[0])} accept="image/*" hidden />
                        <img
                            onClick={() => fileRef.current.click()}
                            className="rounded-full h-28 w-28 object-cover cursor-pointer self-center mt-2"
                            src={userData.avatar}
                            alt="profile"
                        />
                        <div className='userDetail'>
                            <div className='inputBox'>
                                <span className='details'>First Name</span>
                                <input type='text' placeholder='Enter your first name' value={firstName} onChange={(e)=>setFirstName(e.target.value)} required />
                            </div>
                            <div className='inputBox'>
                                <span className='details'>Last Name</span>
                                <input type='text' placeholder='Enter your last name' value={lastName} onChange={(e)=>setLastName(e.target.value)} required />
                            </div>
                            <div className='inputBox'>
                                <span className='details'>Email</span>
                                <input type='text' placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
                            </div>
                            <div className='inputBox'>
                                <span className='details'>Phone Number</span>
                                <input type='text' placeholder='Enter your number' value={mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)} required />
                            </div>
                        </div>
                        <div className=''>
                        <div className='userDetail3'>
                            <div className='inputBox w-10'>
                                <span className='details'>Address</span>
                                <input type='text' placeholder='Enter your Address' value={address} onChange={(e)=>setAddress(e.target.value)}/>
                            </div>
                            <div className='inputBox'>
                                <div className='inputboxlocation'>
                                <span className='details'>District/Province</span>
                                <select type='text' value={location} onChange={(e)=>setLocation(e.target.value)} className='custom-select'>
                                    <option value=' '>Select District</option>
                                    <option value='Colombo'>Colombo</option>
                                    <option value='Kandy'>Kandy</option>
                                    <option value='Galle'>Galle</option>
                                    <option value='Gampaha'>Gampaha</option>
                                    <option value='Kalutara'>Kalutara</option>
                                    <option value='Matara'>Matara</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='genderDetails'>
                            <input type='radio' name='gender' id='dot1' value="male" checked={gender ==='male'} onChange={(e)=>setGender('male')}/>
                            <input type='radio' name='gender' id='dot2' value="female" checked={gender ==='female'} onChange={(e)=>setGender('female')}/>
                            <span className='gendeTitle'>Gender</span>
                            <div className='category'>
                                <label for='dot1'>
                                    <span className='dot One'></span>
                                    <span className='gender'>Male</span>
                                </label>
                                <label for='dot2'>
                                    <span className='dot Two'></span>
                                    <span className='gender'>Female</span>
                                </label>
                            </div>
                        </div>

                        <div className='updateButton'>
                            <input type='submit' value='Update Changes' />
                        </div>
                        <ToastContainer />
                    </form>
                </div>
            </Paper>
            <Paper sx={{ width: '80%', maxWidth: 'none', boxShadow: 3 }} className='passwordContainer'>
            
                    <form onSubmit={handlePassword} >
                        <div className='passTitle'>
                            Change Password
                        </div>
                        <div className='userDetail2'>
                            <div className='inputBox '>
                                <span className='details'>Current Password</span>
                                <input type='password' placeholder='Enter your current Password' onChange={(e)=>setOldPassword(e.target.value)} required />
                            </div>
                            <div className='inputBox '>
                                <span className='details'>New Password</span>
                                <input type='password' placeholder='Enter your new Password' onChange={(e)=>setNewPassword(e.target.value)} required />
                            </div>
                            <div className='inputBox '>
                                <span className='details'>Confirm Password</span>
                                <input type='password' placeholder='Re-enter new Password' onChange={(e)=>setConfirmNewPassword(e.target.value)} required />
                            </div>
                        </div>
                        <div className='updateButton'>
                            <input type='submit' value='Update Password' />
                        </div>
                    </form>
                
            </Paper>
        </div>
    )
}
