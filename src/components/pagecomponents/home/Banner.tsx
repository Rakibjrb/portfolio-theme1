import Title from "@/components/common/Title";
import { FiMessageCircle } from "react-icons/fi";

export default function Banner() {
  return (
    <div className="banner-bg min-h-screen flex justify-center items-center">
      <div className="container px-5 xl:px-0 mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-300">
          Hi, {"I'm"}
          <span className="inline-block ml-3">
            <Title title="Alex Doe" />
          </span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          A Full Stack Developer building modern, scalable web applications and
          digital experiences that delight users.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center px-12 lg:px-0">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#64BDFF] hover:bg-[#64bcffaa] rounded-md text-black font-semibold transition duration-300">
            View Projects
          </a>
          <a
            href="#contact"
            className="flex gap-3 justify-center px-6 py-3 border-2 border-gray-500 hover:border-[#64BDFF] text-gray-300 hover:text-white rounded-md font-medium transition duration-300">
            <FiMessageCircle className="text-2xl" />
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
