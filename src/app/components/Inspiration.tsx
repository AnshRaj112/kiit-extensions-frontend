import React from "react";

export default function Inspiration() {
  return (
    <section className="bg-white px-4 py-12 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-green-700">Our Inspiration</h2>
          <div className="h-0.5 mx-auto mb-12 bg-gradient-to-r from-[#0097b2] to-[#7ed952] rounded-full w-1/2 md:w-1/3" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left: Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1745349785/0775ff39-e5b4-493a-9c2c-7bc65b45883f.png"
              alt="Dr. Achyuta Samanta"
              className="rounded shadow-md w-full object-cover"
            />
          </div>

          {/* Right: Text */}
          <div className="w-full lg:w-1/2 text-justify text-gray-700 text-[1rem] leading-relaxed">
            <p className="mb-6">
              “My Loveable KIITians” is a phrase that every graduate from KIIT University dearly
              remembers and the incumbent batch is delighted to hear for the first time. Dr. Achyuta
              Samanta is an educationalist, philanthropist, humanitarian, socio-entrepreneur,
              policymaker, and a writer. He is the founder of Kalinga Institute of Industrial Technology
              (KIIT) and Kalinga Institute of Social Sciences (KISS), both educational institutions of
              global repute and recognition.
            </p>
            <p className="mb-6">
              Besides education, Dr. Samanta has made contributions in the fields of Women Empowerment,
              Rural Development, Tribal Upliftment, Art, Culture, Literature, Media and Television,
              Social Work, and Spiritualism. Know more about this modern-day philanthropic fakir, a man
              in a white shirt, denims, and chappals.
            </p>

            <a
              href="https://achyutasamanta.com/"
              className="inline-block px-6 py-3 font-semibold text-white rounded-full bg-gradient-to-r from-[#0097b2] to-[#7ed952] transition hover:scale-105"
            >
              Know More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
