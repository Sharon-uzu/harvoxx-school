import React, {useState} from 'react';
import '../App.css';
import DropdownMenu from './DropdownMenu';
import logo from '../Images/harvoxx.png';
import {MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaBars} from "react-icons/fa";
import { RiCloseFill} from "react-icons/ri";



const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    document.body.classList.toggle('no-scroll', !click);

  }
  const [activeNav, setActiveNav] = useState('/')


    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className='navbar'>
        <nav>
            <div className='logo'><img src={logo} alt="" /></div>

            <div className='bars' onClick={handleClick}>
              {click ? (<RiCloseFill id='close'/>) : (<FaBars id='bar' />)}
            </div>

            <ul className={click ? 'menu active' : 'menu'}>
                <Link to='/'><li>Home</li></Link>
                {/* <div className="dropdown"> */}
                {/* <li onClick={toggleDropdown} className="dropbtn">Program <MdKeyboardArrowDown/></li> */}
                {/* {isDropdownOpen && <DropdownMenu />} */}
                {/* </div> */}
                {/* <a href='https://harvoxx.com'><li> Harvoxx School</li></a> */}
                {/* <li>News</li> */}

                <Link to='/DSP300'><li>DSP-300</li></Link>

                <Link to='/dsp100'><li>DSP-100</li></Link>
                <a href='https://harvoxx.com'><li>Paid Training</li></a>
                <a href='#contact'><li>Contact Us</li></a>

            </ul>


            

        </nav>
        <div className={click ? 'cover' : 'cover active'}></div>

        
    </div>
  )
}

export default Navbar