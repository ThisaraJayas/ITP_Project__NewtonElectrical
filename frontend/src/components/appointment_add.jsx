import React, { useState , useEffect} from 'react'
import Banner from './app_banner'
import Popup from 'reactjs-popup';
// import Button from 'react-bootstrap/Button';
import 'reactjs-popup/dist/index.css';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import axios from 'axios';
import '../styles/appointment.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import picture from '../assets/images/app.jpg';
import { Link } from 'react-router-dom';
import AppointmentAccordion from './AppointmentAccordion';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '50%',
      
      zIndex: 1000,
    },
    overlay: {
        zIndex: 1000, // Ensure the overlay is also on top
      },
  };
  
 

  
export default function AppointmentForms() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = React.useState(false);
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        select1: '',
        select2: '',
        description: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        province: '',
        zipcode: '',
        contactNum: '',
        ownProperty: false,
        timeSlot: new Date()
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [zipError, setZipError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);

    useEffect(() => {
        setZipError(false);
        setPhoneError(false);
    }, [formData.select1, formData.select2]);

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleDateChange = (newDate) => {
        setFormData(prev => ({
            ...prev,
            timeSlot: newDate
        }));
    };

    const sendDataToDatabase = () => {
        // Check if either select1 or select2 is 'none'
        if (formData.select1 === 'none' && formData.select2 === 'none') {
            console.log('No option selected. Not sending data to the database.');
            return; // Exit the function without sending data
        }

        axios.post('https://itp-project-newton-api.vercel.app/shedule/', formData)
            .then(response => {
                console.log('Data sent successfully:', response.data);
                setSuccessMessage('Appointment confirmed successfully!');
                // Reset the form data
                setFormData({
                    select1: '',
                    select2: '',
                    description: '',
                    firstName: '',
                    lastName: '',
                    address: '',
                    city: '',
                    province: '',
                    zipcode: '',
                    contactNum: '',
                    ownProperty: false,
                    timeSlot: new Date()
                });
                // Send the user back to the first form
                setStep(1);
            })
            .catch(error => {
                console.error('Error sending data:', error);
                // Optionally, you can show an error message to the user here
            });
    };

  return (
    <div>
<section class="bg-blue-950 2xl:py-24 2xl:bg-gray-50">
    <div class="px-4 mx-auto bg-blue-950 max-w-7xl sm:px-6 lg:px-8 2xl:rounded-xl">
        <div class="py-10 sm:py-16 lg:py-24 2xl:pl-24">
            <div class="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
                <div class="lg:order-2 2xl:-mr-24">
                    <img class="w-full shadow-xl rounded-xl" src="https://stackheating.com/wp-content/uploads/2021/10/AdobeStock_271148519-scaled.jpeg" alt="" />
                </div>

                <div class="lg:order-1">
                    <h2 class="text-3xl mb-5 font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-snug">Schedule Appointment <br class="hidden xl:block" />Just Few Steps!</h2>

                    <ul class="grid grid-cols-1 mt-4 sm:mt-10 sm:grid-cols-2 gap-x-10 xl:gap-x-16 gap-y-4 xl:gap-y-6">
                        <li class="flex items-center">
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-3 font-medium text-white"> Elecrical Mantainance </span>
                        </li>

                        <li class="flex items-center">
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-3 font-medium text-white"> Lighting Installation </span>
                        </li>

                        <li class="flex items-center">
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-3 font-medium text-white"> Surge Protection </span>
                        </li>

                        <li class="flex items-center">
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-3 font-medium text-white"> Electrical Safety Inspections </span>
                        </li>

                        <li class="flex items-center">
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-3 font-medium text-white"> AC Repair and Installation </span>
                        </li>

                        <li class="flex items-center">
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-3 font-medium text-white"> Security Camera Installation </span>
                        </li>
                    </ul>

                    <div class="flex flex-col items-start mt-8 sm:space-x-4 sm:flex-row sm:items-center lg:mt-12">
                    <Link to={'/appointments'}><button  onClick={openModal} className="btn text-2 bg-orange-500 text-white md:ml-8 font-semibold px-5 py-4 rounded-lg duration-500 md:static ">
              Schedule Appointment
            </button>
            </Link>
                        
                        

                        <a href="#" title="" class="inline-flex items-center justify-center px-4 py-4 mt-5 text-base font-semibold text-white transition-all duration-200 bg-transparent border border-white rounded-md sm:mt-0 hover:bg-white hover:text-black" role="button"> About Us </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<div>
   
    </div>
    <AppointmentAccordion/>
    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
       
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button> */}
        <div className="items-center m-8">
            {step === 1 && <Form1 data={formData} handleChange={handleChange} />}
            {step === 2 && <Form2 data={formData} handleChange={handleChange} zipError={zipError} setZipError={setZipError} phoneError={phoneError} setPhoneError={setPhoneError} />}
            {step === 3 && <Form3 data={formData} handleChange={handleChange} />}
            {step === 4 && <Form4 data={formData} />}

            <div className="navigation-buttons">
                {step > 1 && <button onClick={handlePrevious}>Previous</button>}
                {step < 4 && <button onClick={handleNext}>Next</button>}
                {step === 4 && <button onClick={sendDataToDatabase}>Confirm Appointment</button>}
            </div>

            {successMessage && <p>{successMessage}</p>}
        </div>
      </Modal>
    </div>
  )
}
const Form1 = ({ data, handleChange }) => {
    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        handleChange({ target: { name, value } });
    };

    return (
        <form className="form ">
            <div className="form-group ">
                <label htmlFor="select1" style={{ fontSize: '32px' }}>Electrical:</label>
                <select
                    id="select1"
                    name="select1"
                    value={data.select1}
                    onChange={handleSelectChange}
                >
                    <option value='none'>none</option>
                    <option value='powerIssue'>power issue</option>
                    <option value='switch/outlet'>switch/outlet</option>
                    <option value='rewiring'>rewiring</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="select2" style={{ fontSize: '32px' }}>Rooms:</label>

                {/* none */}
                {data.select1 === 'none' || data.select1 === '' ? (
                    <select
                        id="select2"
                        name="select2"
                        value={data.select2}
                        onChange={handleSelectChange}
                    >
                        <option value='none'>none</option>
                    </select>
                ) : ""}

                {/* powerIssue prices */}
                {data.select1 === 'powerIssue' ? (
                    <select
                        id="select2"
                        name="select2"
                        value={data.select2}
                        onChange={handleSelectChange}
                    >
                        <option value='none'>none</option>
                        <option value='1250'>1 Room</option>
                        <option value='2500'>2 Rooms</option>
                        <option value='5000'>3 Rooms</option>
                        <option value='10000'>4 Rooms</option>
                        <option value='15000'>5 Rooms</option>
                    </select>
                ) : ""}

                {/* switch/outlet prices */}
                {data.select1 === 'switch/outlet' ? (
                    <select
                        id="select2"
                        name="select2"
                        value={data.select2}
                        onChange={handleSelectChange}
                    >
                        <option value='none'>none</option>
                        <option value='5000'>1 Room</option>
                        <option value='7500'>2 Rooms</option>
                        <option value='10000'>3 Rooms</option>
                        <option value='12500'>4 Rooms</option>
                        <option value='15000'>5 Rooms</option>
                    </select>
                ) : ""}

                {/* rewiring prices */}
                {data.select1 === 'rewiring' ? (
                    <select
                        id="select2"
                        name="select2"
                        value={data.select2}
                        onChange={handleSelectChange}
                    >
                        <option value='none'>none</option>
                        <option value='25000'>1 Room</option>
                        <option value='35000'>2 Rooms</option>
                        <option value='45000'>3 Rooms</option>
                        <option value='55000'>4 Rooms</option>
                        <option value='65000'>5 Rooms</option>
                    </select>
                ) : ""}
            </div>
            <div className="form-group">
                <label htmlFor="description" style={{ fontSize: '32px' }}>Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={data.description}
                    onChange={handleChange}
                ></textarea>
            </div>
        </form>
    );
};

