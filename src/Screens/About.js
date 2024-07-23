import React, { useEffect }  from 'react'
import vector from '../assets/Vector 2.png'
import Header from '../Components/Header'
import ab from '../assets/abb2.jpeg';
import img1 from '../assets/inn.png'
import img2 from '../assets/pitch.png'
import img3 from '../assets/conq.png'
import mission from '../assets/mission.png'
import vission from '../assets/Vision.png'
import { Link } from 'react-router-dom'
import c1 from '../assets/Group.png'
import c2 from '../assets/bow.png'
import c3 from '../assets/check.png'
import c4 from '../assets/light.png'
import Faq from '../Components/Faq'
import Footer from '../Components/Footer'
import { useLocation } from 'react-router-dom';




const About = () => {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto'; // Enable scrolling
  
    }, [pathname]);
    


  return (
    <div>
        <Header/>
        <div className="abt-m">

            <div className="about-h">

                <div className="title">
                    <h3>About Pythons Cave</h3>
                    <img src={vector} alt="" />
                </div>

                <div className="ab2">
                <p><b style={{color:' #D8783E'}}>PYTHON's CAVE: A Reality Show For Tech Entrepreneur And Founders</b><br />Pythons Cave is the ultimate reality show where tech entrepreneurs and founders present their innovative products and business ideas to a panel of wealthy investors, known as "The Pythons," in hopes of securing investment funding. </p>
              <p>Not only is it a platform for securing funding, but it's also an educational show that provides viewers with valuable insights into what makes a successful business and what investors look for. Additionally, Pythons Cave helps startups gain visibility in the Marketplace.</p>
            </div>

                <div className="ab2">
                    <img src={ab} alt="" />
                </div>

                {/* <div className="read">
                    <a href="#"><button>Read more</button></a>
                </div> */}


            </div>
        </div>



        <div className="innovate">

            <div className="title">
              <h3>Our Services</h3>
              <img src={vector} alt="" />
            </div>

            <div className="in-c">

                <div className="img">
                    <img src={img1} alt="" />
                </div>

                <h4>Innovate</h4>

                <p>Ground-Breaking startups spark transformative change, driving progress and fueling economic growth with innovative solutions. Your Innovation is valid.</p>

            </div>


            <div className="in-c">

                <div className="img">
                    <img src={img2} alt="" />
                </div>

                <h4>Pitch</h4>

                <p>Python's Cave bridges visionaries and investors, turning brilliant ideas into funded realities by giving you and other founders the opportunities to pitch your business to investors.</p>

            </div>



            <div className="in-c">

                <div className="img">
                    <img src={img3} alt="" />
                </div>

                <h4>Conquer</h4>

                <p>With expert guidance, visibility, and investment, your startup will thrive and dominate the market. Pythons Cave could launch you to dominance.</p>

                </div>


            </div>

            <div className="mission">
                <div className="m-l">
                    <img src={mission} alt="" />
                </div>

                <div className="m-r">
                    <div className="title">
                        <h3>Our Mission</h3>
                        <img src={vector} alt="" />
                    </div>
                    <p>At Pythons Cave, our mission is to empower innovators and entrepreneurs by providing them with a dynamic platform to showcase their ideas to potential investors. </p>
                    {/* <Link><button>Contact Us</button></Link> */}
                </div>
            </div>

            <div className="mission vission">

                <div className="m-r">
                    <div className="title">
                        <h3>Our Vission</h3>
                        <img src={vector} alt="" />
                    </div>
                    <p>Our vision at Pythons Cave is to be the leading catalyst for innovation, fostering a vibrant community where groundbreaking ideas thrive and transformative ventures are born. </p>
                    {/* <Link><button>Contact Us</button></Link> */}
                </div>

                <div className="m-l">
                    <img src={vission} alt="" />
                </div>

            </div>

            <div className="values">
                <div className="title">
                    <h3>Our Core Values</h3>
                    <img src={vector} alt="" />
                </div>

                <div className="val">
                    <img src={c1} alt="" />
                    <h4>Collaboration</h4>
                    <p>We foster a culture of collaboration, recognizing that the best outcomes are achieved through diverse perspectives and teamwork</p>
                </div>

                <div className="val">
                    <img src={c2} alt="" />
                    <h4>Excellence</h4>
                    <p>We strive for excellence in everything we do, constantly raising the bar to deliver exceptional value to our community.</p>
                </div>

                <div className="val">
                    <img src={c3} alt="" />
                    <h4>Integrity</h4>
                    <p>We uphold the highest standards of ethics and transparency in all our interactions and operations throughout the process.</p>
                </div>

                <div className="val">
                    <img src={c4} alt="" />
                    <h4>Innovation</h4>
                    <p>We believe in the power of bold ideas to drive progress and shape the future of industries.</p>
                </div>


            </div>

            <Faq/>

            <Footer/>

    </div>
  )
}

export default About