import { testimonial_1 } from "../../constant/constant";
import SectionHeading from "../SectionHeading";
import TestimonialCard from "../TestimonialCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const TestimonialData = [
  {
    id: 1,
    image: testimonial_1,
    name: "Mike taylor",
    description: `“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”`,
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
    name: "Chris Thomas",
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
            <div className="">
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
