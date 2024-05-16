import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../assets/home/01.jpg"
import image2 from "../assets/home/02.jpg"
import image3 from "../assets/home/03.png"
import image4 from "../assets/home/04.jpg"
import image5 from "../assets/home/05.png"
import image6 from "../assets/home/06.png"
import "./styleSlider.css"
const Slider = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div className="h-[480px]">
        <img className="h-full" src={image1} />
      </div>
      <div className="h-[480px]">
        <img className="h-full" src={image2} />
      </div>
      <div className="h-[480px]">
        <img className="h-full" src={image3} />
      </div>
      <div className="h-[480px]">
        <img className="h-full" src={image4} />
      </div>
      <div className="h-[480px]">
        <img className="h-full" src={image5} />
      </div>
      <div className="h-[480px]">
        <img className="h-full" src={image6} />
      </div>
    </Carousel>
  );
};

export default Slider;
