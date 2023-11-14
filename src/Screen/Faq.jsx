import React from 'react';
import { Faqs } from '../utils/Data';
import Footer from '../ComponentsFolder/Footer';
import Navbar from '../ComponentsFolder/Navbar';


const Faq = () => {
  return (
    <div>
        <Navbar/>
        <section className='faq-heading'>
            <h1>You have got questions?</h1> <h1>we have got answers!</h1>
            <p>AltSchool Africa helps you learn the skills you need to build and grow the career you want.</p>
        </section>

        <section className='questions'>
            {
                Faqs && Faqs.map(item =>(
                    <div key={item.id}>
                        <h3>{item.text}</h3>
                        <p>{item.paragraph}</p>
                    </div>
                ))
            }
            
        </section>

        <Footer/>
        
    </div>
  )
}

export default Faq