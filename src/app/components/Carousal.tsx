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
    { src: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1742974666/cld-sample-3.jpg", link: "https://example.com/page1", alt: "Image 1" },
    { src: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1743146674/Kiitx5_zofff6.png", link: "https://example.com/page2", alt: "Image 2" },
    { src: "https://res.cloudinary.com/dt45pu5mx/image/upload/v1743146674/Kiitx5_zofff6.png", link: "https://example.com/page3", alt: "Image 3" },
  ];

  return (
    <Carousel
      setApi={setApi}
      plugins={[
        Autoplay({
          delay: 2000, // Autoplay every 2 seconds
          stopOnInteraction: false, // Ensures autoplay continues even after user interaction
        }),
      ]}
      className="w-screen h-screen"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="flex justify-center items-center w-screen h-screen">
            <a href={image.link} target="_blank" rel="noopener noreferrer" className="w-full h-full">
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={500}
                priority={index === 0} // Improves LCP for the first image
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
