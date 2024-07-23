import React, { useEffect, useState }  from 'react'
import Header from '../Components/Header';
import { FaMoneyBill } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import vector from '../assets/Vector 2.png'
import { IoEyeSharp } from "react-icons/io5";
import { FaAsterisk } from "react-icons/fa6";
import Faq from '../Components/Faq';
import Footer from '../Components/Footer';
import { useLocation } from 'react-router-dom';
import Modal from "react-modal";
import {IoMdMegaphone} from 'react-icons/io'
import { Supabase } from "../config/supabase-config";
import { MdCelebration } from "react-icons/md";



const Sponsors = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  function openModal(){
    setIsModalOpen(true)
  }

  function closeModal(){
    setIsModalOpen(false)
  }

  const [isModalOpenForm, setIsModalOpenForm] = useState(false);
  const toggleModalForm = () => {
    setIsModalOpenForm(!isModalOpenForm);
  };
  function activate(){
    setIsModalOpen(false)
    setIsModalOpenForm(true)
  }

  function closeModalForm(){
    setIsModalOpenForm(false)
  }


  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const toggleModal1 = () => {
    setIsModalOpen1(!isModalOpen1);
  };
  function openModal1(){
    setIsModalOpen1(true)
  }

  function closeModal1(){
    setIsModalOpen1(false)
  }

  const [isModalOpenForm1, setIsModalOpenForm1] = useState(false);
  const toggleModalForm1 = () => {
    setIsModalOpenForm1(!isModalOpenForm1);
  };
  function activate1(){
    setIsModalOpen1(false)
    setIsModalOpenForm1(true)
  }

  function closeModalForm1(){
    setIsModalOpenForm1(false)
  }

  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const toggleModal2 = () => {
    setIsModalOpen2(!isModalOpen2);
  };
  function openModal2(){
    setIsModalOpen2(true)
  }

  function closeModal2(){
    setIsModalOpen2(false)
  }

  const [isModalOpenForm2, setIsModalOpenForm2] = useState(false);
  const toggleModalForm2 = () => {
    setIsModalOpenForm2(!isModalOpenForm2);
  };
  function activate2(){
    setIsModalOpen2(false)
    setIsModalOpenForm2(true)
  }

  function closeModalForm2(){
    setIsModalOpenForm2(false)
  }


  function submit(){
    setIsModalOpenForm2(false)
    setIsModalOpenForm1(false)
    setIsModalOpenForm(false)
    setIsModalOpenSuccess(true);
  }

  function openModal3(){
    setIsOpen(true)
  }

  function closeModal3(){
    setIsOpen(false)
  }


  const [isOpen, setIsOpen] = useState(false);
  const toggleModal3 = () => {
    setIsOpen(!isOpen);
  };

  function close1(){
    setIsOpen(true)
    setIsModalOpen(false)
  }

  function close2(){
    setIsOpen(true)
    setIsModalOpen1(false)
  }

  function close3(){
    setIsOpen(true)
    setIsModalOpen2(false)
  }


  // form

  const initialValues = {
    fullname: "",
    business:"",
    email: "",
    phone:"",
    package: "",
  };

  const [formData, setFormData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const handleSubmit = (e) => {
    setFormErrors(validate(formData));
    setIsSubmit(true);
  };

  const handleSubmit1 = (e) => {
    setFormErrors(validate1(formData));
    setIsSubmit(true);
  };

  const handleSubmit2 = (e) => {
    setFormErrors(validate2(formData));
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
    } else if (!values.business) {
      errors.business = "Business or Brand is required";
    }else{
          Supabase.from("python-sponsor")
            .upsert([
              {
                fullname: formData.fullname,
                email: formData.email,
                phone: formData.phone,
                business: formData.business,
                package: 'Gold',
              },
            ])
            .then((response) => {
              console.log(response);
              setIsModalOpenForm2(false)
              setIsModalOpenForm1(false)
              setIsModalOpenForm(false)
              setIsModalOpenSuccess(true);
            });
              }
              
        return errors;
      };

      const validate1 = (values) => {
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
        } else if (!values.business) {
          errors.business = "Business or Brand is required";
        }else{
              Supabase.from("python-sponsor")
                .upsert([
                  {
                    fullname: formData.fullname,
                    email: formData.email,
                    phone: formData.phone,
                    business: formData.business,
                    package: 'Silver',
                  },
                ])
                .then((response) => {
                  console.log(response);
                  setIsModalOpenForm2(false)
                  setIsModalOpenForm1(false)
                  setIsModalOpenForm(false)
                  setIsModalOpenSuccess(true);
                });
                  }
                  
            return errors;
          };

          const validate2 = (values) => {
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
            } else if (!values.business) {
              errors.business = "Business or Brand is required";
            }else{
                  Supabase.from("python-sponsor")
                    .upsert([
                      {
                        fullname: formData.fullname,
                        email: formData.email,
                        phone: formData.phone,
                        business: formData.business,
                        package: 'Bronze',
                      },
                    ])
                    .then((response) => {
                      console.log(response);
                      setIsModalOpenForm2(false)
                      setIsModalOpenForm1(false)
                      setIsModalOpenForm(false)
                      setIsModalOpenSuccess(true);
                    });
                      }
                      
                return errors;
              };
  


  // success modal

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

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto'; // Enable scrolling
  
    }, [pathname]);
    

  return (
    <div>
        <Header/>
        <div className="sponsor-hero">
            <div className="s-c">
                <h3>Join Us To Empower the Future</h3>
                <p>Lead the charge in innovation, providing essential support to visionary startups. Elevate your brand and shape tomorrow's tech landscape.</p>
                <a href="#packages"><button>Become a sponsor</button></a>

                <div className="s-icons">
                    <div>
                        <FaMoneyBill className='s-i'/>
                        <span>Over 20 Millions Views</span>
                    </div>
                    <div>
                        <IoPerson className='s-i'/>
                        <span>Over 10 Media Platforms</span>
                    </div>
                    <div>
                        <IoIosPeople className='s-i'/>
                        <span>Over 1000 Startups</span>
                    </div>

                    
                </div>
            </div>
        </div>

        <div className="why-sponsor">
            <div className="title">
              <h3>Why You Should Sponsor</h3>
              <img src={vector} alt="" />
            </div>

            <div className="why-cards">

                <div className="cad">
                    <div className="img">
                        <IoEyeSharp className='w-i' />
                    </div>
                    <div className="txt">
                        <h2>Amplified Brand Exposure</h2>
                        <p>Increase visibility across all media platforms.</p>
                    </div>
                </div>

                <div className="cad">
                    <div className="img">
                        <IoEyeSharp className='w-i' />
                    </div>
                    <div className="txt">
                        <h2>Market Positioning</h2>
                        <p>Position your brand at the forefront of your target market and innovation.</p>
                    </div>
                </div>

                <div className="cad">
                    <div className="img">
                        <IoEyeSharp className='w-i' />
                    </div>
                    <div className="txt">
                        <h2>Direct Audience Engagement</h2>
                        <p>Engage directly with tech-savvy and non tech-savvy audience.</p>
                    </div>
                </div>

                <div className="cad">
                    <div className="img">
                        <IoEyeSharp className='w-i' />
                    </div>
                    <div className="txt">
                        <h2>Customer Acquisition</h2>
                        <p>Attract new customers and expand your market.</p>
                    </div>
                </div>

                <div className="cad">
                    <div className="img">
                        <IoEyeSharp className='w-i' />
                    </div>
                    <div className="txt">
                        <h2>Corporate Social Responsibility</h2>
                        <p>Contribute to the growth and have a stake in the local tech ecosystems.</p>
                    </div>
                </div>

                <div className="cad">
                    <div className="img">
                        <IoEyeSharp className='w-i' />
                    </div>
                    <div className="txt">
                        <h2>Exclusive Networking Opportunities</h2>
                        <p>Connect with top tech innovators and leaders.</p>
                    </div>
                </div>

            </div>

        </div>


        <div className="sponsorship" id='packages'>
            <div className="title">
              <h3>Sponsorship Packages</h3>
              <img src={vector} alt="" />
            </div>
            <p>Fuel Growth. Be a catalyst for change, driving forward the success of promising startups. Partner with us to foster innovation and make a lasting impact.</p>

            <div className="packages">

                <div className="pack">
                    <div className="top">
                        <h2>₦10,000, 000</h2>
                        
                    </div>
                    <h3>Gold Sponsors</h3>
                    <h4>(1 slot available)</h4>
                    <ul>
                        <li><FaAsterisk className='p-i'/>Brand Logo on all publicity materials starting September 1, 2024.</li>
                        <li><FaAsterisk className='p-i'/>Brand Logo on the Python's Cave website from September 1, 2024.</li>
                        <li><FaAsterisk className='p-i'/>Special Mentions in newspaper and television content.</li>
                        <li><FaAsterisk className='p-i'/>Brand Logo on all merchandise for participants.</li>
                        <li><FaAsterisk className='p-i'/>Roll-Up Stand inside the Python's Cave venue.</li>
                        <button onClick={openModal1}>See more</button>
                    </ul>
                </div>

                <div className="pack">
                    <div className="top top2">
                        <h2>₦5,000,000</h2>
                        
                    </div>
                    <h3>Silver Sponsors</h3>
                    <h4>(2 slots available)</h4>
                    <ul>
                        <li><FaAsterisk className='p-i'/>Brand Logo on all publicity materials starting September 1, 2024.</li>
                        <li><FaAsterisk className='p-i'/>Brand Logo on the Python's Cave website from September 1, 2024.</li>
                        <li><FaAsterisk className='p-i'/>Advertisements on 50% of Python's Cave pitching videos on YouTube.</li>
                        <li><FaAsterisk className='p-i'/>Advertisements on 50% of Python's Cave pitching videos on Facebook.</li>
                        <li><FaAsterisk className='p-i'/>Advertisements on all Day-1 and Day-2 audition videos.</li>
                        <button onClick={openModal}>See more</button>
                    </ul>
                </div>

                <div className="pack">
                    <div className="top top3">
                        <h2>₦3,000,000</h2>
                        
                    </div>
                    <h3>Bronze Sponsors</h3>
                    <h4>(3 slots available)</h4>
                    <ul>
                        <li><FaAsterisk className='p-i'/>Brand Logo on all publicity materials starting September 1, 2024.</li>
                        <li><FaAsterisk className='p-i'/>Brand Logo on the Python's Cave website from September 1, 2024.</li>
                        <li><FaAsterisk className='p-i'/>Advertisements on 50% of Python's Cave pitching videos on YouTube.</li>
                        <li><FaAsterisk className='p-i'/>Advertisements on 50% of Python's Cave pitching videos on Facebook.</li>
                        <li><FaAsterisk className='p-i'/>Roll-Up Stand inside the Python's Cave venue.</li>
                        <button onClick={openModal2}>See more</button>
                    </ul>
                </div>

            </div>

        </div>

        {/* siver */}

        <Modal
            isOpen={isModalOpen}
            onRequestClose={toggleModal}
            contentLabel="Example Modal"
            className={`bg-transparnt`}
            style={{ 
              overlay: {
                position: "fixed",
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                top: "0",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "hsla(0, 0%, 0%, .8)",
                zIndex:10000000000000000,
                
              },
            }}
          >
           
           <section className='modal'>

            <div className='pack'>

              <div className='close'>

                <button  onClick={closeModal}>x</button>

              </div>

              

                    <h3 style={{color:'silver'}}>SILVER <span style={{color:'#000'}}>NGN5,000,000</span></h3>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Brand Logo on all publicity materials (handbills, e-flyers, videos, event banners) starting September 1, 2024.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Brand Logo on the Python's Cave website from September 1, 2024.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Advertisements on 50% of Python's Cave pitching videos on YouTube.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Advertisements on 50% of Python's Cave pitching videos on Facebook.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Advertisements on all Day-1 and Day-2 audition videos.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Branding Materials in the halls during "Pitch-To-Market" sessions.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Full Branding of a 7x8 space at the audition venue.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Mentions in select media coverage.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Digital Promotion across Python's Cave social media platforms.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Standard Exhibition Space at the audition venue.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Special Game Show during auditions dedicated to your brand.</p>
                    </div>
                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>2 Special Game Activities during auditions dedicated to your brand.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>1 VVIP pass</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>3 VIP passes</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>3x7 Banner of your brand forming part of the backdrop inside the Python's Cave room.</p>
                    </div>


                    <button className='btn' style={{backgroundColor:'silver', cursor:'pointer'}} onClick={activate}>Become A Sponsor</button>


                </div>

           </section>
              
                

              

           
            
          </Modal>


          <Modal
            isOpen={isModalOpenForm}
            onRequestClose={toggleModalForm}
            contentLabel="Example Modal"
            className={`bg-transparnt`}
            style={{ 
              overlay: {
                position: "fixed",
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                top: "0",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "hsla(0, 0%, 0%, .8)",
                zIndex:10000000000000000,
                
              },
            }}
          >
           
           <section className='modal'>

            <div className='pack sps'>

              <div className='close'>

                <button  onClick={closeModalForm}>x</button>

              </div>

              <div className="sponsor-form">
                    <input type="text" placeholder='Full Name' 
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
                    <input type="text" placeholder='Business/Brand Name'
                      value={formData.business}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          business: e.target.value,
                        });
                      }}/>
                    <p style={{ color: "red", fontSize: "14px", marginBottom:'15px'  }}>
                    {formErrors.business}
                    </p>
                    <input type="email" placeholder='Email'
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        });
                      }}/>
                    <p style={{ color: "red", fontSize: "14px", marginBottom:'15px'  }}>
                    {formErrors.email}
                    </p>
                    <input type="tel" placeholder='Phone number'
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        });
                      }}/>
                    <p style={{ color: "red", fontSize: "14px", marginBottom:'15px'  }}>
                    {formErrors.phone}
                    </p>
                    <button className='btn' style={{cursor:'pointer', backgroundColor:'silver'}} onClick={handleSubmit1}>Submit</button>

                  </div>



                </div>

           </section>
              
                

              

           
            
          </Modal>


          {/* gold */}

        <Modal
            isOpen={isModalOpen1}
            onRequestClose={toggleModal1}
            contentLabel="Example Modal"
            className={`bg-transparnt`}
            style={{ 
              overlay: {
                position: "fixed",
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                top: "0",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "hsla(0, 0%, 0%, .8)",
                zIndex:10000000000000,
                
              },
            }}
          >
           
           <section className='modal'>

            <div className='pack'>

              <div className='close'>

                <button  onClick={closeModal1}>x</button>

              </div>

              

                    <h3>GOLD <span style={{color:'#000'}}>NGN10,000,000</span></h3>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Exclusive Booth at the audition venue.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Brand Logo on all publicity materials (handbills, e-flyers, billboards, posters, bus stickers, videos, event banners) starting September 1, 2024.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Brand Logo on the Python's Cave website from September 1, 2024.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Advertisements on all audition videos.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Special Mentions in newspaper and television content.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Brand Logo on all T-shirts.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Brand Logo on all merchandise for participants.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Roll-Up Stand inside the Python's Cave venue.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Advertisements on all Python's Cave pitching videos on YouTube.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Advertisements on all Python's Cave pitching videos on Facebook.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Advertisements on Python's Cave TV show.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Full Branding of a 10x15 space at the audition venue.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>3 Special Game Activities during auditions dedicated to your brand.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Advertisements on all audition videos (Day 1 - 3).</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Branding along the sidewalks leading into Python's Cave.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Documentary Video of your brand's activities at the Python's Cave auditions.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Documentary Video of your brand's activities at the Python's Cave show.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Mentions in press conferences and select media coverage.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Digital Promotion across all Python's Cave platforms.</p>
                    </div>
                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Standard Exhibition Space at the audition venue.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>2 VVIP passes</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>5 VIP Passes</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>3x7 Banner of your brand forming part of the backdrop inside the Python's Cave room.</p>
                    </div>

                    


                    <button className='btn' onClick={activate1} style={{cursor:'pointer'}}>Become A Sponsor</button>


                </div>

           </section>
              
                

              

           
            
          </Modal>


          <Modal
            isOpen={isModalOpenForm1}
            onRequestClose={toggleModalForm1}
            contentLabel="Example Modal"
            className={`bg-transparnt`}
            style={{ 
              overlay: {
                position: "fixed",
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                top: "0",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "hsla(0, 0%, 0%, .8)",
                zIndex:10000000000000000,
                
              },
            }}
          >
           
           <section className='modal'>

            <div className='pack sps'>

              <div className='close'>

                <button  onClick={closeModalForm1}>x</button>

              </div>

                  <div className="sponsor-form">
                    <input type="text" placeholder='Full Name' 
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
                    <input type="text" placeholder='Business/Brand Name'
                      value={formData.business}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          business: e.target.value,
                        });
                      }}/>
                    <p style={{ color: "red", fontSize: "14px", marginBottom:'15px'  }}>
                    {formErrors.business}
                    </p>
                    <input type="email" placeholder='Email'
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        });
                      }}/>
                    <p style={{ color: "red", fontSize: "14px", marginBottom:'15px'  }}>
                    {formErrors.email}
                    </p>
                    <input type="tel" placeholder='Phone number'
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        });
                      }}/>
                    <p style={{ color: "red", fontSize: "14px", marginBottom:'15px'  }}>
                    {formErrors.phone}
                    </p>
                    <button className='btn' style={{cursor:'pointer'}} onClick={handleSubmit}>Submit</button>

                  </div>



                </div>

           </section>
              
                

              

           
            
          </Modal>



          {/* Bronze */}

        <Modal
            isOpen={isModalOpen2}
            onRequestClose={toggleModal2}
            contentLabel="Example Modal"
            className={`bg-transparnt`}
            style={{ 
              overlay: {
                position: "fixed",
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                top: "0",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "hsla(0, 0%, 0%, .8)",
                zIndex:10000000000000000,
                
              },
            }}
          >
           
           <section className='modal'>

            <div className='pack'>

              <div className='close'>

                <button  onClick={closeModal2}>x</button>

              </div>

              

                    <h3 style={{color:'lightblue'}}>Bronze <span style={{color:'#000'}}>NGN3,000,000</span></h3>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Brand Logo on all handbills, e-flyers, and event banners starting September 1, 2024.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Brand Logo on the Python's Cave website from September 1, 2024.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Advertisements on 50% of Python's Cave pitching videos on YouTube.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p> Advertisements on 50% of Python's Cave pitching videos on Facebook.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Roll-Up Stand inside the Python's Cave venue.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Advertisements on all audition videos.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Branding Materials in the halls during "Pitch-To-Market" sessions.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Full Branding of a 5x7 space at the audition venue.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Branding along the sidewalks leading into Python's Cave.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>1 Special Game Activities during auditions dedicated to your brand.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>Standard Exhibition Space at the audition venue.</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>2 VIP Passes</p>
                    </div>

                    <div>
                      <FaAsterisk className='p-i'/>
                      <p>3x7 Banner of your brand forming part of the backdrop inside the Python's Cave room.</p>
                    </div>

                    <div>
                      <FaAsterisk  className='p-i'/>
                      <p>Advertisements on all Day-1 audition videos.</p>
                    </div>


                    <button className='btn' style={{backgroundColor:'lightblue', cursor:'pointer'}} onClick={activate2}>Become A Sponsor</button>


                </div>

           </section>
              
                

              

           
            
          </Modal>


          <Modal
            isOpen={isModalOpenForm2}
            onRequestClose={toggleModalForm2}
            contentLabel="Example Modal"
            className={`bg-transparnt`}
            style={{ 
              overlay: {
                position: "fixed",
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                top: "0",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "hsla(0, 0%, 0%, .8)",
                zIndex:10000000000000000,
                
              },
            }}
          >
           
           <section className='modal'>

            <div className='pack sps'>

              <div className='close'>

                <button  onClick={closeModalForm2}>x</button>

              </div>

              <div className="sponsor-form">
                    <input type="text" placeholder='Full Name' 
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
                    <input type="text" placeholder='Business/Brand Name'
                      value={formData.business}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          business: e.target.value,
                        });
                      }}/>
                    <p style={{ color: "red", fontSize: "14px", marginBottom:'15px'  }}>
                    {formErrors.business}
                    </p>
                    <input type="email" placeholder='Email'
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        });
                      }}/>
                    <p style={{ color: "red", fontSize: "14px", marginBottom:'15px'  }}>
                    {formErrors.email}
                    </p>
                    <input type="tel" placeholder='Phone number'
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        });
                      }}/>
                    <p style={{ color: "red", fontSize: "14px", marginBottom:'15px'  }}>
                    {formErrors.phone}
                    </p>
                    <button className='btn' style={{cursor:'pointer', backgroundColor:'lightblue'}} onClick={handleSubmit2}>Submit</button>

                  </div>



                </div>

           </section>
              
                

              

           
            
          </Modal>


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
                        <p>Thank You For Reaching Out. <br /> A member of our team will reach out to you within 48 hours. <br /> <b>We can't wait to have you onboard.</b></p>  
                        <button onClick={() => closeSuccess()} style={{cursor:'pointer'}}>OK</button>                      
                    </div>
                    
                </div>

                </div>
                
            </Modal>

        

        <Faq/>

        <Footer/>


    </div>
  )
}

export default Sponsors