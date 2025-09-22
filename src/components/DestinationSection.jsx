import { destination_1, destination_2, destination_3} from "../constant/constant"
import DestinationCard from './DestinationCard'
import DestinationHeading from './DestinationHeading'


const destinationData=[
  {
    id:1,
    icon: destination_1 ,
    place:"Rome, Italty",
    price:"$5,42k",
    day:"10 Days Trip"

  },
  {
    id:2,
    icon: destination_2 ,
    place:"London, UK",
    price:"$4.2k",
    day:"20 Days Trip"

  },
  {
    id:3,
    icon: destination_3 ,
    place:"Full Europe",
    price:"$15k",
    day:"16 Days Trip"

  }
]

const DestinationSection = () => {
  return (
    <section >

      <div className='container'>
      <div >
        <DestinationHeading heading={"Top Destinations" } subHeading={"Top Selling"}/>
      </div>
      <div className='grid grid-cols-3'>
          {destinationData?.map(destination=> <DestinationCard key={destination.id} destination={destination}/>)}
      </div>

      </div>
    </section>
  )
}

export default DestinationSection
