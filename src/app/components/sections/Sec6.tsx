"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const companyLogos = [
  {
    src: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745641556/1756fb0e-7ea4-47bd-990a-be1e2d326f43.png",
    alt: "KPMG",
  },
  {
    src: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745641593/8a7064ee-8328-449e-a642-b6c20269a168.png",
    alt: "BNY",
  },
  {
    src: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745641256/be6754c6-9974-443b-acfc-7f439603e2c6.png",
    alt: "Deloitte",
  },
  {
    src: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745641344/1ed71476-6e09-48d5-9dce-a4ec8fad3d86.png",
    alt: "YugabyteDB",
  },
  {
    src: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745641382/71f0d3be-ff9e-4ae1-b5e5-abb118f6917e.png",
    alt: "Mu Sigma",
  },
  {
    src: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745640067/0a55cf83-410e-485f-8feb-04797e91d63f.png",
    alt: "Highradius",
  },
  {
    src: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745641437/2bd3d08d-ba0a-4c3a-a8a1-240e0c053387.png",
    alt: "Microsoft",
  },
  {
    src: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745641521/6dd1ca82-7dc5-4be9-b9d7-d8ef3e7b1333.png",
    alt: "Accenture",
  },
];

const AlumniSection = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full flex flex-col mx-auto max-w-6xl items-center bg-white-50 py-12">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-4">
        Where Our Alumni Work
      </h1>
      <div className="h-1 mx-auto my-6 bg-gradient-to-r from-[#0097b2] to-[#7ed952] rounded-full w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3" />
      <div className="w-full max-w-7xl px-8">
        <Slider {...sliderSettings}>
          {companyLogos.map((logo, idx) => (
            <div
              key={idx}
              className="px-8 py-6 flex items-center justify-center" // Enlarged outer div
            >
              <div className="bg-white rounded-3xl shadow-lg h-40 w-full max-w-[250px] flex items-center justify-center p-6">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-20 object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AlumniSection;