const Form2 = ({ data, handleChange, zipError, setZipError, phoneError, setPhoneError }) => {
    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (name === 'zipcode') {
            if (value.length !== 4) {
                setZipError(true);
            } else {
                setZipError(false); // Clear the error if the value is correct
            }
        }
        if (name === 'contactNum') {
            if (value.length !== 10) {
                setPhoneError(true);
            } else {
                setPhoneError(false); // Clear the error if the value is correct
            }
        }
    };

    return (
        <form className="form">
            <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" value={data.firstName} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" value={data.lastName} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" value={data.address} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" value={data.city} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="province">Province:</label>
                <input type="text" id="province" name="province" value={data.province} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="zipcode">Zip Code:</label>
                <input type="text" id="zipcode" name="zipcode" onBlur={handleBlur} value={data.zipcode} onChange={handleChange} />
                {zipError && <p style={{ color: 'red' }}>Zip Must be 4 Characters</p>}
            </div>
            <div className="form-group">
                <label htmlFor="mobile">contact number:</label>
                <input type="text" id="contactNum" name="contactNum" onBlur={handleBlur} value={data.contactNum} onChange={handleChange} />
                {phoneError && <p style={{ color: 'red' }}>Phone Number Must be 10 Characters</p>}
            </div>
            <div className="form-group">
                <label htmlFor="ownProperty">I own this residential property:</label>
                <input type="checkbox" id="ownProperty" name="ownProperty" checked={data.ownProperty} onChange={handleChange} />
            </div>
        </form>
    );
};

