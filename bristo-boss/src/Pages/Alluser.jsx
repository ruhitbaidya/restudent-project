import { useEffect, useState } from "react";
import { RiAdminFill } from "react-icons/ri";
import SecureData from "../Layout/shared/SecureData";

const Alluser = () => {
  const [card, setCard] = useState([]);
  const axiosSecure = SecureData();
    useEffect(()=>{
      axiosSecure.get("/userGet")
        .then((res)=> setCard(res.data))
    }, [axiosSecure])
    
    const handelPremission = (id)=>{
      axiosSecure.get(`/adminpremission/${id}`)
      .then((res)=> console.log(res))
    }
  return (
    <div>
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
              <td>{item.email}</td>
              <td> {item.roole === "admin" ? "Admin" : <button onClick={()=> handelPremission(item._id)}> <RiAdminFill /> </button>} </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
            })}
          </tbody>
        </table>
    </div>
  )
}

export default Alluser