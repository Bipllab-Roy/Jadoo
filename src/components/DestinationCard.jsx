

const DestinationCard = ({destination}) => {
  return (
    <div>
      <div>
        <img src={destination.icon} alt="icon" />
      </div>
      <div  className="flex justify-between items-center gap-4">
      
          <p className="text-[18px] font-medium text-paragraph">{destination.place}</p>
          <p className="text-[18px] font-medium text-paragraph"> {destination.price}</p>
      </div>
      <div>
        <p className="text-[16px] font-medium text-paragraph ">{destination.day}</p>
      </div>
    </div>
  )
}

export default DestinationCard
