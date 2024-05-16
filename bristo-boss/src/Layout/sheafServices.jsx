
const SheafServices = ({image, title, desc, colorsfind, textcolor}) => {
  return (
    <div className="mb-[100px]">
      <div style={{background :`url("${image}")`, backgroundRepeat : "no-repeat", backgroundSize : "cover"}} className="py-[150px] px-[80px]">
        <div style={{background : `${colorsfind}`}} className={`text-gray-${textcolor} py-[40px] px-[100px] findColors text-center rounded-lg`}>
          <h2 className="text-[45px]">{title}</h2>
          <p>
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SheafServices;
