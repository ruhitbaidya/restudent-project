import HeadingSection from "./shared/HeadingSection";
import images1 from "../assets/home/featured.jpg"

const OurMenu = () => {
    return (
        <div className="bg-images-add my-[80px] bg-fixed">
            <div className="bg-colos-add py-[100px]">
                <div>
                    <div>
                        <HeadingSection styles="200" subtitle="Check it out" heading="FROM OUR MENU" />
                    </div>
                    <div className="grid grid-cols-2 gap-[30px] items-center p-[50px]">
                        <div className="flex justify-center items-center">
                            <img className="rounded-lg" src={images1} alt="" />
                        </div>
                        <div className="text-white">
                            <p>March 20, 2023</p>
                            <p>WHERE CAN I GET SOME?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <button className="mt-[24px] px-[35px] py-[14px] border-b-2 rounded-lg">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurMenu
