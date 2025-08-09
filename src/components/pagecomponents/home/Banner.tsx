export default function Banner() {
  return (
    <div className="banner-bg min-h-screen flex justify-center items-center">
      <div className="container px-5 xl:px-0 mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-300">
          Hi, {"I'm"} <span className="text-[#64BDFF]">Alex Doe</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          A Full Stack Developer building modern, scalable web applications and digital experiences that delight users.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-semibold transition duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-500 hover:border-indigo-500 text-gray-300 hover:text-white rounded-md font-medium transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  )
}
