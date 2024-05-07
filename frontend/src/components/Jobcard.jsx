// Import necessary libraries
import React, { useContext, useRef, useState } from 'react';
import'../styles/CareerOpenings.css'
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import { app } from '../firebase';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

// Define the Card component
const Card = ({ job }) => {
    const [productImage, setProductImage] = useState(null);
    const {userData}=useContext(UserContext)
    const fileRef = useRef(null);
    console.log(productImage);
    console.log(job.title);

    const uploadCv =async(e)=>{
        e.preventDefault()
        try{
            let imageUrl = ''; 
            if (productImage) {
              imageUrl = await handleCvImageUpload(productImage);
            }
            const response = await axios.post('http://localhost:3000/cvs/upload',{
                userId: userData.userId,
                JobTitle: job.title,
                jobCv: imageUrl,
            })
            if (response.status === 200) {
                console.log(response);
                window.location.reload();
              }
        }catch(error){
            console.log(error);
        }
        

    }
    const handleCvImageUpload = async (image) => {
        try {
          const storage = getStorage(app);
          const fileName = new Date().getTime() + image.name;
          const storageRef = ref(storage, `Jobcv/${fileName}`);
          const uploadTask = uploadBytesResumable(storageRef, image);
          await uploadTask;
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          return downloadURL;
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <div className="md:p-8 p-2 bg-gray-200 card-container">
            {/* Department */}
            <p className="text-indigo-500 font-semibold text-base mt-2">Department: {job.department}</p>
            {/* Title */}
            <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">{job.title}</h1>
            {/* Description */}
            <div className="max-w-full">
                <p className="text-base font-medium tracking-wide text-gray-600 mt-1">Description: {job.description}</p>
            </div>
            {/* Location */}
            <p className="text-base font-medium tracking-wide text-gray-600 mt-1">Location: {job.location}</p>
            {/* Salary */}
            <p className="text-base font-medium tracking-wide text-gray-600 mt-1">Salary: {job.salary}</p>
            {/* Requirements */}
            <p className="text-base font-medium tracking-wide text-gray-600 mt-1">Requirements: {job.requirements}</p>
            {/* Posted By and Upload CV button */}
            <div className="flex justify-between items-center mt-20">
                <div>
                    <p className="text-gray-900 font-semibold">Posted By: {job.postedBy}</p>
                    <p className="text-gray-500 font-semibold text-sm">Posted Date: {job.postedDate}</p>
                </div>
                <form onSubmit={uploadCv} className='flex justify-end'>
                <button onClick={() => fileRef.current.click()}className="upload-cv-button">UploadCV</button>
                    <input
                        type="file"
                        className="upload-cv-button"
                        id="image"
                        ref={fileRef}
                        name="image"
                        onChange={(e) => setProductImage(e.target.files[0])}
                        accept=".jpg, .jpeg, .png, .pdf"
                        hidden
                    />
                    <input type="submit" value="Send" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded" />
                </form>
                
            </div>
        </div>
    );
};

export default Card;
