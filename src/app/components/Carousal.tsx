"use client";

import React from "react";
import Image from "next/image";
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function HomeCarousel() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  React.useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      console.log("Slide changed"); // Example action
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const images = [
    { src: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1743712271/odp_q5zobq.jpg", link: "https://example.com/page1", alt: "Image 1" },
    { src: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1743712271/continuing_education_bx7zn6.jpg", link: "https://example.com/page2", alt: "Image 2" },
  ];

  return (
    <Carousel
      setApi={setApi}
      plugins={[
        Autoplay({
          delay: 2000, 
          stopOnInteraction: false,
        }),
      ]}
      className="w-full pt-[60px] sm:pt-0" 
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="flex justify-center items-center w-full">
            <a href={image.link} target="_blank" rel="noopener noreferrer" className="w-full">
              <Image
                src={image.src}
                alt={image.alt}
                width={1899} // Adjusted for full width
                height={818} // Maintains aspect ratio
                priority={index === 0} 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
