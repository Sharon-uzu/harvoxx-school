import React, { useEffect }  from 'react'
import Header from '../Components/Header'
import img1 from '../assets/inn.png'
import img2 from '../assets/pitch.png'
import img3 from '../assets/conq.png'
import vector from '../assets/Vector 2.png'
import ab from '../assets/abb2.jpeg';
import w1 from '../assets/w1.png'
import w2 from '../assets/w2.png'
import w3 from '../assets/w3.png'
import w4 from '../assets/w4.png'
import ec from '../assets/Ellipse 1.png'
import v1 from '../assets/v1.png'
import v2 from '../assets/v2.png'
import v3 from '../assets/v3.png'
import v4 from '../assets/v4.png'
import Faq from '../Components/Faq'
import Footer from '../Components/Footer'
import { useLocation } from 'react-router-dom';
import Sponsors from '../Components/Sponsors'
import { Link } from 'react-router-dom'



const Home = () => {

  const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto'; // Enable scrolling
  
    }, [pathname]);
    

  return (
    <div>
        <Header/>

        <div className="hero">
          <div className="dk"></div>
          <section className='hero-c'>
            <div>
              <h2>The Ultimate Arena Where Innovation Meets Opportunities. </h2>
              <ul>
                <li><p>Pitch Your Tech Business</p></li>
                <li><p>Get Funding.</p></li>
                <li><p>Get Feedbacks.</p> </li>
                <li><p>Get Visibility.</p></li>
              </ul>
              <p>All Of These in One Show</p>
              {/* <Link to='/about'><button>Learn more</button></Link> */}

            </div>


          </section>
        </div>

        <div className="rate">

          <div className='one'>
            <h3>20M+</h3>
            <p>Views</p>
          </div>

          <div className='one'>
            <h3>50+</h3>
            <p>Investors</p>
          </div>

          <div className='one'>
            <h3>1000+</h3>
            <p>Startups</p>
          </div>

          {/* <div className='one'>
            <h3>2000+</h3>
            <p>Investors</p>
          </div> */}

          <div className='one'>
            <h3>10+</h3>
            <p>States</p>
          </div>

          <div className='one'>
            <h3>20+</h3>
            <p>Finalists</p>
          </div>


        </div>


        <div className="innovate">

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


        <div className="abt-m">

          <div className="about-h">

            <div className="title">
              <h3>About Python</h3>
              <img src={vector} alt="" />
            </div>

            <div className="ab2">
              <p><b style={{color:'#D8783E'}}>PYTHON's CAVE: A Reality Show For Tech Entrepreneur And Founders</b><br />Pythons Cave is the ultimate reality show where tech entrepreneurs and founders present their innovative products and business ideas to a panel of wealthy investors, known as "The Pythons," in hopes of securing investment funding. </p>
              <Link to='/about'><button>Learn more</button></Link>
              {/* <p>Not only is it a platform for securing funding, but it's also an educational show that provides viewers with valuable insights into what makes a successful business and what investors look for. Additionally, Pythons Cave helps startups gain visibility in the Marketplace.</p> */}
            </div>

            <div className="ab2">
              <img src={ab} alt="" />
            </div>

            {/* <div className="read">
              <a href="#"><button>Read more</button></a>
            </div> */}


          </div>
        </div>


        <div className="why">

          <div className="w-l">
            <div className="ww">
              <h3>Why <span>Python?</span></h3>
            </div>
            <img src={ec} alt="" />
          </div>

          <div className="w-r">

            <div className="w-c">
              <div className="w-cc">
                <img src={w1} alt="" />
                <div>
                  <h4>Discover Startups</h4>
                  <p>Uncover the next wave of groundbreaking startups and innovative solutions. Python's Cave is your gateway to discovering visionary entrepreneurs with ideas poised to transform industries and drive progress.</p>
                </div>
              </div>
            </div>

            <div className="w-c">
              <div className="w-cc">
                <img src={w2} alt="" />
                <div>
                  <h4>Get Investment Funding</h4>
                  <p>Secure the funding you need to take your startup to the next level. At Python's Cave, connect with wealthy investors ready to support high-potential startups, turning your vision into reality.</p>
                </div>
              </div>
            </div>


            <div className="w-c">

              <div className="w-cc">
                <img src={w3} alt="" />
                <div>
                  <h4>Enhance Visibility</h4>
                  <p>Gain unparalleled exposure for your startup. Python's Cave provides a platform where your business can shine, attracting attention from investors, industry leaders, and potential customers, propelling your brand into the spotlight.</p>
                </div>
              </div>
              
            </div>


            <div className="w-c">
              <div className="w-cc">
                <img src={w4} alt="" />
                <div>
                  <h4>Encourage Innovation</h4>
                  <p>Foster a culture of innovation and creativity. Python's Cave champions the development of cutting-edge technologies and solutions, inspiring entrepreneurs to push the boundaries and revolutionize their fields.</p>
                </div>
              </div>
            </div>

          </div>

          

        </div>


        <div className="about-h works">

          <div className="title">
            <h3>How It Works</h3>
            <img src={vector} alt="" />
          </div>

          <div className="how">
            <img src={v1} alt="" />
            <div>
              <h1>1</h1>
              <h5>Step 1</h5>
              <h3>Application Process </h3>
            </div>
            
          </div>

          
          <div className="how">
            <img src={v2} alt="" />
            <div>
              <h1>2</h1>
              <h5>Step 2</h5>
              <h3>Auditioning Process </h3>
            </div>
            
          </div>

          <div className="how">
            <img src={v3} alt="" />
            <div>
              <h1>3</h1>
              <h5>Step 3</h5>
              <h3>Final Day Participation</h3>
            </div>
            
          </div>
          
          <div className="how">
            <img src={v4} alt="" />
            <div>
              <h1>4</h1>
              <h5>Step 4</h5>
              <h3>The Deal </h3>
              <br />
            </div>
            
          </div>

        </div>


        <div className="about-h editions">

          <div className="title">
            <h3>Season One Schedule</h3>
            <img src={vector} alt="" />
          </div>

          <div className="edition">
            <h2>Registration</h2>
            <h3>29th July, 2024 - 29th September, 2024</h3>
          </div>


          <div className="edition">
            <h2>Audition - Day 1</h2>
            <h3>17th October, 2024</h3>
          </div>

          <div className="edition">
            <h2>Audition - Day 2</h2>
            <h3>18th October, 2024</h3>
          </div>

          <div className="edition">
            <h2>Audition - Day 3</h2>
            <h3>19th October, 2024</h3>
          </div>

          <div className="edition">
            <h2>Pythons Cave</h2>
            <h3>15th November, 2024</h3>
          </div>

        </div>
        {/* <Sponsors/> */}

        <Faq/>

        <Footer/>



    </div>
  )
}

export default Home