

const DestinationCard = ({destination}) => {
  return (
    <div className="">
      <div className=" mx-auto w-[315px] overflow-hidden">
        <img src={destination.icon} alt="icon" />
      </div>
      <div className="boxShadow">
        <div  className="flex flex-2 justify-center items-center gap-7 -translate-y-20 ">
      
          <p className="text-[18px] font-medium text-paragraph">{destination.place}</p>
          <p className="text-[18px] font-medium text-paragraph"> {destination.price}</p>
      </div>
      <div>
        <p className="text-[16px] font-medium text-paragraph translate-x-25 -translate-y-18">{destination.day}</p>
      </div>
      </div>
    </div>
  )
}

export default DestinationCard
