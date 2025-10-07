import Banner from "../components/Banner"
import DestinationSection from "../components/DestinationSection"
import BrandSection from "../components/sections/BrandSection"
import NextTripSection from "../components/sections/NextTripSection"
import SubscribeSection from "../components/sections/SubscribeSection"
import TestimonialSection from "../components/sections/TestimonialSection"
import ServiceSection from "../components/ServiceSection"



const Home = () => {

  return (
    <>
    <Banner />
    <ServiceSection/>
    <DestinationSection/>
    <NextTripSection/>
    <TestimonialSection/>
    <BrandSection/>
    <SubscribeSection/>

    </>
  )
}

export default Home

