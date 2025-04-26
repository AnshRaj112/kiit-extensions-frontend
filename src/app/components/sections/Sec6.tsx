"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const companyLogos = [
  { src: "/logos/kpmg.png", alt: "KPMG" },
  { src: "/logos/bny.png", alt: "BNY" },
  { src: "/logos/deloitte.png", alt: "Deloitte" },
  { src: "/logos/yugabyte.png", alt: "YugabyteDB" },
  { src: "/logos/musigma.png", alt: "Mu Sigma" },
  { src: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745640067/0a55cf83-410e-485f-8feb-04797e91d63f.png", alt: "Highradius" },
  { src: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1745640013/663744e9-adca-433f-a3ed-6178652a0e4c.png", alt: "Microsoft" },
  { src: "/logos/accenture.png", alt: "Accenture" },
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
    <div className="w-full flex flex-col items-center bg-white-50 py-12">
      <h2 className="text-3xl font-bold text-green-700 mb-2">
        Companies where our Alumni work
      </h2>
      <div className="w-24 border-t-2 border-green-400 mb-6"></div>
      <div className="w-full max-w-6xl px-4">
        <Slider {...sliderSettings}>
          {companyLogos.map((logo, idx) => (
            <div key={idx} className="px-4">
              <div className="bg-white rounded-2xl shadow-md h-28 flex items-center justify-center p-4">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-12 object-contain"
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
