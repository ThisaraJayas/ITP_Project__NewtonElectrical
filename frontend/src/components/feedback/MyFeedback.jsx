import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import  axios  from 'axios'

export default function () {
    const {userData}=useContext(UserContext)
    const [firstName, setFirstName]=useState('')

    useEffect(()=>{
        const fetchFeedback = async()=>{
            const response = axios.get('http://localhost:3000/feedbacks/feedback')
        }
    })
  return (
    <div>
        <div className=''>
            <div className='myFeedbackTitle mb-9'>
                Past Feedbacks
            </div>
            <div className='myFeedbackContainer'>

            </div>
        </div>
    </div>
  )
}
