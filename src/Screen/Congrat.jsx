import React from 'react';
import Navbar from '../ComponentsFolder/Navbar';
import celebrate from '../Images/work-hard-man-and-woman-in-good-mood-celebrating-a-holiday 1.png';
import Footer from '../ComponentsFolder/Footer';

const Congrat = () => {
  return (
    <div>
        <Navbar/>
        <div className='congrat'>
            <h3>Congratulations 🎉👏🎊 You have Successfully enrolled for this DSP 300 program</h3>
            <img src={celebrate} alt="Congratulations" />
            <p>Keep an eye on your Email address your would be notified once you are selected for the program</p>
            <button type="button">Spread the Good News</button>
        </div>

        <Footer/>
    </div>
  )
}

export default Congrat