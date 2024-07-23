import React, { useEffect }  from 'react'
import { Link } from 'react-router-dom';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import vector from '../assets/Vector 2.png'
import number from '../assets/Group 74.png'
import { useLocation } from 'react-router-dom';

const Steps = () => {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto'; // Enable scrolling
  
    }, [pathname]);
    

  return (
    <div className='guide'>
        <div className='python-cave'>
        <div className="arrow-back">
            <Link to='/'><IoArrowBackCircleOutline className='py-i'/></Link>

        </div>

        <div className="title">
            <h3>Your Guidelines</h3>
            <img src={vector} alt="" />
        </div>

            {/* <img src={number} alt="" /> */}
            <div className="steps">
                <div className='pts'>
                    <p><span>1</span></p>
                    <div>
                        <h4>Registration</h4>
                    </div>
                    
                </div>

                <div className='pts'>
                    <p><span>2</span></p>
                    <div>
                        <h4>Selections through Emails</h4>
                    </div>
                    
                </div>

                <div className='pts'>
                    <p><span>3</span></p>
                    <div>
                        <h4>Invitation for Audition</h4>
                    </div>
                    
                </div>

                <div className='pts'>
                    <p><span>4</span></p>
                    <div>
                        <h4>Auditioning</h4>
                    </div>
                    
                </div>

                <div className='pts'>
                    <p><span>5</span></p>
                    <div>
                        <h4>Participation of Pythons Cave (Grand Finale)</h4>
                    </div>
                    
                </div>
            </div>
    </div>
    </div>
  )
}

export default Steps