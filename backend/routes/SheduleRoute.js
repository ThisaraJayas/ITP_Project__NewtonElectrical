import express from 'express'
import {createAppointment,getAppointments,getAppointmentById,updateAppointment,deleteAppointment,approveAppointment,cancelAppointment} from '../controllers/SheduleController.js'


const router = express.Router()

// Create a new appointment
router.post('/', createAppointment);

// Get all appointments
router.get('/getappointments', getAppointments);

// Get single appointment by ID
router.get('/getApp/:id', getAppointmentById);

// Update appointment by ID
router.put('/updateApp/:id', updateAppointment);

// Delete appointment by ID
router.delete('/deleteApp/:id', deleteAppointment);

// Route to approve an appointment
router.put('/approve/appointments/:id', approveAppointment);

// Route to cancel an appointment
router.put('/cancel/appointments/:id', cancelAppointment);

export default router