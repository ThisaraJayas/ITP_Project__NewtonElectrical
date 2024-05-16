import React, { useContext } from 'react'
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import { app } from '../firebase'
import axios from 'axios'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

export default function OAuth() {
    const {setUserData} = useContext(UserContext)
    const navigate = useNavigate()

    const handleGoogleClick = async()=>{
        try{
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)
            const result = await signInWithPopup(auth,provider)
            console.log(result);
            const response = await axios.post('https://itp-project-newton-api.vercel.app/auth/googleregister',{
                name: result.user.displayName,
                email: result.user.email,
                avatar: result.user.photoURL
            })
            console.log(response);
            if(response.status==200){
                setUserData(response.data.user)
                navigate('/')
            }


        }catch(error){
            console.log(error);
        }
    }
    return (
        <div>
            <div class="mt-3 space-y-3">
                <button
                    type="button"
                    onClick={handleGoogleClick}
                    class="relative inline-flex items-center justify-center w-full px-3 py-3 text-base font-semibold text-white transition-all duration-200 bg-red-600  border-2 border-white rounded-md hover:bg-rose-600 focus:bg-rose-600 hover:text-white focus:text-white focus:outline-none"
                >
                    <div class="absolute inset-y-0 left-0 p-4">
                        <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                            ></path>
                        </svg>
                    </div>
                    Sign up with Google
                </button>
            </div>
        </div>
    )
}
