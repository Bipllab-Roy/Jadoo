import { testimonial_1 } from "../../constant/constant";
import SectionHeading from "../SectionHeading";
import TestimonialCard from "../TestimonialCard";

import { Splide, SplideSlide } from '@splidejs/react-splide';

const TestimonialData = [
  {
    id: 1,
    image: testimonial_1,
    name: "Mike taylor",
    description: `“the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”`,
    designation: "CEO of Red Button",
  },
  {
    id: 2,
    image: testimonial_1,
    name: "Chris Thomas",
    description: `“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”`,
    designation: "CEO of Red Button",
  },
  {
    id: 3,
    image: testimonial_1,
    name: "Roy",
    description: `“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”`,
    designation: "CEO of Red Button",
  },
];

const TestimonialSection = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-[409px_504px] gap-[124px]">
          <div>
            <SectionHeading
              heading={"What people say about Us."}
              subHeading={"Testimonials"}
              align="left"
            />
          </div>
          <div className="testimonial_slider">
           
                    <Splide  options={ {
                      direction: 'ttb',
                      height   : '200px',
                      // gap:"10px"
                      // wheel    : true,
                    } }>
            {TestimonialData?.map((testimonial)=>{
              return(
            <SplideSlide  key={testimonial.id} >
           <div className="p-10">
             <TestimonialCard  testimonial={testimonial}/>
           </div>
            </SplideSlide>
              )
            })}
          </Splide> 

          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
