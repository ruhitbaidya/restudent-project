import { Link } from "react-router-dom";
import GetProduct from "../Layout/shared/GetProduct";

const ManageBook = () => {
  const [card] = GetProduct();
  console.log(card);
  return (
    <div>
      <div className="flex justify-end">
        <Link to="/dashboard/payment">
        <button className="border px-[30px] py-[12px]">Payment</button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Count</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {card.map((item, ind)=>{
              return <tr key={item._id}>
              <th>{ind + 1}</th>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBook;
