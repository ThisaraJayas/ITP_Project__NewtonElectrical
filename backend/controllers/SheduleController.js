
import Appointment from '../models/sheduleModel.js';

// Create a new appointment
export const createAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.create(req.body);
        res.status(201).json({ success: true, data: appointment });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all appointments
export const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json({ success: true, data: appointments });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
        console.log(error.message);
    }
};

// Get single appointment by ID
export const getAppointmentById = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);
        if (!appointment) {
            return res.status(404).json({ success: false, error: 'Appointment not found' });
        }
        res.status(200).json({ success: true, data: appointment });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Update appointment by ID
export const updateAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!appointment) {
            return res.status(404).json({ success: false, error: 'Appointment not found' });
        }
        res.status(200).json({ success: true, data: appointment });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Delete appointment by ID
export const deleteAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndDelete(req.params.id);
        if (!appointment) {
            return res.status(404).json({ success: false, error: 'Appointment not found' });
        }
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};


//approve and cancel
export const approveAppointment = async (req, res) => {
    try {
      const { id } = req.params;
      const appointment = await Appointment.findByIdAndUpdate(id, { status: 'approved' }, { new: true });
      res.json(appointment);
    } catch (error) {
      console.error('Error approving appointment:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // Controller to cancel an appointment
  export const cancelAppointment = async (req, res) => {
    try {
      const { id } = req.params;
      const appointment = await Appointment.findByIdAndUpdate(id, { status: 'canceled' }, { new: true });
      res.json(appointment);
    } catch (error) {
      console.error('Error canceling appointment:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };