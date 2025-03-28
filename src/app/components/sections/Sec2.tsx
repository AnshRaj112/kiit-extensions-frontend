import Image from "next/image";

const KIITXExtension = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 text-center mb-6">
        KIIT <span className="text-black">e</span>
        <span className="text-green-700">Xtension School (KIITX)</span>
      </h1>
      <p className="text-lg text-gray-700 text-center mb-6">
        <span className="font-bold text-green-700">KIITX</span> extends individual’s learning horizons by providing
        opportunities to pursue flexible, accessible & affordable higher education in online/hybrid mode culminating in
        form of certificates & degrees.
      </p>
      <p className="text-md text-gray-600 text-center mb-6">
        There shall be 4 major business verticals – Center for Online and Distance Education (CODE), Kareer and
        Work-Integrated Learning (KWIL), Kaizen Skill Development Center (KSDC) and Kinetic Active Learning for Aspiring
        Minds (KALAM) for KIIT MOOCs.
      </p>
      
      <h2 className="text-2xl font-bold text-green-600 mt-8 mb-4">Salient Features:</h2>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Image src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1743146374/Kiitx4_z1djim.png" width={50} height={50} alt="Interdisciplinary" />
          <p className="text-lg"><span className="font-bold text-blue-700">Diverse Interdisciplinary Options:</span> Get a wide variety of programs, ranging from short-term courses to full-fledged degree programs, aligned with professional career goals and aspirations.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <Image src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1743146373/Kiitx2_sd8kpj.png" width={50} height={50} alt="Self-Paced Learning" />
          <p className="text-lg"><span className="font-bold text-blue-700">Self-Paced Learning:</span> Freedom to study at own pace from anywhere and progress through course materials unlike traditional classroom.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <Image src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1743146374/Kiitx1_oqj8wg.png" width={50} height={50} alt="Balanced Work-Life-Education" />
          <p className="text-lg"><span className="font-bold text-blue-700">Balanced Work-Life-Education:</span> Weekend/off-work hours classes fostering learn-while-you-work concept of Education 4.0.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <Image src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1743146373/Kiitx3_dwt56e.png" width={50} height={50} alt="Save Time & Money" />
          <p className="text-lg"><span className="font-bold text-blue-700">Save Time & Money:</span> Eliminates the need for commuting to a physical location including spends on textbooks, study materials, etc.</p>
        </div>
      </div>
    </div>
  );
};

export default KIITXExtension;