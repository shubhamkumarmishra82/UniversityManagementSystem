import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/autoplay"
import "../assets/BreadCrum.css"


export default function BreadCrum() {
  return (
    <Swiper
      modules={[Autoplay]}          
      slidesPerView={1}             
      loop={true}                   
      autoplay={{
        delay: 2500,                
        disableOnInteraction: false 
      }}
      style={{ width: "100%", height: "500px" }} 
    >
      <SwiperSlide>
        <div className="slide-container">
          <img src="/Images/image.png" className="slide-image" alt="Slide 1" />
          <div className="slide-text">Aravali College Of Engineering and Management</div>
        </div>
      </SwiperSlide>
     <SwiperSlide>
        <div className="slide-container">
          <img src="/Images/image5.png" className="slide-image" alt="Slide 5" />
             <div className="slide-text">Aravali College Of Engineering and Management</div>
        </div>
      </SwiperSlide>
           <SwiperSlide>
        <div className="slide-container">
          <img src="/Images/image2.png" className="slide-image" alt="Slide 5" />
             <div className="slide-text">Aravali College Of Engineering and Management</div>
        </div>
      </SwiperSlide>
           <SwiperSlide>
        <div className="slide-container">
          <img src="/Images/image4.png" className="slide-image" alt="Slide 5" />
             <div className="slide-text">Aravali College Of Engineering and Management</div>
        </div>
      </SwiperSlide>
           <SwiperSlide>
        <div className="slide-container">
          <img src="/Images/image6.png" className="slide-image" alt="Slide 5" />
             <div className="slide-text">Aravali College Of Engineering and Management</div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
