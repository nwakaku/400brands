import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, Imaginary Co.",
      testimonial:
        "Vision 400 Brands is nothing short of incredible. Their guidance and expertise have transformed our business in the digital age. We were uncertain about the transition, but they demystified the technology trends and provided us with cost-effective solutions. Thanks to them, we're thriving in this ever-changing world!",
      image: "https://thispersondoesnotexist.com/", // Replace with the actual image file
    },
    {
      name: "John Doe",
      position: "COO, Dream Enterprises",
      testimonial:
        "Our partnership with Vision 400 Brands has been a game-changer. Their strategic investments and insights have propelled our growth. They understand how to navigate the digital landscape like no one else.",
      image: "https://thispersondoesnotexist.com/", // Replace with the actual image file
    },
    {
      name: "Emily Smith",
      position: "Founder, Inno Solutions",
      testimonial:
        "Vision 400 Brands simplified the complex world of technology for us. Their cost-effective solutions helped us maximize profits while expanding our customer base. It's been a transformative journey with them.",
      image: "https://thispersondoesnotexist.com/", // Replace with the actual image file
    },
    {
      name: "Michael Brown",
      position: "CTO, Tech Innovations Inc.",
      testimonial:
        "We were struggling with innovation until we partnered with Vision 400 Brands. They provided the right expertise and investments, and we've not only embraced the digital age but excelled in it.",
      image: "https://thispersondoesnotexist.com/", // Replace with the actual image file
    },
  ];

  return (
    <section
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="80"
      data-aos-duration="1200"
      className="bg-black text-white py-16"
    >
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight mb-6 relative">
          What Our Clients Say
        </h2>
        <div className=" relative mt-2 mb-2">
          <div className="absolute h-2 w-16 bg-blue-500  rounded-lg bottom-0 left-1/2 transform -translate-x-1/2 "></div>
        </div>

        <div className="mt-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-700 flex flex-col justify-between bg-opacity-80 rounded-md p-6 max-w-md mx-auto shadow-lg"
            >
              <p className="text-sm mb-4">{testimonial.testimonial}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="w-12 h-12 rounded-full mr-4"
                    src={testimonial.image}
                    alt={`${testimonial.name}'s image`}
                  />
                  <div>
                    <p className="text-lg font-semibold">{testimonial.name}</p>
                    <span className="text-sm font-light italic">
                      {testimonial.position}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
