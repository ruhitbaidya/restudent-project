import image1 from "../assets/menu/pizza-bg.jpg"
import image2 from "../assets/menu/salad-bg.jpg"
import image3 from "../assets/menu/soup-bg.jpg"

const Recomendation = () => {
    return (
        <div className="my-[80px]">
            <div className="grid grid-cols-3 gap-[25px]">
                <div className="card space-y-[20px]">
                    <div>
                        <img src={image1} alt=""/>
                    </div>
                    <div className="text-center px-[20px]">
                        <h2 className="text-2xl font-[600]">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="uppercase text-[#BB8506] border-b-2 border-[#BB8506] rounded-lg px-[20px] py-[10px] mt-[10px]">add to cart</button>
                    </div>
                </div>
                <div className="card space-y-[20px]">
                    <div>
                        <img src={image2} alt=""/>
                    </div>
                    <div className="text-center px-[20px]">
                        <h2 className="text-2xl font-[600]">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="uppercase text-[#BB8506] border-b-2 border-[#BB8506] rounded-lg px-[20px] py-[10px] mt-[10px]">add to cart</button>
                    </div>
                </div>
                <div className="card space-y-[20px]">
                    <div>
                        <img src={image3} alt=""/>
                    </div>
                    <div className="text-center px-[20px]">
                        <h2 className="text-2xl font-[600]">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="uppercase text-[#BB8506] border-b-2 border-[#BB8506] rounded-lg px-[20px] py-[10px] mt-[10px]">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recomendation
