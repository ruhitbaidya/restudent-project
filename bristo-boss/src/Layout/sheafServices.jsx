
const SheafServices = ({image, title, desc, colorsfind, textcolor}) => {
  return (
    <div className="mb-[100px]">
      <div style={{background :`url("${image}")`, backgroundRepeat : "no-repeat", backgroundSize : "cover"}} className="py-[150px] px-[80px]">
        <div style={{background : `${colorsfind}`}} className={`py-[40px] px-[100px] findColors text-center rounded-lg`}>
          <h2 className={`text-[45px] text-gray-${textcolor}`}>{title}</h2>
          <p className={`text-gray-${textcolor}`}>
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SheafServices;
