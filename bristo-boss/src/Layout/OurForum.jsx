import { useEffect, useState } from "react"

const OurForum = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch("menu.json")
            .then((res) => res.json())
            .then((data) => {
                const filterdata = data.filter((item) => item.category === "popular");
                setMenu(filterdata)
            })
    }, [])
    console.log(menu)
    return (
        <>
            <div>
                <div className="grid grid-cols-2 gap-[25px] my-[50px]">
                    {
                        menu.map((item) => <div key={item._id} className="flex gap-[25px] items-center">
                            <div>
                                <img className="w-[120px]  rounded-b-[100px] rounded-tr-[100px]" src={item.image} alt="" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-[600]">{item.name}--------</h2>
                                <p>{item.recipe}</p>
                            </div>
                            <p className="text-[#BB8506]">
                                ${item.price}
                            </p>
                        </div>)
                    }
                </div>
                <div className="text-center my-[20px]">
                    <button className="px-[30px] py-[13px] rounded-lg border-b-2 border-gray-700">View Full  Menu</button>
                </div>
            </div>
        </>
    )
}

export default OurForum
