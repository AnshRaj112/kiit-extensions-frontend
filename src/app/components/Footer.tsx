import Image from "next/image";
import Foot from "./Foot";
// import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center text-2xl h-[80px] bg-[#477528] py-5 font-semibold">
        <div className="px-[2%] flex flex-row gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 48 48"
          >
            <path
              fill="#0f0"
              d="M13,42h22c3.866,0,7-3.134,7-7V13c0-3.866-3.134-7-7-7H13c-3.866,0-7,3.134-7,7v22	C6,38.866,9.134,42,13,42z"
            ></path>
            <path
              fill="#fff"
              d="M35.45,31.041l-4.612-3.051c-0.563-0.341-1.267-0.347-1.836-0.017c0,0,0,0-1.978,1.153	c-0.265,0.154-0.52,0.183-0.726,0.145c-0.262-0.048-0.442-0.191-0.454-0.201c-1.087-0.797-2.357-1.852-3.711-3.205	c-1.353-1.353-2.408-2.623-3.205-3.711c-0.009-0.013-0.153-0.193-0.201-0.454c-0.037-0.206-0.009-0.46,0.145-0.726	c1.153-1.978,1.153-1.978,1.153-1.978c0.331-0.569,0.324-1.274-0.017-1.836l-3.051-4.612c-0.378-0.571-1.151-0.722-1.714-0.332	c0,0-1.445,0.989-1.922,1.325c-0.764,0.538-1.01,1.356-1.011,2.496c-0.002,1.604,1.38,6.629,7.201,12.45l0,0l0,0l0,0l0,0	c5.822,5.822,10.846,7.203,12.45,7.201c1.14-0.001,1.958-0.248,2.496-1.011c0.336-0.477,1.325-1.922,1.325-1.922	C36.172,32.192,36.022,31.419,35.45,31.041z"
            ></path>
          </svg>
          <p>080-00000000</p>
        </div>
        <div className="px-[5%] flex flex-row gap-2">
          <Image
            src={"/mail.png"}
            alt="not found"
            className="bg-[#00FF00] rounded-2xl p-2"
            width={30}
            height={30}
          />
          <a href="mailto:admission@kiitx.com">admission@kiitx.com</a>
        </div>
        <div className="px-[5%] bg-yellow-300 h-full text-black">
          Admission Enquiry
        </div>
      </div>

      <Foot />
    </div>
  );
}
