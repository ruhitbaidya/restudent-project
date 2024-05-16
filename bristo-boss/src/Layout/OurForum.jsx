
const OurForum = ({menu, buttons}) => {
    return (
        <>
            <div>
                <div className="grid grid-cols-2 gap-[25px] my-[50px]">
                    {
                        menu.map((item) => <div key={item._id} className="flex justify-between gap-[25px] items-center">
                            <div className="w-[20%]">
                                <img className="w-[150px]  rounded-b-[100px] rounded-tr-[100px]" src={item.image} alt="" />
                            </div>
                            <div className="w-[50%]">
                                <h2 className="text-3xl font-[600]">{item.name}---</h2>
                                <p>{item.recipe}</p>
                            </div>
                            <p className="text-[#BB8506] w-[30%]">
                                ${item.price}
                            </p>
                        </div>)
                    }
                </div>
                <div className="text-center my-[20px]">
                    {buttons && <button className="px-[30px] py-[13px] rounded-lg border-b-2 border-gray-700">{buttons}</button>}
                </div>
            </div>
        </>
    )
}

export default OurForum