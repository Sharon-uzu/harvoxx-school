import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Import Swiper styles

// Import Swiper modules
import { Autoplay, Navigation, Pagination, A11y } from 'swiper';
import slide1 from '../assets/logo-pix.jpeg'; // Make sure to use the correct path to your image

const Sponsors = () => {
  return (
    <div className='sponsor-logo'>
        <h3>Our Sponsors/Partners</h3>
        <div className="carousel-container">
            <Swiper
                modules={[Autoplay, Navigation, Pagination, A11y]}
                spaceBetween={3}
                slidesPerView={1} // Default number of slides to show
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    
                    800: {
                        slidesPerView: 4, // Number of slides to show on screens <= 640px
                    },
                    640: {
                        slidesPerView: 2, // Number of slides to show on screens <= 640px
                    },
                    440: {
                        slidesPerView: 1, // Number of slides to show on screens <= 640px
                    },
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <img src={slide1} alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} alt="Slide 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} alt="Slide 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} alt="Slide 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} alt="Slide 3" />
                </SwiperSlide>
                {/* Add more SwiperSlides here */}
            </Swiper>
        </div>
    </div>
  );
};

export default Sponsors;
