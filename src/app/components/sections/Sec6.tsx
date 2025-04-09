"use client"

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const highlights = [
  { icon: "🌐", title: "Modality", detail: "Online/ Hybrid" },
  { icon: "📅", title: "Schedule", detail: "At your Own" },
  { icon: "💰", title: "EMI", detail: "0% Interest" },
  { icon: "⏳", title: "Finance Tenure", detail: "Program Duration" },
  { icon: "🎓", title: "Scholarship", detail: "Scheme Available" },
  { icon: "💻", title: "Scholarship", detail: "Scheme Available" },
  { icon: "💺", title: "Seat Booking", detail: "Paying Admission fee" },
];

const companyLogos = [
  { src: "/logos/kpmg.png", alt: "KPMG" },
  { src: "/logos/bny.png", alt: "BNY" },
  { src: "/logos/deloitte.png", alt: "Deloitte" },
  { src: "/logos/yugabyte.png", alt: "YugabyteDB" },
  { src: "/logos/musigma.png", alt: "Mu Sigma" },
  { src: "/logos/highradius.png", alt: "Highradius" },
  { src: "/logos/microsoft.png", alt: "Microsoft" },
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
    <div>
      {/* Blue Banner */}
      <div className="bg-blue-900 text-white flex flex-wrap justify-around items-center py-6 px-4 text-center gap-4">
        {highlights.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center w-28">
            <div className="text-3xl mb-1">{item.icon}</div>
            <div className="text-xs font-semibold">{item.title}</div>
            <div className="text-sm">{item.detail}</div>
          </div>
        ))}
      </div>

      {/* Alumni Carousel */}
      <div className="bg-green-100 py-10 text-center">
        <h2 className="text-xl font-bold text-green-800 mb-6">Companies where our Alumni work</h2>
        <div className="mx-4">
          <Slider {...sliderSettings}>
            {companyLogos.map((logo, idx) => (
              <div key={idx} className="px-4">
                <div className="bg-white shadow rounded-md flex items-center justify-center h-24 p-4">
                  <img src={logo.src} alt={logo.alt} className="max-h-12 object-contain" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AlumniSection;
