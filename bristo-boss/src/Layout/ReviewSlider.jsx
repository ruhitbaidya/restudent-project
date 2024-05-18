import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ReactStars from "react-rating-stars-component";
import { useState, useEffect } from 'react';
import images1 from "../assets/home/Group.png"
const ReviewSlider = () => {
    const [Ccount, setCcount] = useState(0);
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then((res) => res.json())
            .then((data) => setReview(data))
    }, [])
    const ratingChanged = () => {

    }
    return (
        <div className="my-[50px]">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {
                review.map((item)=>{
                    return <SwiperSlide key={item._id}>
                    <div className="space-y-[20px]">
                        <div className="flex justify-center items-center">
                            <div>
                                <ReactStars
                                    count={item.rating}
                                    onChange={ratingChanged}
                                    size={24}
                                    activeColor="#ffd700"
                                />
                                <div>
                                    <img src={images1} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="px-[120px] text-center space-y-[20px]">
                            <p>{item.details}</p>
                            <h4 className="text-[#CD9003]">{item.name}</h4>
                        </div>
                    </div>
                </SwiperSlide>
                })
            }    

            </Swiper>
        </div>
    )
}

export default ReviewSlider
