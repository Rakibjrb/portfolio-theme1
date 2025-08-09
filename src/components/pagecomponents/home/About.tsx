import Title from "@/components/common/Title";
import Image from "next/image";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-[#1C1C32] py-24">
      <div className="container mx-auto px-5 xl:px-0">
        <div>
          <div className="flex justify-center">
            <Title title="About Me" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#64BDFF] to-transparent mx-auto"></div>
        </div>

        <div className="mt-14 flex flex-col lg:flex-row gap-10">
          <div className="flex-1">
            <div className="w-full flex justify-center">
              <div className="overflow-hidden rounded-full border-4 border-[#64BDFF] w-[300px] h-auto">
                <Image
                  className="hover:scale-110 transition-all duration-500"
                  src={"/developer.jpg"}
                  width={500}
                  height={500}
                  alt="developer picture"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-5 justify-center mt-10">
              <div className="text-gray-300 bg-[#2E3C63] flex flex-col gap-2 justify-center items-center w-[220px] lg:w-[170px] h-[100px] border border-blue-500 rounded-xl">
                <span className="text-2xl font-bold">3+</span>
                <p className="">Year Experience</p>
              </div>
              <div className="text-gray-300 bg-[#2E3C63] flex flex-col gap-2 justify-center items-center w-[220px] lg:w-[170px] h-[100px] border border-blue-500 rounded-xl">
                <span className="text-2xl font-bold">35+</span>
                <p className="">Happy Clients</p>
              </div>
              <div className="text-gray-300 bg-[#2E3C63] flex flex-col gap-2 justify-center items-center w-[220px] lg:w-[170px] h-[100px] border border-blue-500 rounded-xl">
                <span className="text-2xl font-bold">20+</span>
                <p className="">Projects</p>
              </div>
            </div>
          </div>
          <div className="flex-1 text-gray-300 space-y-5">
            <h2 className="text-3xl font-bold">Crafting Digital Experiences</h2>
            <p className="font-semibold">
              Hello! {"I'm"} Alex Doe, a passionate full-stack developer with 3+
              years of expertise in the MERN ecosystem. I specialize in creating
              seamless, user-centric web applications that blend cutting-edge
              technology with intuitive design.
            </p>

            <p className="font-semibold">
              My journey in web development is driven by a love for
              problem-solving and a commitment to delivering exceptional digital
              experiences that make a real impact.
            </p>

            <h3 className="text-2xl font-bold">Core Expertise</h3>

            <p className="font-semibold">
              Front End | UI/UX | Performane Optimization
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#3c77a3] to-[#4098FF] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
              {"Let's Connect"}{" "}
              <FaArrowAltCircleRight className="text-xl ml-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
