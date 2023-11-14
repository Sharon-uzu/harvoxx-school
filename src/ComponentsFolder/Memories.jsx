import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import f1 from '../Images/f1.jpeg'
import f2 from '../Images/f2.jpeg'
import f3 from '../Images/f3.jpeg'
import f4 from '../Images/f4.jpeg'
import f5 from '../Images/f5.jpeg'
import f6 from '../Images/f6.jpeg'
import f7 from '../Images/f7.jpeg'
import f8 from '../Images/f8.jpeg'
import f9 from '../Images/f9.jpeg'
import f10 from '../Images/f10.jpeg'
import f11 from '../Images/f11.jpeg'
import f12 from '../Images/f12.jpeg'
import m1 from '../Images/m1.jpeg'
import m2 from '../Images/m2.jpeg'
import m3 from '../Images/m3.jpeg'
import m4 from '../Images/m4.jpeg'
import m5 from '../Images/m5.jpeg'
import m6 from '../Images/m6.jpeg'
import m7 from '../Images/m7.jpeg'
import m8 from '../Images/homi 1.png'
import m9 from '../Images/m9.jpeg'
import m10 from '../Images/m10.jpeg'
import m11 from '../Images/m11.jpeg'
import m12 from '../Images/m12.jpeg'
import m13 from '../Images/m13.jpeg'
import m14 from '../Images/m14.jpeg'
import m15 from '../Images/m15.jpeg'
import m16 from '../Images/m16.jpeg'
import m17 from '../Images/m17.jpeg'
import m18 from '../Images/m18.jpeg'
import m19 from '../Images/m19.jpeg'
import m20 from '../Images/m20.jpeg'
import m21 from '../Images/m21.jpeg'
import m22 from '../Images/m22.jpeg'
import m23 from '../Images/m24.jpeg'







const Memories = (props) => {

  const [complete, setComplete] = useState(false);
  const [see, setSee] = useState(true)

  const handleClick = () => {
    setComplete(true);
    setSee(false)
  }

  return (
    <div className='memories'>
        <h1>Memories from Previous Program </h1>     
        
        {props.type === "dsp100" ? <>
        <div className='gallery'>
          
            <img src={f1} alt="" />
            <img src={f2} alt="" />
            <img src={f3} alt="" />
            <img src={f4} alt="" />
            <img src={f5} alt="" />
            <img src={f6} alt="" />

            {
          see ? (
            <p onClick={handleClick}>See more</p>
          ) : null
        }


            {complete ?
              (
              <>
              
              <img src={f7} alt="" />
              <img src={f8} alt="" />
              <img src={f9} alt="" />
              <img src={f10} alt="" />
              <img src={f11} alt="" />
              <img src={f12} alt="" />
              </>
              ) : null
              
            }  
            
         

        </div>
        </> :
        <>
        <>
        <div className='gallery'>
          
            <img src={m1} alt="" />
            <img src={m2} alt="" />
            <img src={m3} alt="" />
            <img src={m4} alt="" />
            <img src={m5} alt="" />
            <img src={m6} alt="" />

            {
          see ? (
            <p onClick={handleClick}>See more</p>
          ) : null
        }


            {complete ?
              (
              <>
              
              <img src={m7} alt="" />
              <img src={m8} alt="" />
              <img src={m7} alt="" />
              <img src={m8} alt="" />
              <img src={m9} alt="" />
              <img src={m10} alt="" />
              <img src={m11} alt="" />
              <img src={m12} alt="" />
              <img src={m14} alt="" />
              <img src={m15} alt="" />
              <img src={m16} alt="" />
              <img src={m17} alt="" />
              <img src={m18} alt="" />
              <img src={m19} alt="" />
              <img src={m20} alt="" />
              <img src={m21} alt="" />
              <img src={m22} alt="" />
              <img src={m23} alt="" />

              </>
              ) : null
              
            }  
            
         

        </div>
        </> 
        </> }

    <Link to='/form'><button type="button" className='enrollment'>Enroll Now</button></Link>


    </div>
  )
}

export default Memories