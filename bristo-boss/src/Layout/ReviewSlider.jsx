import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import images1 from "../assets/home/Group.png"
const ReviewSlider = () => {
    const [Ccount, setCcount] = useState(0)
    const ratingChanged = () => {

    }
    return (
       <div className="my-[50px]">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
                <div className="space-y-[20px]">
                    <div className="flex justify-center items-center">
                        <div>
                            <ReactStars
                                count={5}
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
                        <p>Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <h4 className="text-[#CD9003]">JANE DOE</h4>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide><div className="space-y-[20px]">
                    <div className="flex justify-center items-center">
                        <div>
                            <ReactStars
                                count={5}
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
                        <p>Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <h4 className="text-[#CD9003]">JANE DOE</h4>
                    </div>
                </div></SwiperSlide>
            <SwiperSlide><div className="space-y-[20px]">
                    <div className="flex justify-center items-center">
                        <div>
                            <ReactStars
                                count={5}
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
                        <p>Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <h4 className="text-[#CD9003]">JANE DOE</h4>
                    </div>
                </div></SwiperSlide>
            <SwiperSlide><div className="space-y-[20px]">
                    <div className="flex justify-center items-center">
                        <div>
                            <ReactStars
                                count={5}
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
                        <p>Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <h4 className="text-[#CD9003]">JANE DOE</h4>
                    </div>
                </div></SwiperSlide>

        </Swiper>
       </div>
    )
}

export default ReviewSlider
