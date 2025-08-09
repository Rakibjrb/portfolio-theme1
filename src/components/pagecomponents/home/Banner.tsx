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
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#3c77a3] to-[#4098FF] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-400 text-gray-200 hover:text-white hover:border-white rounded-lg font-medium transition duration-300 hover:bg-gray-800 hover:shadow-md transform hover:-translate-y-1">
            <FiMessageCircle className="text-2xl" />
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
