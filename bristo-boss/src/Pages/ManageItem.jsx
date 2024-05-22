
import GetProduct from "../Layout/shared/GetProduct";
import Datafetch from "../Layout/shared/Datafetch";

const ManageItem = () => {
    const fetchdata = Datafetch();
  const [card] = GetProduct();
  console.log(card)
  const handelDelete = (id)=>{
      fetchdata.post(`/deleteCardItem`, {id : id})
      .then((res)=> console.log(res.data) )
  }


  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Number</th>
              <th>Product</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
                {
                    card.map((item, ind)=>{
                        return  <tr key={item._id}>
                        <th>{ind + 1 }</th>
                        <td>{item.category}</td>
                        <td>{item.price}</td>
                        <td>
                            <button onClick={()=> handelDelete(item._id)} className="bg-red-400 text-white py-[12px] px-[20px]">Delete</button>
                        </td>
                      </tr>
                    })
                }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItem;
