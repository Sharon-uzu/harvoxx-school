import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";


const Header = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    setDropdownOpen(!isDropdownOpen);
    document.body.style.overflow = click ? 'auto' : 'hidden'; // Disable or enable scrolling

  }

  const closeMenuBar = () => {
    setClick(false);
    document.body.style.overflow = 'auto'; // Enable scrolling

  };


  return (
    <div>
        <header>
            <nav>
                <Link to='/'><h2>PY<span>THONS</span> CAVE</h2></Link>

                <div className='bars' onClick={handleClick}>
                  {click ? (<RiCloseFill id='close' />) : (<FaBars id='bar' />)}
                </div>
                
                <ul className={click ? 'active' : 'ul'}>
                    <li><Link to='/python'>Pythons</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/sponsors'>Sponsors</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><Link to='/apply' className='applies'>Apply</Link></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header