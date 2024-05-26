import { useState } from "react";
import Datafetch from "../Layout/shared/Datafetch";

const AddImage = () => {
    const [image, setImage] = useState();
    const [defaults, setDefaults] = useState();
    const fetchdata = Datafetch()
    const handeImage = (e)=>{
        console.log(e.target.files)
        setDefaults(window.URL.createObjectURL(e.target.files[0]))
    }
    const handelimageupload = (e)=>{
        e.preventDefault();
        const img = e.target.image.files[0];
        const formdata = new FormData();
        formdata.append("image", img)
        fetchdata.post(`https://api.imgbb.com/1/upload?key=24c2feff86650aa1a9ba2b22dffc2040`, formdata)
        .then((res)=> console.log(setImage(res.data.data.display_url)))
    }
    console.log(image)
  return (
    <div className="py-[120px] container mx-auto px-[20px]">
      <div className="flex gap-[25px]">
        <div className="flex-1">
          <form onSubmit={handelimageupload}>
            <input onChange={handeImage} className="w-full" type="file" name="image" />
            <button className="w-full border mt-[20px] py-[15px]">Button</button>
          </form>
        </div>
        <div className="flex-1">
          <img src={defaults} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AddImage;