const Form3 = ({ data, handleChange }) => {
    const [date, setDate] = useState(new Date());

    const onChange = newDate => {
        setDate(newDate);
        handleChange({ target: { name: 'timeSlot', value: newDate } });
    };

    const handleTimeSlotChange = e => {
        handleChange(e); // Call the handleChange function to update the time slot in the parent component
    };

    return (
        <div className="calendar-container">
            <h2 style={{ fontSize: '32px' }}>Select a Date and Time Slot</h2>
            <div className="form-group items-center">
                <label htmlFor="date"></label>
                <Calendar
                    onChange={onChange}
                    value={date}
                />
            </div>
            <div className="form-group">
                <label htmlFor="timeSlot">Time Slot:</label>
                <input
                    type="text"
                    id="timeSlot"
                    name="timeSlot"
                    value={data.timeSlot instanceof Date ? data.timeSlot.toLocaleString() : data.timeSlot}
                    onChange={handleTimeSlotChange}
                />
            </div>
            
        </div>
    );
};

const Form4 = ({ data }) => {
    const selectedOption = data.select1 || data.select2;

    return (
        <div className="appointment-container">
            <div className="row">
                <div className="column">
                    <img src={picture} alt="Image" height={400} width={400} />
                </div>
                <div className="column2">
                    <h1><b>CONFIRM YOUR APPOINTMENT</b></h1>
                    <h2>{selectedOption}</h2>
                    <div style={{ marginTop: '40px' }}>
                        <h3><b>NAME-  {data.firstName} {data.lastName}</b></h3>
                        <br />

                        <h3><b>DATE-  {data.timeSlot instanceof Date ? data.timeSlot.toLocaleDateString() : data.timeSlot}</b></h3>
                        <br />
                        <h3><b>PHONE-  {data.contactNum}</b></h3>
                        <br />
                        <h3><b>CITY-  {data.city}</b></h3>
                        <br />
                        <h3><b>PRICE-  Rs {data.select2}.00</b></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};