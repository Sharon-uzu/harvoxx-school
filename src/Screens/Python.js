import React, {useState, useEffect} from 'react'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import vector from '../assets/Vector 2.png'
import python from '../assets/sil1.webp'
import python1 from '../assets/sil2.jpeg'
import python2 from '../assets/sil3.jpeg'
import python3 from '../assets/sil4.png'
import python4 from '../assets/sil5.png'
import { Link } from 'react-router-dom';
import Modal from "react-modal";
import { useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import {IoMdMegaphone} from 'react-icons/io'
import image from '../assets/Web banner.jpg'


const Python = () => {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto'; // Enable scrolling
  
    }, [pathname]);
    


    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };

    function open(){
        setIsModalOpen(true);
    }

    function close(){
        setIsModalOpen(false);
    }

    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const toggleModal2 = () => {
      setIsModalOpen2(!isModalOpen2);
    };

    function open2(){
        setIsModalOpen2(true);
    }

    function close2(){
        setIsModalOpen2(false);
    }


  return (
    <>

<Header/>

        <div className="hero pyt">
        <img src={image} alt="" />
        </div>

        <div className="rate">

          <div className='one'>
            <h3>5</h3>
            <p>Pythons</p>
          </div>

          <div className='one'>
            <h3>$50k+</h3>
            <p>Investments</p>
          </div>

          <div className='one'>
            <h3>20+</h3>
            <p>Startups</p>
          </div>

          <div className='one'>
            <h3>20+</h3>
            <p>Pitch Sessions</p>
          </div>

          <div className='one'>
            <h3>100+</h3>
            <p>Mentorship Hours</p>
          </div>


        </div>

        <div className='python-cave'>
            {/* <div className="arrow-back">
                <Link to='/'><IoArrowBackCircleOutline className='py-i'/></Link>

            </div> */}

            <div className="title">
                <h3>Meet The Pythons</h3>
                <img src={vector} alt="" />
            </div>


            <div className="python-s">

                <div className="python">
                    <div>
                        <img src={python} alt="" />
                        {/* <h3>Engr.Dr Francis Odowuwa</h3>
                        <h5>(CEO Investment Funds)</h5> */}
                        <button onClick={open2}>See More</button>
                    </div>
                </div>

                <div className="python">
                    <div>
                        <img src={python4} alt="" />
                        {/* <h3>Engr.Dr Francis Odowuwa</h3>
                        <h5>(CEO Investment Funds)</h5> */}
                        <button onClick={open2}>See More</button>
                    </div>
                </div>

                <div className="python">
                    <div>
                        <img src={python1} alt="" />
                        {/* <h3>Engr.Dr Francis Odowuwa</h3>
                        <h5>(CEO Investment Funds)</h5> */}
                        <button onClick={open2}>See More</button>
                    </div>
                </div>

                <div className="python">
                    <div>
                        <img src={python2} alt="" />
                        {/* <h3>Engr.Dr Francis Odowuwa</h3>
                        <h5>(CEO Investment Funds)</h5> */}
                        <button onClick={open2}>See More</button>
                    </div>
                </div>

                <div className="python">
                    <div>
                        <img src={python3} alt="" />
                        {/* <h3>Engr.Dr Francis Odowuwa</h3>
                        <h5>(CEO Investment Funds)</h5> */}
                        <button onClick={open2}>See More</button>
                    </div>
                </div>

                

            </div>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={toggleModal}
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
                <div className='modal1-content'>
                    <div className='close'>
                    <button onClick={() => close()} style={{cursor:'pointer'}}>X</button>
                    </div>

                    <div className="details">
                        <div className="left">
                            <h3>Personal Profile</h3>
                            <img src={python} alt="" />
                            <h2>Engr.Dr Francis Odowuwa</h2>
                            <p>(CEO Investment Funds)</p>

                        </div>
                        <div className="right">
                            <p>Lorem ipsum dolor sit amet consectetur. Massa pulvinar commodo tellus aliquam. Nulla rutrum dignissim orci dapibus pellentesque pellentesque nisi. Interdum ultricies posuere vel accumsan montes proin porttitor. Enim convallis scelerisque elit nulla sem aliquet at vel. Sed egestas vestibulum neque sit mi quis. Sit scelerisque nec non tempus felis volutpat lorem. Fermentum magna id morbi sed velit et sed egestas. Nunc id morbi hac neque morbi ornare. Ut ac hac ultrices fermentum. Faucibus aliquam diam tempus dictum. Gravida ut integer amet semper. Suspendisse at pellentesque cursus cras quisque libero. Volutpat consectetur odio tortor feugiat et dui libero diam mattis. Mattis interdum in facilisis arcu purus vitae. Mi dui integer tellus sit at viverra adipiscing nunc leo. Consectetur ipsum egestas tincidunt tellus mattis sit dignissim auctor nisi. A suspendisse ipsum eu non purus turpis. Viverra purus egestas tincidunt elit nibh tincidunt pharetra amet.</p>
                        </div>
                    </div>
                    

                </div>

                </div>
                
            </Modal>

            

                {/* INFO */}


            <Modal
                isOpen={isModalOpen2}
                onRequestClose={toggleModal2}
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
                        <IoMdMegaphone className='trum'/>
                        <p>Pythons will be revealed on October 20th, 2024.</p>  
                        <button onClick={() => close2()} style={{cursor:'pointer'}}>OK</button>                      
                    </div>
                    
                </div>

                </div>
                
            </Modal>

        </div>

    <Footer/>

    </>
  )
}

export default Python