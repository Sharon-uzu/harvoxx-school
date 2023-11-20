import React, {useState} from 'react';
import enroll1 from '../Images/f12.jpeg';
import enroll2 from '../Images/m26.jpeg'
import {useNavigate, Link } from 'react-router-dom';
import Modal from "react-modal";


const Enroll = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const [pop, setPop] = useState(false);

  const handlePop = () =>{
    setPop(true)
  }

  const handleClose = () =>{
    setPop(false)
  }

  const openModal = () =>{
    setIsOpen(true);
  }

  const navigate = useNavigate();
  const apply = () => {
    navigate("/form");
  };

  return (
    <div>
        <section className='enroll' >
            <div className='txt'>
                <button type="button">{props.title}</button>
                <h2>{props.subtitle}</h2>
                <p>{props.para}</p>

                {props.type === "dsp100" ? <>
                <Link to={props.noLink} >
                  <button type="button" className='enrollment' onClick={handlePop}>{props.btn}</button>
                  </Link>
                </>
                :
                <>
                <Link 
                // to={props.reg}
                 >
                  </Link>
                  <button type="button" className='enrollment'  onClick={openModal}>{props.btn}</button>
                </>
                }


                
                  {props.type === "dsp100" ? <>
                    <div className={pop ?  'pops' : 'moren'}>
                      
                        <p>DSP-100 Cohort 3 Registration <br /> Commences April 2024. </p>
                        <button onClick={handleClose}>OK</button>
        
                      
                    </div>
              
              </> :
              null
              }
                

            </div>
            <div>
              {props.type === "dsp100" ? <>
              <img src={enroll1} alt="" />
              
              </> :<>
              <img src={enroll2} alt="" />
              </> }
                
            </div>
        </section>


        {/* MODAL */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Example Modal"
        className="two"
        style={{
          overlay: {
            position: "fixed",
            top: "0px",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 12,
            // backgroundColor: "hsl(0, 0%, 0%, .5)",
            backgroundColor: "hsl(0, 0%, 0%, .6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <div className="confirm">
          <h3>Hold on!!!</h3>
          <h4>Before you proceed, kindly note the following:</h4>
          
          <ol>
            <li> You must have a LAPTOP or have access to one.</li>
            <li> It is a 100% PHYSICAL training. Not online.</li>
            <li> Training will hold at least TWICE EVERY WEEK for 4 hours daily.</li>
          </ol>
          <p>Do You Still Want To Be Part Of This?</p>
          <button type="button" onClick={apply}>
            Proceed
          </button>
        </div>
      </Modal>


    </div>
  )
}

export default Enroll