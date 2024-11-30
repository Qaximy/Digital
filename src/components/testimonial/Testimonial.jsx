import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "David Calathan - Director of Design Operations, New York",
    text: "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.",
    img: "/src/assets/198-101x101.jpg",
  },
  {
    id: 2,
    name: "Anna Marie - Senior Analyst, San Francisco",
    text: "Power Digital’s strategies have helped us scale effectively and reach new milestones. Their team is truly remarkable and insightful.",
    img: "/src/assets/472-102x102.jpg",
  },
  {
    id: 3,
    name: "Smith - Director of Operations, New York",
    text: "The insights provided by Power Digital have been transformative for our business. We feel supported and valued.",
    img: "/src/assets/889-103x103.jpg",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className="py-10">
      <div className="container">
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6"
        >
          <Slider {...settings}>
            {testimonialData.map(({ id, name, text, img }) => (
              <div key={id} className="my-6">
                <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl dark:bg-gray-800 relative">
                  <img
                    src={img}
                    alt={`Testimonial from ${name}`}
                    className="block mx-auto h-[300px] w-full sm:w-[200px] object-cover"
                  />
                  <div className="space-y-4">
                    <p className="text-gray-500 text-black/80 dark:text-white/80 xl:pr-40">
                      “{text}”
                    </p>
                    <h1 className="text-xl font-bold">{name}</h1>
                  </div>
                  <p className="text-black/10 text-[12rem] font-serif absolute bottom-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
