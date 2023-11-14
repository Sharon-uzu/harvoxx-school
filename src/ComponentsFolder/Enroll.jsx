import React from 'react';
import enroll1 from '../Images/dsp100.jpg';
import enroll2 from '../Images/homi 1.png'
import { Link } from 'react-router-dom';

const Enroll = (props) => {
  return (
    <div>
        <section className='enroll'>
            <div>
                <button type="button">{props.title}</button>
                <h2>{props.subtitle}</h2>
                <p>{props.para}</p>
                <Link to={props.reg} ><button type="button" className='enrollment' >{props.btn}</button></Link>

            </div>
            <div>
              {props.type === "dsp100" ? <>
              <img src={enroll1} alt="" />
              </> :<>
              <img src={enroll2} alt="" />
              </> }
                
            </div>
        </section>
    </div>
  )
}

export default Enroll