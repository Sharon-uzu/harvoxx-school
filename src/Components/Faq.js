import React, { useState } from 'react';
import vector from '../assets/Vector 2.png';
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { Link } from 'react-router-dom';

const Faq = () => {

  const Faqs = [
    {
      id: 1,
      ques: "What is Pythons Cave?",
      answer: "Python's Cave is a reality show where tech entrepreneurs and founders pitch their products and business ideas to a panel of wealthy investors, known as 'The Pythons,' to secure investment funding. Not only is it a platform for securing funding, but it's also an educational show that provides viewers with valuable insights into what makes a successful business and what investors look for. Additionally, Pythons Cave helps startups gain visibility in the Marketplace."
    },
    {
      id: 2,
      ques: "Who can apply to Python's Cave?",
      answer: "Tech entrepreneurs, startup founders, developers, innovators, tech hubs, venture studios, and tech enthusiasts from the South-South and South-East states of Nigeria are eligible to apply."
    },
    {
      id: 3,
      ques: "What kind of products are eligible for Python's Cave?",
      answer: "Products eligible include a fully developed MVP, a product about to launch, or a product already in the market."
    },
    {
      id: 4,
      ques: "What are the key dates for Python's Cave Season 1?",
      answer: "Auditioning will be held from October 17th to 19th, and selected startups will pitch to the investors on October 15th."
    },
    {
      id: 5,
      ques: "What can participants expect during the auditioning days?",
      answer: "Activities include registration, orientation, interview sessions, meeting sponsors, networking, submitting pitch decks, business summits, group interactions, pitching sessions, games, and a tour of tech hubs."
    },
    {
      id: 6,
      ques: "What are the benefits of participating in Python's Cave?",
      answer: "Participants can secure investment funding, receive invaluable feedback and mentorship, gain increased visibility, and connect with industry leaders and fellow entrepreneurs."
    },
    {
      id: 7,
      ques: "Can I attend Python's Cave events as an audience member?",
      answer: "Yes, the events are open to the public, providing an educational experience for viewers to learn about successful business practices and investor expectations."
    },
    {
      id: 8,
      ques: "How can sponsors get involved with Python's Cave?",
      answer: "Interested sponsors can choose from Gold, Silver, and Bronze sponsorship categories to support Python's Cave. Contact us via ",
      links:'sponsors.'
    }
  ];

  const [open, setOpen] = useState(Array(Faqs.length).fill(false));

  const toggleAnswer = (index) => {
    setOpen(open.map((item, i) => (i === index ? !item : item)));
  };

  return (
    <div className='about-h editions faqs'>
      <div className="title">
        <h3>Frequently Asked Questions</h3>
        <img src={vector} alt="Vector" />
      </div>
      
      <div className='w-r'>
        {Faqs.map((item, index) => (
          <div className="ques" key={item.id}>
            <div onClick={() => toggleAnswer(index)}>
              {open[index] ? (
                <IoIosArrowDropup className='arr-icon' />
              ) : (
                <IoIosArrowDropdown className='arr-icon' />
              )}
            </div>
            <div>
              <h4>{item.ques}</h4>
              {open[index] && <p>{item.answer}<Link to='/sponsors' style={{color:'#fff'}}>{item.links}</Link></p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
