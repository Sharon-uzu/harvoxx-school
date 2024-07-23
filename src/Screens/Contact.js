import React, { useEffect, useState }  from 'react'
import Header from '../Components/Header'
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
import { Supabase } from "../config/supabase-config";
import Modal from "react-modal";
import { MdCelebration } from "react-icons/md";



const Contact = () => {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto'; // Enable scrolling
  
    }, [pathname]);

    const [isModalOpenSuccess, setIsModalOpenSuccess] = useState(false);
    const toggleModalSuccess = () => {
      setIsModalOpenSuccess(!isModalOpenSuccess);
    };

    function open2(){
        setIsModalOpenSuccess(true);
    }

    function closeSuccess(){
        setIsModalOpenSuccess(false);
        window.location.reload()
    }

    const initialValues = {
        fullname: "",
        phone:"",
        email: "",
        message:"",
      };

        const [formData, setFormData] = useState(initialValues);
        const [formErrors, setFormErrors] = useState({});
        const [isSubmit, setIsSubmit] = useState(false);

        const handleSubmit = (e) => {
            setFormErrors(validate(formData));
            setIsSubmit(true);
          };
          useEffect(() => {
            console.log(formErrors);
            if (Object.keys(formErrors).length === 0 && isSubmit) {
              console.log(formData);
            }
          }, [formErrors]);
        
          const validate = (values) => {
            const errors = {};
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
          
            if (!values.fullname) {
              errors.fullname = "Full name is required";
            } else if (!values.phone) {
              errors.phone = "Phone number is required";
            } else if (!values.email) {
              errors.email = "Email is required";
            } else if (!regex.test(values.email)) {
              errors.email = "This is not a valid email";
            } else if (!values.message) {
              errors.message = "Message is required";
            }else{
                  Supabase.from("python-contact")
                    .upsert([
                      {
                        fullname: formData.fullname,
                        email: formData.email,
                        phone: formData.phone,
                        message: formData.message,
                      },
                    ])
                    .then((response) => {
                      console.log(response);
                      setIsModalOpenSuccess(true);
                    });
                      }
                      
                return errors;
              };
        
    

  return (
    <div className='contact-cc'>
        <Header/>


        <div className="contacts">

            <div className="c-l">

                <div className="c1 cc">
                    <FaMapMarkerAlt className='c-i'/>
                    <h2>Our Address</h2>
                    <p>Elzazi complex, Opposite Westharm petrol station along gbalajam/Akpajo road, woji ( Odili Road, Port-Harcourt )</p>
                </div>

                <div className="c2 cc">
                    <MdEmail className='c-i'/>
                    <h2>Email Us</h2>
                    <ul>
                        <li><a href="mailto:pitch@pythonscave.com">pitch@pythonscave.com</a></li>
                        <li><a href="mailto:sponsor@pythonscave.com">sponsor@pythonscave.com</a></li>
                    </ul>
                </div>

                <div className="c2 cc">
                    <IoCallSharp className='c-i'/>
                    <h2>Call Us</h2>
                    <ul>
                        <li><a href="tel:07049623723">+234-474-962-3723</a></li>
                        <li><a href="tel:08089621214">+234-808-962-1214</a></li>
                    </ul>
                </div>

            </div>

            <div className="c-r">
                <div className='c-form'>
                    <input type="text" placeholder='Your Full Name'
                    value={formData.fullname}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        fullname: e.target.value,
                      });
                    }}/>
                    <p style={{ color: "red", fontSize: "14px", marginBottom:'15px' }}>
                    {formErrors.fullname}
                    </p>
                    <input type="tel" placeholder='Your Phone Number'
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      });
                    }}/>
                    <p style={{ color: "red", fontSize: "14px", marginBottom:'15px' }}>
                    {formErrors.phone}
                    </p>
                    <input type="email" name="" id="" placeholder='Email'
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      });
                    }}/>
                    <p style={{ color: "red", fontSize: "14px", marginBottom:'15px' }}>
                    {formErrors.email}
                    </p>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Message'
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      });
                    }}></textarea>
                    <p style={{ color: "red", fontSize: "14px", marginBottom:'15px' }}>
                    {formErrors.message}
                    </p>
                    <div className="btnn">
                        <button onClick={handleSubmit}>Send</button>
                    </div>
                </div>

            </div>

        </div>

        {/* success message */}

        <Modal
                isOpen={isModalOpenSuccess}
                onRequestClose={toggleModalSuccess}
                contentLabel="Example Modal"
                className={`bg-transparnt`}
                style={{ 
                overlay: {
                    position: "fixed",
                    top: "0",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "hsla(0, 0%, 0%, .8)",
                    zIndex:100000,
                    
                },
                }}
            >
                <div className='modal1'>
                <div className='modal1-content rev'>
                    {/* <div className='close'>
                    <button onClick={() => close2()} style={{cursor:'pointer'}}>X</button>
                    </div> */}

                    <div className='review'>
                        <MdCelebration className='trum'/>
                        <p>Thank You For Reaching Out.</p>  
                        <button onClick={() => closeSuccess()} style={{cursor:'pointer'}}>OK</button>                      
                    </div>
                    
                </div>

                </div>
                
            </Modal>
    </div>
  )
}

export default Contact