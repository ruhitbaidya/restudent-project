import { ToastContainer, toast } from "react-toastify";
import Datafetch from "./Datafetch";
import GetProduct from "./GetProduct";
const OurShop = ({ datas }) => {
  const [, refetch] = GetProduct();
  const fetchdata = Datafetch();
  const handelDataFetch = (item) => {
    fetchdata.post("/cards", item).then((res) => {
      if (res.data) {
        console.log(res.data)
        toast.success("card add successfull");
        refetch();
      }
    });
  };
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] my-[50px]">
        {datas.map((item) => (
          <div key={item._id} className="card space-y-[20px]">
            <div>
              <img src={item.image} alt="" />
            </div>
            <div className="text-center px-[20px]">
              <h2 className="text-2xl font-[600]">{item.name}</h2>
              <p>{item.recipe}</p>
              <button
                onClick={() => handelDataFetch(item)}
                className="uppercase text-[#BB8506] border-b-2 border-[#BB8506] rounded-lg px-[20px] py-[10px] mt-[10px]"
              >
                add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </>
  );
};

export default OurShop;
