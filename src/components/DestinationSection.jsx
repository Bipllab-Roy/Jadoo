import {
  destinations_1,
  destinations_2,
  destinations_3,
} from "../constant/constant";
import DestinationCard from "./DestinationCard";
import SectionHeading from "./SectionHeading";

const destinationData = [
  {
    id: 1,
    icon: destinations_1,
    place: "Rome, Italty",
    price: "5,42",
    day: "10 Days Trip",
  },
  {
    id: 2,
    icon: destinations_2,
    place: "London, UK",
    price: "4.2",
    day: "20 Days Trip",
  },
  {
    id: 3,
    icon: destinations_3,
    place: "Full Europe",
    price: "15",
    day: "16 Days Trip",
  },
];

const DestinationSection = () => {
  return (
    <section>
      <div className="container">
        <div className="relative z-[1]">
          <div className=" absolute right-[-8px] bottom-[47px] z-[-1]">
            <img src="spring.svg" alt="spring" />
          </div>
          <SectionHeading
            heading={"Top Destinations"}
            subHeading={"Top Selling"}
          />

          <div className="grid grid-cols-3">
            {destinationData?.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;
