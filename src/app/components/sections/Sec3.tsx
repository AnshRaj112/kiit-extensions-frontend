import Image from 'next/image';

export default function KiitxImage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-100 p-4">
      <Image
        src="https://res.cloudinary.com/dt45pu5mx/image/upload/v1743146674/Kiitx5_zofff6.png"
        alt="KIITX Structure"
        width={1256}  // Adjust width
        height={1456} // Adjust height
        className="rounded-lg shadow-lg"
        priority // Ensures faster LCP for above-the-fold images
      />
    </div>
  );
}
