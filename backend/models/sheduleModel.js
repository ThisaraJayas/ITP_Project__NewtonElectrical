import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    select1: String,
    select2: String,
    description: String,
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    province: String,
    zipcode: String,
    contactNum: String,
    ownProperty: Boolean,
    timeSlot: Date,
    status: {
        type: String,
        enum: ['pending', 'approved', 'canceled'], // Add more status options if needed
        default: 'pending'
      }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
