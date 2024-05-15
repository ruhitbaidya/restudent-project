

const HeadingSection = ({subtitle, heading}) => {
  return (
    <div>
        <div className="lg:w-[35%] mx-auto my-[50px]">
            <div className="text-center">
                <p className="text-yellow-400 mb-[10px]">---{subtitle}---</p>
                <h2 className=" border-y-2 text-[35px] font-[600] py-[10px]">{heading}</h2>
            </div>
        </div>
    </div>
  )
}

export default HeadingSection